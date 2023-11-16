import React, { useEffect, useState } from "react";
import Nav from "./nav";
import UserMenu from "./usermenu";
import { Separator } from "@radix-ui/react-separator";

interface UserProps {
  id: number;
  name: string;
  email: string;
  usernames: string;
  rank: number;
  profileImage: string;
}

//TODO: Fix the name thingy and account creation

const Dashboard = ({ email, name }: { email: string; name: string }) => {
  const [user, setUser] = useState<UserProps>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getUser() {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: email.toLowerCase(),
          name: name.toLowerCase().split(" ")[0],
        }),
      });
      const result = await res.json();
      console.log(result);
      setUser(result);
      setIsLoading(false);
    }
    getUser();
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex flex-col w-screen h-screen">
      <Nav></Nav>
      <div className="flex w-full h-full">
        <UserMenu user={user!} />
        <Separator decorative orientation="vertical" />
      </div>
    </div>
  );
};

export default Dashboard;
