"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Dashboard from "./dashboard";
import { LoginCard } from "./logincard";

export default function HomeComponent() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Dashboard></Dashboard>
      </>
    );
  }
  return <LoginCard></LoginCard>;
}
