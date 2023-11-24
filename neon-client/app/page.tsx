import Image from "next/image";
import LandingPage from "@/ui/landingPage";
import NavBar from "@/ui/navbar";

export default function Home() {
  return (
    <main className="w-screen h-screen md:overflow-hidden">
      <NavBar />
      <LandingPage />
    </main>
  );
}
