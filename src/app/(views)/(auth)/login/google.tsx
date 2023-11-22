"use client";
import { LINKS } from "@/lib/links";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignUpWithGoogle = () => {

  const handleButtonClick = () => {
    window.location.href = LINKS.googleLogin;
  };

  return (
    <div className="mb-[12px]">
      <button
        onClick={handleButtonClick}
        className="w-full flex gap-2 text-[16px] justify-center items-center bg-[#24292E] text-white px-[24px] py-[12px] "
      >
        <FaGoogle className="text-lg" /> Login with Google
      </button>
    </div>
  );
};

export default SignUpWithGoogle;
