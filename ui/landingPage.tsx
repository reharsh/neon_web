import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-black p-6">
      <div className="flex flex-col justify-center items-center h-full w-1/2 pb-24">
        <h1 className="text-white text-5xl text-center my-20 font-medium">
          <div className=" text-purple-400 font-bold">Discover</div> colors with
          other
          <div className="text-emerald-400 font-bold">brushes.</div>
        </h1>
        <Link
          href="/home"
          className="flex justify-center items-center border rounded-lg hover:bg-emerald-400 hover:text-black h-12 text-white border-emerald-400 w-36 my-2 hover:border-0"
        >
          Get Started
        </Link>
      </div>
      <div className="flex justify-center items-center h-full w-1/2">
        <Image
          src="/poster.png"
          alt="image"
          width="300"
          height="00"
          className=" rounded-xl pb-12"
        />
      </div>
    </div>
  );
};

export default LandingPage;
