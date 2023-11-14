"use client";
import { Session } from "inspector";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <body>{children}</body>
    </SessionProvider>
  );
};

export default Provider;
