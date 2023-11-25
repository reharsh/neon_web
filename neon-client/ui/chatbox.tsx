import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const ChatBox = () => {
  return (
    <div className="flex flex-col h-full rounded-md space-y-2 p-2 md:w-1/4">
      <div className="flex flex-col h-full w-full border dark:border-slate-800"></div>
      <div className="flex flex-col h-full w-full space-y-2">
        <div className="flex flex-col h-full w-full border dark:border-slate-800"></div>
        <div className="flex w-full items-center justify-center space-x-2">
          <Input type="text" placeholder="message" />
          <Button type="submit" className="h-8">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
