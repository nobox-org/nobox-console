"use client";
import React from "react";
import HomePage from "../components/HomePage";
import NoSSR from "../components/NoSSR";

export default function Dashboard() {
  return (
    <main className="text-[#292D32] h-full p-[24px]">
      <NoSSR>
        <HomePage />
      </NoSSR>
    </main>
  );
}
