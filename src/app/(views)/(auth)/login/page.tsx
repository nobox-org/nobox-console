"use client";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";

import SignUpWithGithub from "./github";
import SignUpWithGoogle from "./google";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="w-[517px] h-[598px] bg-white">
        <div className="w-[441px]  h-[289.53px] mx-auto">
          <div className="py-[48px] h-[289.53px]">
            <div className="flex flex-col">
              <h3 className="text-[24px] h-[36px] w-[210px] font-[700] text-[#1C1B1B] tracking-[-0.02em]">
                Sign In
              </h3>
              <p className="text-[#496080] text-[14px] font-[400] w-[298px] h-[24px]">
                Jump back right in
              </p>
            </div>
            <div className="pt-[48px] mb-[25px]">
              <form className=" text-[#262626]">
                <div className="">
                  <label htmlFor="email" className="font-[400] text-[16px]">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-[#DFE5EC] focus:ring-0 rounded-sm h-[48px] pl-[16px] placeholder:text-[16px] mt-[8px] inputBorder"
                  />
                </div>
                <div className="mt-[24px]">
                  <label htmlFor="password" className="font-light">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="w-full  border border-[#DFE5EC] focus:ring-0 rounded-sm h-[48px] pl-[16px] placeholder:text-[16px] mt-[8px] inputBorder"
                    />
                    <p
                      className="text-sm absolute right-3 top-5 text-[14px] text-[#404040] font-[450] cursor-pointer"
                      onClick={handleTogglePassword}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </p>
                  </div>
                </div>
              </form>

              <button className="w-full  text-md text-[#0C0C0B] font-[600] text-[16px] auth-btn py-[16px] mt-[32px] mb-[25px]">
                Log In
              </button>

              <Link
                href={"/"}
                className="text-link justify-center flex font-[400] items-center gap-[8px]"
              >
                <span className="text-[16px]">Forgot your password?</span>
              </Link>
            </div>

            <div className="text-[#404040] w-[317px] h-[36px] mx-auto mt-[49px] text-[12px] font-[400] text-center">
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
      <div className="text-white mt-[24px] mb-[23px] text-center">
        New to NoBox?{" "}
        <Link href={"/signup"} className="pl-2 italic text-link ">
          Sign Up
        </Link>
      </div>
    </div>
  );
};



const OAUthSignIn = () => {
  return (
    <div>
      <div className="bg-white w-[517px] h-[385.53px]  flex items-center justify-center">
        <div className="w-[441px] h-[289.53px] items-center justify-center flex-col flex">
          
          <SignUpWithGithub />

          <SignUpWithGoogle />



          <div className="text-[#404040] w-[317px] h-[36px] mx-auto text-[12px] font-[400] text-center">
            <span>By creating an account, you agree to our </span>
            <Link href={"/docs/terms-and-conditions"} className="text-link font-medium">
              Terms & Conditions
            </Link>{" "}
            <span>and</span>{" "}
            <Link href={"/"} className="text-link font-medium">
              Privacy Policy
            </Link>
          SignUpWithGoogle</div>
        </div>
      </div>
    </div>
  )
}
export default OAUthSignIn;
