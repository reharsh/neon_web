"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <body suppressHydrationWarning={true}>{children}</body>
    </SessionProvider>
  );
};

export default Provider;
