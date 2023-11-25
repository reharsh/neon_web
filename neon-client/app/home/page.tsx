"use client";
import React, { useEffect, useState } from "react";
import HomeComponent from "@/ui/home";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRecoilState } from "recoil";
import { actionLoginState, actionState, canvasState } from "@/atoms/states";
const Home = () => {
  const router = useRouter();
  const [canvasID, setCanvasId] = useRecoilState(canvasState);
  const [action, setAction] = useRecoilState(actionState);
  const [loginAction, setLoginAction] = useRecoilState(actionLoginState);

  useEffect(() => {
    if (typeof window !== "undefined" && router) {
      console.log("MOUNTED!!!!!!!! with router", router);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && router) {
      console.log("MOUNTED!!!!!!!! with router", router, canvasID);
      if (action) {
        router.push(`/home/canvas?canvasId=${canvasID.canvasID}`);
        setAction(false);
      }
      if (loginAction) {
        router.push(`/home`);
        setLoginAction(false);
      }
    }
  }, [action, loginAction]);

  return (
    <div>
      <HomeComponent />
    </div>
  );
};

export default Home;
