//@ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  strokeSizeState,
  strokeColorState,
  downloadImageState,
  isUndoState,
  isRedoState,
} from "../atoms/states";
import { io } from "socket.io-client";
import { useDraw } from "../hooks/useDraw";
import { drawLine } from "../lib/utils/drawLine";

const socket = io("http://localhost:3001");

function Sketch3() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [size, setSize] = useRecoilState(strokeSizeState);
  const [color, setColor] = useRecoilState(strokeColorState);
  const [isDownloadImage, setIsDownloadImage] =
    useRecoilState(downloadImageState);
  const drawStack = useRef([]);
  const historyPointer = useRef(0);
  const [isUndo, setIsUndo] = useRecoilState(isUndoState);
  const [isRedo, setIsRedo] = useRecoilState(isRedoState);
  const { canvasRef, onMouseDown } = useDraw(createLine);

  function createLine({ prevPoint, currentPoint, context }: Draw) {
    socket.emit("draw-line", { prevPoint, currentPoint, color });
    drawLine({ prevPoint, currentPoint, context, color, size });
  }

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");

    socket.emit("Client Ready!!");

    socket.on("get-canvas-state", () => {
      if (!canvasRef.current?.toDataURL()) return;
      console.log("sending canvas state");
      socket.emit("canvas-state", canvasRef.current.toDataURL());
    });

    socket.on("canvas-state-from-server", (state: string) => {
      console.log("Recieved the State!!");
      const img = new Image();
      img.src = state;
      img.onload = () => {
        context?.drawImage(img, 0, 0);
      };
    });

    socket.on(
      "draw-line",
      ({ prevPoint, currentPoint, color }: DrawLineProps) => {
        if (!context) return console.log("no ctx here");
        drawLine({ prevPoint, currentPoint, context, color, size });
      }
    );

    return () => {
      socket.off("draw-line");
      socket.off("get-canvas-state");
      socket.off("canvas-state-from-server");
    };
  }, [canvasRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvasRef.current?.getContext("2d");

    const handleMouseDown = (e) => {
      setIsDrawing(true);
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      drawStack.current.push(imageData);
      historyPointer.current = drawStack.current.length - 1;
    };

    if (isUndo) {
      if (historyPointer.current > 0) historyPointer.current -= 1;
      const imageData = drawStack.current[historyPointer.current];
      context.putImageData(imageData, 0, 0);
      setIsUndo(false);
    }

    if (isRedo) {
      if (historyPointer.current > 0) historyPointer.current += 1;
      const imageData = drawStack.current[historyPointer.current];
      context.putImageData(imageData, 0, 0);
      setIsRedo(false);
    }

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDrawing, isUndo, isRedo]);

  useEffect(() => {
    if (isDownloadImage) {
      const canvas = canvasRef.current;
      const URL = canvas.toDataURL(); // Generate Data URL
      const link = document.createElement("a");
      link.href = URL;
      link.download = "drawing.png"; // Set download filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloadImage(false); // Reset download state
    }
  }, [isDownloadImage]);

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={onMouseDown}
      height={600}
      width={1030}
      className=" bg-[#252525] rounded-md"
    />
  );
}

export default Sketch3;
