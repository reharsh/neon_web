"use client";
import React from "react";
import Sketch3 from "./sketch3";

const Canvas = () => {
  return (
    <div>
      <div
        id="canvas-container"
        className="flex justify-center items-center w-96 bg-slate-600 object-contain"
      >
        <Sketch3 />
      </div>
    </div>
  );
};

export default Canvas;
