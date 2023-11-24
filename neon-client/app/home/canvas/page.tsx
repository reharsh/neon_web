import React from "react";
import ToolBox from "@/ui/toolbox";
import { Button } from "@/components/ui/button";
import { ExitIcon, PlusIcon } from "@radix-ui/react-icons";
import ChatBox from "@/ui/chatbox";
import Canvas from "@/ui/canvas";
import { ModeToggle } from "@/ui/modetoggle";

const CanvasBoard = () => {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="flex md:flex-row flex-col  mx-10 mt-2">
        <div className="w-full flex justify-center items-center h-16 border">
          <ToolBox></ToolBox>
        </div>
        <div className="flex justify-center items-center h-16 border">
          <div className="mr-5">
            <ModeToggle></ModeToggle>
          </div>
          <Button variant="outline" className="mr-5">
            Canvas ID: 1298uiuhkjdkj
          </Button>
          <Button variant="destructive">
            <ExitIcon className="mr-2" />
            Leave
          </Button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col h-full m-4 border p-2">
        <div className="flex justify-center items-center md:mr-4 mb-2 rounded-md md:w-3/4 h-full border">
          <Canvas />
        </div>
        <ChatBox />
      </div>
    </div>
  );
};

export default CanvasBoard;
