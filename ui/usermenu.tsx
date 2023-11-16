import React from "react";
import { Button } from "@/components/ui/button";
import { ExitIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";

interface UserProps {
  id: number;
  name: string;
  email: string;
  usernames: string;
  rank: number;
  profileImage: string;
}

const UserMenu = ({ user }: { user: UserProps }) => {
  return (
    <div className="flex flex-col sm:w-1/4 pl-4 h-full justify-center items-center">
      <div className="text-xl mb-3 font-bold">
        Welcome, <span>{user && user.name}</span>
      </div>
      <img
        src={user ? user.profileImage : "/poster.png"}
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
          console.log("signed out");
        }}
        className="rounded-lg mt-4 bg-black h-9 w-36 hover:bg-white hover:text-black border hover:border-emerald-400"
      >
        <ExitIcon></ExitIcon> <span className="pl-2">Log out</span>
      </Button>
    </div>
  );
};

export default UserMenu;
