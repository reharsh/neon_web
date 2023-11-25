"use client";
import React, { useEffect } from "react";
import ToolBox from "@/ui/toolbox";
import { Button } from "@/components/ui/button";
import { ExitIcon, PlusIcon } from "@radix-ui/react-icons";
import ChatBox from "@/ui/chatbox";
import Canvas from "@/ui/canvas";
import { ModeToggle } from "@/ui/modetoggle";
import { useRecoilState } from "recoil";
import { canvasState } from "@/atoms/states";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const CanvasBoard = () => {
  const [canvasStateValue, setCanvasState] = useRecoilState(canvasState);
  const searchParams = useSearchParams();
  const canvasId = searchParams.get("canvasId");

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(canvasStateValue.canvasID);
      alert("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex md:flex-row flex-col  mx-10 mt-2">
        <div className="w-full flex justify-center items-center h-16 ">
          <ToolBox></ToolBox>
        </div>
        <div className="flex justify-center items-center h-16 ">
          <div className="mr-5">
            <ModeToggle></ModeToggle>
          </div>
          <Button onClick={copyText} variant="outline" className="mr-5">
            Canvas ID: <span>{canvasId}</span>
          </Button>
          <Button variant="destructive">
            <Link
              href="/home"
              className="flex justify-center items-center mr-5"
            >
              <ExitIcon className="mr-2" />
              Leave
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col h-full m-4  p-2">
        <div className="flex justify-center items-center md:mr-4 mb-2 rounded-md md:w-3/4 h-full ">
          <Canvas />
        </div>
        <ChatBox />
      </div>
    </div>
  );
};

export default CanvasBoard;
