import React from "react";
import Image from "next/image";

const Nav = () => {
  return (
    <div className="h-16 flex justify-between items-center text-white">
      <div className="flex items-center rounded-xl border h-full md:w-[600px] border-black">
        <Image
          src="/logo.png"
          width={150}
          height={50}
          alt="The logo of Doodle Fusion."
          className="pl-11"
        />
      </div>
    </div>
  );
};

export default Nav;
