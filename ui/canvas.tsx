"use client";
import React from "react";
import Sketch2 from "./sketch2";

const Canvas = () => {
  return (
    <div>
      <div
        id="canvas-container"
        className="flex justify-center items-center w-96 bg-slate-600 object-contain"
      >
        <Sketch2 />
      </div>
    </div>
  );
};

export default Canvas;
