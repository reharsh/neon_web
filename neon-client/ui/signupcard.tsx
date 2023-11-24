"use client";
import React from "react";

export function SignupCard() {
  return (
    <div className="h-[450px] w-96 rounded-lg flex flex-col items-center justify-between px-3 py-4 border  border-emerald-400 hover:shadow-lg">
      <div className="h-36  rounded-md hover:bg-black w-full text-white font-semibold text-5xl">
        Join the cool brushes!
      </div>
      <div className="flex flex-col  rounded-md w-full">
        <form>
          <input
            type="text"
            id="email"
            placeholder="email"
            autoComplete="off"
            className="h-11 border p-2 my-1 border-gray-600 text-white bg-black rounded-md outline-none w-full"
          />{" "}
          <input
            type="text"
            id="password"
            placeholder="password"
            className="h-11 border p-2 my-1 border-gray-600 text-white bg-black rounded-md outline-none w-full"
          />
          <button
            onClick={() => {
              alert("the button is clicked!!.");
            }}
            type="submit"
            className="h-11 flex justify-center items-center bg-white mt-10 rounded-md w-full"
          >
            Login with Email
          </button>
        </form>
      </div>
      <div className="my-5 h-[1px] w-full bg-gray-600"></div>
      <div className="h-11 flex justify-center items-center text-white border rounded-md border-purple-400 w-full">
        Login with Google
      </div>
    </div>
  );
}
