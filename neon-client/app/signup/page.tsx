"use client";
import { userState } from "@/atoms/states";
import Link from "next/link";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

// Define your SignupPage component here
const SignupPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
    profileImage: null, // You can handle profile image separately if needed
  });

  async function createUser() {
    const { email, name, password, profileImage } = userDetails;
    const res = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email.toLowerCase(),
        name: name,
        password: password,
        profileImage: profileImage,
      }),
    });
    const result = await res.json();
    if (result.status) {
      alert("Error: " + result.message);
    } else {
      alert("Account Created!!");
      console.log("accout created!!");
    }
  }

  const handleInputChange = (e: any) => {
    setUserDetails({ ...userDetails, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex justify-center bg-black items-center h-screen w-screen overflow-hidden p-5">
      <div className="h-[450px] w-96 rounded-lg bg-black flex flex-col items-center justify-between px-3 py-4 border border-purple-400 hover:shadow-lg">
        <div className="h-36  rounded-md w-full text-white font-semibold text-5xl">
          We can't make you picasso!
        </div>
        <div className="flex flex-col  rounded-md w-full">
          <form>
            <input
              type="text"
              id="name"
              autoComplete="off"
              placeholder="name"
              className="h-11 border p-2 my-1 border-gray-600 text-white bg-black rounded-md outline-none w-full"
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="email"
              placeholder="email"
              autoComplete="off"
              className="h-11 border p-2 my-1 border-gray-600 text-white bg-black rounded-md outline-none w-full"
              onChange={handleInputChange}
            />
            <input
              type="password"
              id="password"
              autoComplete="off"
              placeholder="password"
              className="h-11 border p-2 my-1 border-gray-600 text-white bg-black rounded-md outline-none w-full"
              onChange={handleInputChange}
            />
            <div className="my-5 h-[1px] w-full bg-gray-600"></div>
            <button
              onClick={createUser}
              type="submit" // Change type to button to prevent form submission
              className="h-11 mt-2 flex justify-center items-center text-white border rounded-md border-emerald-400 hover:bg-emerald-400 hover:text-black w-full"
            >
              Create Account
            </button>
          </form>
          <div className=""></div>
          <Link
            href="/home"
            className=" p-2 my-1 text-white flex justify-center items-center"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
