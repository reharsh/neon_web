"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { RecoilRoot } from "recoil";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <RecoilRoot>
        <div suppressHydrationWarning>{children}</div>
      </RecoilRoot>
    </SessionProvider>
  );
};

export default Provider;
