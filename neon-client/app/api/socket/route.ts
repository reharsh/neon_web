// pages/api/socket.js
import { Server } from "socket.io";
export default async function handler(req: any, res: any) {
  console.log("connet");
  if (!res.socket.server.io) {
    const httpServer = res.socket.server;
    const io = new Server(httpServer);
    io.on("connection", (socket) => {
      console.log("Client connected");
      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
    res.socket.server.io = io;
  } else {
    console.log("Socket is already running");
  }
  res.end();
}
