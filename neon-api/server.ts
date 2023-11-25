const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

type Point = { x: number; y: number };

type DrawLineProps = {
  prevPoint: Point | null;
  currentPoint: Point;
  color: string;
  size: number;
};

interface CanvasState {
  [canvasId: string]: string; // Map canvasId to its state (e.g., image data)
}

//TODO: CORRECT THE CONNECTION

const canvasStates: CanvasState = {}; // Store canvas states

io.on("connection", (socket) => {
  console.log("conected!!!!");
  socket.on("client-ready", (canvasId: string) => {
    console.log("hellooooo: ", canvasId);
    socket.join(canvasId);
    socket.broadcast.to(canvasId).emit("get-canvas-state");
    if (canvasStates[canvasId]) {
      socket.emit("canvas-state-from-server", canvasStates[canvasId]);
    }
  });

  socket.on("canvas-state", (state, canvasId: string) => {
    console.log("received canvas state for canvas ID: ", canvasId);
    canvasStates[canvasId] = state;
    socket
      .to(canvasId)
      .emit("canvas-state-from-server", canvasStates[canvasId]);
  });

  socket.on(
    "draw-line",
    (
      { prevPoint, currentPoint, color, size }: DrawLineProps,
      canvasId: string
    ) => {
      socket.to(canvasId).emit("draw-line", {
        prevPoint,
        currentPoint,
        color,
        size,
      });
    }
  );
});

server.listen(3001, () => {
  console.log("✔️ Server listening on port 3001");
});
