"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import '../styles/custom-toast.css'
import HomePage from "../components/HomePage";

export default function Dashboard() {
  return (
    <main className="text-[#292D32] h-full p-[24px]">
      <HomePage />
    </main>
  );
}
