import React, { useEffect, useState } from "react";
import Nav from "./nav";
import UserMenu from "./usermenu";
import { Separator } from "@radix-ui/react-separator";
import Canvases from "./canvases";
import { useRecoilState } from "recoil";
import { userState } from "@/atoms/states";

//TODO: Fix the name thingy and account creation

const Dashboard = ({
  email,
  name,
  profileImage,
}: {
  email: string;
  name: string;
  profileImage: string | null | undefined;
}) => {
  const [user, setUser] = useRecoilState(userState);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch("http://localhost:3000/api/user", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            email: email.toLowerCase(),
            name: name,
            profileImage: profileImage,
          }),
        });

        if (res.ok) {
          const result = await res.json();
          console.log(result);
          setUser(result);
          setIsLoading(false);
        } else {
          console.log("User Not Found!!");
          setIsLoading(false); // Update the loading state even if the user is not found
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setIsLoading(false); // Update loading state in case of an error
      }
    }
    getUser();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col w-screen h-screen">
      <Nav></Nav>
      <div className="flex sm:flex-row flex-col w-full h-full">
        <UserMenu user={user} />
        <Separator decorative orientation="vertical" />
        <Canvases></Canvases>
      </div>
    </div>
  );
};

export default Dashboard;
