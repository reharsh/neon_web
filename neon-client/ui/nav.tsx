import React from "react";
import Image from "next/image";
import { ModeToggle } from "./modetoggle";

const Nav = () => {
  return (
    <div className="h-16 flex justify-center mt-3 items-center">
      <div className="flex items-center justify-between rounded-xl border h-full sm:mx-0 mx-2 w-[600px] dark:border-gray-700">
        <Image
          src="/logo.png"
          width={150}
          height={50}
          alt="The logo of Doodle Fusion."
          className="pl-4"
        />

        <div className="pr-4">
          <ModeToggle></ModeToggle>
        </div>
      </div>
    </div>
  );
};

export default Nav;
