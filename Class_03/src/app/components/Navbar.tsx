"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex m-10 gap-10 ml-10">
      <button onClick={() => router.push("/")}>Home</button>
      <button onClick={() => router.push("/about")}>About</button>
      <button onClick={() => router.push("/contact")}>Contact</button>
    </nav>
  );
};

export default Navbar;
