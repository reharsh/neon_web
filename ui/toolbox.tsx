"use client";
import { Button } from "@/components/ui/button";
import {
  BlendingModeIcon,
  CircleIcon,
  EraserIcon,
  ImageIcon,
  MinusIcon,
  Pencil1Icon,
  PlusIcon,
  ResetIcon,
  SlashIcon,
  SquareIcon,
} from "@radix-ui/react-icons";
import React from "react";
import { ModeToggle } from "./modetoggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRecoilState } from "recoil";
import {
  currToolState,
  strokeSizeState,
  strokeColorState,
  downloadImageState,
  isUndoState,
  isRedoState,
} from "@/atoms/states";

const ToolBox = () => {
  const [currTool, setCurrTool] = useRecoilState(currToolState);
  const [strokeColor, setStrokeColor] = useRecoilState(strokeColorState);
  const [isDownloadImage, setIsDownloadImage] =
    useRecoilState(downloadImageState);
  const [isUndo, setIsUndo] = useRecoilState(isUndoState);
  const [isRedo, setIsRedo] = useRecoilState(isRedoState);
  const [strokeSize, setStrokeSize] = useRecoilState(strokeSizeState);

  return (
    <div className="flex justify-between items-center p-2 rounded-md border border-slate-700">
      <ToggleGroup type="single">
        <ToggleGroupItem
          value="bold"
          aria-label="Toggle bold"
          onClick={() => {
            setCurrTool("brush");
            setStrokeColor("#fff");
          }}
        >
          <Pencil1Icon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="eraser"
          aria-label="Toggle eraser"
          onClick={() => {
            setCurrTool("eraser");
            setStrokeColor("#252525");
          }}
        >
          <EraserIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="pink"
          aria-label="pink color"
          onClick={() => {
            setCurrTool("brush");
            setStrokeColor("#ED5AB3");
          }}
        >
          <div className="h-4 w-4 rounded-full bg-[#ED5AB3]" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="square"
          aria-label="Toggle strikethrough"
          onClick={() => {
            setCurrTool("brush");
            setStrokeColor("#A6CF98");
          }}
        >
          <div className="h-4 w-4 rounded-full bg-[#A6CF98]" />
        </ToggleGroupItem>
      </ToggleGroup>
      <div className="flex items-center mx-0.5">
        <Button
          variant="ghost"
          size="icon"
          className="mx-0.5"
          onClick={() => {
            if (strokeSize > 1) setStrokeSize(strokeSize - 1);
          }}
        >
          <MinusIcon />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="mx-0.5 flex justify-center items-center"
        >
          {strokeSize}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mx-0.5"
          onClick={() => {
            if (strokeSize < 75) setStrokeSize(strokeSize + 1);
          }}
        >
          <PlusIcon />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mx-0.5"
          onClick={() => {
            setIsDownloadImage(true);
          }}
        >
          <ImageIcon />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mx-0.5"
          onClick={() => {
            setIsUndo(true);
          }}
        >
          <ResetIcon />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="mx-0.5"
          onClick={() => {
            setIsRedo(true);
          }}
        >
          <div className=" scale-x-[-1]">
            <ResetIcon />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ToolBox;
