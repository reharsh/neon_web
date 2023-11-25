"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";

const UserMenu = ({ user }: { user: UserProps }) => {
  return (
    <div className="flex flex-col sm:w-1/4 pl-4 mt-16 sm:mt-0 h-full justify-center items-center">
      <div className="text-xl mb-3 font-bold">
        Welcome, <span>{user && user.name}</span>
      </div>
      <img
        src={
          user
            ? user.profileImage
            : "https://static.vecteezy.com/system/resources/previews/028/190/440/non_2x/user-profile-avatar-of-person-with-beard-mustache-wearing-knitted-hat-on-head-man-face-portrait-in-circle-illustration-vector.jpg"
        }
        alt="The logo of Doodle Fusion."
        className="rounded-xl w-40 aspect-square"
      />
      <button
        onClick={async () => {}}
        className="rounded-lg mt-4 h-9 w-36 hover:bg-white hover:text-black border hover:border-emerald-400"
      >
        My Profile
      </button>
      <Button
        onClick={async () => {
          signOut();
        }}
        className="rounded-lg mt-4 bg-black h-9 w-36 hover:bg-white hover:text-black border hover:border-emerald-400"
      >
        <ExitIcon></ExitIcon> <span className="pl-2">Log out</span>
      </Button>
    </div>
  );
};

export default UserMenu;
