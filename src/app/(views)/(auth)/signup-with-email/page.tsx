"use client";
import { useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";

const SignUpEmail = () => {
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
                Create an account
              </h3>
              <p className="text-[#496080] text-[14px] font-[400] w-[298px] h-[24px]">
                Sign up to Nobox with any option below
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
                Continue with Email
              </button>

              <Link
                href={"/signup"}
                className="text-link justify-center flex font-[400] items-center gap-[8px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  fill="none"
                >
                  <path
                    fill="#556DFF"
                    d="M7.177 14.115a.556.556 0 0 0 .398-.165.566.566 0 0 0 0-.795L3.42 9l4.155-4.155a.566.566 0 0 0 0-.795.566.566 0 0 0-.795 0L2.227 8.603a.566.566 0 0 0 0 .795L6.78 13.95a.556.556 0 0 0 .397.165Z"
                  />
                  <path
                    fill="#556DFF"
                    d="M2.752 9.563h12.623A.567.567 0 0 0 15.938 9a.567.567 0 0 0-.563-.563H2.752A.567.567 0 0 0 2.19 9c0 .307.255.563.563.563Z"
                  />
                </svg>
                <span className="text-[16px]">Other Sign Up Options </span>
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
      <div className="text-white mt-[24px] text-center">
        Already have an account?{" "}
        <Link href={"/login"} className="pl-2 italic text-link ">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpEmail;
