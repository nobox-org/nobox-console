import React from "react";
import Image from "next/image";
import SignInNav from "@/app/components/auth/SignInNavbar";
import PasswordResetIcon from "../../../../assets/password-reset-icon.svg";
import BackIcon from "../../../../assets/back-icon.svg";

const Page: React.FC = () => {
  return (
    <div className="bg-[#121212] bg-noboxbg h-screen bg-contain bg-top">
      <SignInNav />

      <Image
        src={PasswordResetIcon}
        alt="password-reset-icon"
        className="w-[48px] h-[48px] m-auto mt-24"
      />

      <p className="text-[#FFFFFF] text-3xl font-semibold text-center mt-8">
        Password reset
      </p>

      <p className="text-[#CACFD8] text-base font-normal text-center mt-3">
        Your password has been successfully reset. <br /> Click below to log in
        to Nobox.
      </p>

      <div className="w-[118px] flex justify-center items-center cursor-pointer m-auto mt-8">
        <Image src={BackIcon} alt="Back Icon" className="mr-3" />
        <p className="text-[#2371D4] text-sm font-medium">Back to log in</p>
      </div>
    </div>
  );
};

export default Page;
