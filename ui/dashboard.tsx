import React, { useEffect, useState } from "react";
import Nav from "./nav";
import Image from "next/image";

const Dashboard = ({ props }: any) => {
  useEffect(() => {});
  return (
    <div className="flex flex-col w-screen">
      <Nav></Nav>
      <div className="flex flex-col h-screen p-16 text-white">
        <Image
          src="/poster.png"
          width={150}
          height={50}
          alt="The logo of Doodle Fusion."
          className="rounded-xl"
        />
        <div className="text-xl font-bold">Welcome, Harsh</div>
        <button
          onClick={async () => {}}
          className="rounded-lg h-9 w-36 bg-white text-purple-400 border hover:border-emerald-400"
        >
          My Canvases
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
