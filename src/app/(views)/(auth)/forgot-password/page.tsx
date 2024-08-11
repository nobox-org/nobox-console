"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SignInNav from "@/app/components/auth/SignInNavbar";
import KeyIcon from "../../../../assets/Key-Icons.png";

const Page: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (email !== "") {
      console.log(email);
      router.push("/mail-sent");
    }
  };

  return (
    <div className="bg-[#121212] bg-noboxbg h-screen bg-contain bg-top">
      <SignInNav />
      <Image
        src={KeyIcon}
        alt="key-icon"
        className="w-[48px] h-[48px] m-auto mt-24"
      />

      <p className="text-[#FFFFFF] text-3xl font-semibold text-center mt-8">
        Forgot password?
      </p>

      <p className="text-[#CACFD8] text-base font-normal text-center mt-3">
        Relax, we’ll send you a reset link.
      </p>

      <form
        action=""
        onSubmit={handleForgotPassword}
        className="w-10/12 md:w-1/2 lg:w-2/6 m-auto h-auto mt-8 flex flex-col"
      >
        <label htmlFor="" className="text-[#CACFD8] text-[14px] font-medium">
          Email*
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="h-[44px] border focus:border-2 border-[#525866] focus:border-[#91B8E9] rounded-lg mt-[6px] bg-[#121212] px-[14px] placeholder-[#717784] text-[#FFFFFF] text-base font-normal outline-none"
        />

        <button
          type="submit"
          className={`w-full h-11 rounded-lg mt-4 text-[#FFFFFF] text-base font-medium ${
            email !== ""
              ? "bg-[#2371D4] cursor-pointer"
              : "bg-[#B6D0F1] cursor-not-allowed"
          }`}
        >
          Send reset link
        </button>

        <p className="text-[#CACFD8] text-sm font-normal my-8 text-center">
          Remember your password?{" "}
          <a
            href="/sign-in"
            rel="noopener noreferrer"
            className="text-[#2371D4] text-sm font-medium"
          >
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Page;
