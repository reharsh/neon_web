"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Dashboard from "./dashboard";
import { LoginCard } from "./logincard";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/states";

export default function HomeComponent() {
  const { data: session } = useSession();
  const [userValue, setUser] = useRecoilState(userState);

  React.useEffect(() => {
    if (session) {
      const tempUser = {
        name: session!.user?.name!,
        email: session!.user?.email!,
        password: "",
        profileImage: session!.user?.image || "", // Providing a default empty string if profileImage is null/undefined
        role: "USER",
      };

      setUser(tempUser);
    }
  }, [session, setUser]);

  const tempUser = {
    name: "",
    email: "",
    password: "",
    profileImage: "",
    role: "USER",
  };

  const isUserValueEqualTempUser =
    userValue.name === tempUser.name &&
    userValue.email === tempUser.email &&
    userValue.profileImage === tempUser.profileImage &&
    userValue.role === tempUser.role;

  if (!isUserValueEqualTempUser) {
    return (
      <div className="flex justify-center items-center h-screen w-screen overflow-hidden p-5">
        <Dashboard
          email={userValue.email}
          name={userValue.name}
          profileImage={userValue.profileImage}
        ></Dashboard>
      </div>
    );
  }

  return (
    <div className="flex justify-center bg-black items-center h-screen w-screen overflow-hidden p-5">
      <LoginCard></LoginCard>
    </div>
  );
}
