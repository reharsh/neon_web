//@ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  strokeSizeState,
  strokeColorState,
  currToolState,
  downloadImageState,
  isUndoState,
  isRedoState,
} from "../atoms/states";

function Sketch2() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokeSize, setStrokeSize] = useRecoilState(strokeSizeState);
  const [strokeColor, setStrokeColor] = useRecoilState(strokeColorState);
  const [currTool, setCurrTool] = useRecoilState(currToolState);
  const [isDownloadImage, setIsDownloadImage] =
    useRecoilState(downloadImageState);
  const drawStack = useRef([]);
  const historyPointer = useRef(0);
  const [isUndo, setIsUndo] = useRecoilState(isUndoState);
  const [isRedo, setIsRedo] = useRecoilState(isRedoState);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = strokeColor;
    context.lineWidth = strokeSize;
    contextRef.current = context;

    const handleMouseDown = (e) => {
      setIsDrawing(true);
      contextRef.current.beginPath();
      contextRef.current.moveTo(
        e.clientX - canvas.offsetLeft,
        e.clientY - canvas.offsetTop
      );
    };

    const drawRect = (e) => {
      context.strokeRect(
        e.offsetX,
        e.offsetY,
        preMousex - e.offsetX,
        prevMouseY - e.offsetY
      );
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      if (currTool == "brush" || currTool == "eraser") {
        contextRef.current.lineTo(
          e.clientX - canvas.offsetLeft,
          e.clientY - canvas.offsetTop
        );
        contextRef.current.stroke();
      } else if (currTool == "rectangle") {
        drawRect(e);
      }

      console.log(currTool);
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
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
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
      height={600}
      width={1030}
      className=" bg-[#252525] rounded-md"
    />
  );
}

export default Sketch2;
