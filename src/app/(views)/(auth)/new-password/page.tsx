"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SignInNav from "@/app/components/auth/SignInNavbar";
import KeyIcon from "../../../../assets/Key-Icons.png";
import BackIcon from "../../../../assets/back-icon.svg";

const Page: React.FC = () => {
  const router = useRouter();
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const isFormFilled = password !== "" && confirmPassword !== "";

  const handleNewPassword = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormFilled) {
      console.log(password, confirmPassword);
      router.push("/password-reset");
    }
  };

  return (
    <div className="bg-[#121212] bg-noboxbg h-screen md:h-auto bg-contain bg-top">
      <SignInNav />

      <Image
        src={KeyIcon}
        alt="key-icon"
        className="w-[48px] h-[48px] m-auto mt-14 md:mt-10"
      />

      <p className="text-[#FFFFFF] text-3xl font-semibold text-center mt-8">
        Set new password
      </p>

      <p className="text-[#CACFD8] text-base font-normal text-center mt-3">
        Your new password should be different from <br /> previously used
        passwords.
      </p>

      <form
        action=""
        onSubmit={handleNewPassword}
        className="w-10/12 md:w-1/2 lg:w-2/6 m-auto h-auto mt-8 flex flex-col"
      >
        <label htmlFor="" className="text-[#CACFD8] text-[14px] font-medium">
          Password*
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Create a password"
          className="h-[44px] border focus:border-2 border-[#525866] focus:border-[#91B8E9] rounded-lg mt-[6px] bg-[#121212] px-[14px] placeholder-[#717784] text-[#FFFFFF] text-base font-normal outline-none"
        />
        <p className="text-[#667085] text-[14px] font-normal mt-[6px]">
          Must be at least 8 characters.
        </p>

        <label
          htmlFor=""
          className="text-[#CACFD8] text-[14px] font-medium mt-4"
        >
          Confirm Password*
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
          className="h-[44px] border focus:border-2 border-[#525866] focus:border-[#91B8E9] rounded-lg mt-[6px] bg-[#121212] px-[14px] placeholder-[#717784] text-[#FFFFFF] text-base font-normal outline-none"
        />

        <button
          type="submit"
          className={`w-full h-11 rounded-lg mt-4 text-[#FFFFFF] text-base font-medium ${
            isFormFilled
              ? "bg-[#2371D4] cursor-pointer"
              : "bg-[#B6D0F1] cursor-not-allowed"
          }`}
        >
          Set Password
        </button>

        <div
          onClick={() => router.push("/sign-in")}
          className="w-[120px] my-8 text-center flex justify-center items-center cursor-pointer m-auto"
        >
          <Image src={BackIcon} alt="back-icon" />
          <p className="text-[#2371D4] text-sm font-medium ml-3">
            Back to log in
          </p>
        </div>
      </form>
    </div>
  );
};

export default Page;
