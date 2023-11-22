import { PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const Canvases = () => {
  return (
    <div className="flex flex-col sm:w-3/4 pl-4 h-full justify-center items-center">
      <Link
        href="/home/canvas"
        className="flex justify-center items-cente w-52 h-11 border dark:border-white border-black dark:text-black dark:bg-white rounded-xl"
      >
        <div className="flex justify-center items-center h-full w-full">
          {" "}
          <PlusIcon className="mx-1"></PlusIcon>
          New Canvas
        </div>
      </Link>
    </div>
  );
};

export default Canvases;
