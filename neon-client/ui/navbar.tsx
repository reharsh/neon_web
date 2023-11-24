import React from "react";
import Image from "next/image";
import { ModeToggle } from "./modetoggle";

const NavBar = () => {
  return (
    <div className=" pt-5 bg-black">
      <div className="flex justify-center items-center w-full h-14 px-10">
        <Image
          src="/logo.png"
          width={150}
          height={50}
          alt="The logo of Doodle Fusion."
        />
      </div>
    </div>
  );
};

export default NavBar;
