"use client";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRecoilState } from "recoil";
import { actionLoginState, userState } from "@/atoms/states";

export function LoginCard() {
  const [user, setUser] = useRecoilState(userState);
  const [loginAction, setLoginAction] = useRecoilState(actionLoginState);
  const [isLoading, setIsLoading] = useState(false);

  async function getUser({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    setIsLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: email.toLowerCase(),
          password: password,
        }),
      });
      if (res.ok) {
        const result = await res.json();
        setUser(result);
      } else {
        console.log("User Not Found!!");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    setLoginAction(true);
  }, [user]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    if (email && password) {
      await getUser({ email, password });
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="h-[450px] w-96 rounded-lg bg-black flex flex-col items-center justify-between px-3 py-4 border  border-purple-400 hover:shadow-lg">
      <div className="h-36 rounded-md w-full text-white font-semibold text-5xl">
        Pick up the Brush!
      </div>
      <div className="flex flex-col rounded-md w-full">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            autoComplete="off"
            className="h-11 border p-2 my-1 border-gray-600 text-white bg-black rounded-md outline-none w-full"
          />
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="password"
            className="h-11 border p-2 my-1 border-gray-600 text-white bg-black rounded-md outline-none w-full"
          />
          <button
            type="submit"
            className="h-11 flex justify-center items-center bg-white text-black mt-10 rounded-md w-full"
          >
            Login with Email
          </button>
        </form>
      </div>
      <div className="my-5 h-[1px] w-full bg-gray-600"></div>
      <button
        onClick={() => {
          signIn("google");
        }}
        className="h-11 flex justify-center items-center text-white border rounded-md border-emerald-400 w-full"
      >
        Login with Google
      </button>
    </div>
  );
}
