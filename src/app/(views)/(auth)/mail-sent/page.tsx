"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SignInNav from "@/app/components/auth/SignInNavbar";
import MessageIcon from "../../../../assets/check-message-icon.png";
import BackIcon from "../../../../assets/back-icon.svg";

const Page: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-[#121212] bg-noboxbg h-screen bg-contain bg-top">
      <SignInNav />

      <Image
        src={MessageIcon}
        alt="message-icon"
        className="w-[48px] h-[48px] m-auto mt-24"
      />

      <p className="text-[#FFFFFF] text-3xl font-semibold text-center mt-8">
        Check your email
      </p>

      <p className="text-[#CACFD8] text-base font-normal text-center mt-3">
        We sent a password reset link to <br /> johnnyxyz@gmail.com
      </p>

      <p className="text-[#CACFD8] text-sm font-normal my-8 text-center">
        Didn’t receive the email?{" "}
        <a
          href="/"
          rel="noopener noreferrer"
          className="text-[#2371D4] text-sm font-medium"
        >
          Click to resend
        </a>
      </p>
      <div className="w-[118px] flex justify-center items-center cursor-pointer m-auto">
        <Image src={BackIcon} alt="Back Icon" className="mr-3" />
        <p className="text-[#2371D4] text-sm font-medium">Back to log in</p>
      </div>
    </div>
  );
};

export default Page;
