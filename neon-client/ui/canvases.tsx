import { actionState, canvasState } from "@/atoms/states";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const Canvases = () => {
  const [canvasID, setCanvasId] = useRecoilState(canvasState);
  const [canvasIdValue, setCanvasIdValue] = useState("");
  const [action, setAction] = useRecoilState(actionState);
  // const router = useRouter();
  const handleInputChange = (e: any) => {
    setCanvasIdValue(e.target.value);
  };
  function generateRandomId(length = 8) {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let randomId = "";
    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      randomId += characters.charAt(randomIndex);
    }

    return randomId;
  }

  const joinCanvas = () => {
    setCanvasId({ canvasID: canvasIdValue });
    setAction(true);
    // if (isJoin) router.push(`/home/canvas?canvasId=${canvasIdValue}`);
  };

  const generateID = () => {
    const newId = generateRandomId();
    setCanvasId({ canvasID: newId });
    setAction(true);
  };

  // useEffect(() => {
  //   if (typeof window !== "undefined" && router) {
  //     console.log("MOUNTED!!!!!!!! with router", router, isJoin);
  //     setIsJoin(true);
  //   }
  // }, []);

  return (
    <div className="flex flex-col sm:w-3/4 pl-4 h-full justify-center items-center">
      <Input
        id="canvasId_input"
        onChange={handleInputChange}
        type="text"
        placeholder="Canvas ID"
        autoComplete="off"
        className="flex justify-center items-cente w-52 h-11 border rounded-md my-2"
      ></Input>
      <div className="flex space-x-3"></div>
      <Link
        href="/home/canvas"
        className="flex justify-center items-cente w-52 h-11 border dark:border-white border-black dark:text-black dark:bg-white rounded-md my-2"
      >
        <Button
          onClick={joinCanvas}
          type="submit"
          className="flex justify-center items-center h-full w-full"
        >
          {" "}
          Join Canvas
        </Button>
      </Link>
      <div className="my-5 h-[1px] w-52 bg-gray-600"></div>
      <Link
        href="/home/canvas"
        className="flex justify-center items-cente w-52 h-11 border rounded-md my-2"
      >
        <Button
          onClick={generateID}
          className="flex justify-center items-center h-full w-full"
        >
          {" "}
          <PlusIcon className="mx-1"></PlusIcon>
          Create Canvas
        </Button>
      </Link>
    </div>
  );
};

export default Canvases;
