"use client";
import { LINKS } from "@/lib/links";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const signUpWithGithub = () => {

  const handleButtonClick = () => {
    window.location.href = LINKS.githubLogin;
  };

  return (
    <div>
      <div className="bg-white w-[517px] h-[385.53px]  flex items-center justify-center">
        <div className="w-[441px] h-[289.53px] items-center justify-center flex-col flex">
          <div className="mb-[12px]">
            <button
              onClick={handleButtonClick}
              className="w-full flex gap-2 text-[16px] justify-center items-center bg-[#24292E] text-white px-[24px] py-[12px] "
            >
              <FaGithub className="text-lg" /> Login with GitHub
            </button>
          </div>
          <div className="text-[#404040] w-[317px] h-[36px] mx-auto text-[12px] font-[400] text-center">
            <span>By creating an account, you agree to our </span>
            <Link href={"/docs/terms-and-conditions"} className="text-link font-medium">
              Terms & Conditions
            </Link>{" "}
            <span>and</span>{" "}
            <Link href={"/"} className="text-link font-medium">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};



const SignUpWithGithub = () => {

  const handleButtonClick = () => {
    window.location.href = LINKS.githubLogin;
  };

  return (
    <div className="mb-[12px]">
      <button
        onClick={handleButtonClick}
        className="w-full flex gap-2 text-[16px] justify-center items-center bg-[#24292E] text-white px-[24px] py-[12px] "
      >
        <FaGithub className="text-lg" /> Login with GitHub
      </button>
    </div>
  );
};

export default SignUpWithGithub;
