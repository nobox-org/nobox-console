"use client"
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
const signUpWithGithub = () => {
  const handleButtonClick = () => {
    window.location.href =
      "http://localhost:3000/dashboard?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6eyJfaWQiOiI2NDQyM2E5ZjYxYmMwMDI2MjBmZjUxZjUiLCJlbWFpbCI6ImplZ2VkZWFraW50dW5kZUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjMwMmY3MjkwLTA1ZmItNGM0OS1hYWJkLTExNzc1ZmZkYTc5ZCIsInBpY3R1cmUiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTcwMzM3NTk_dj00IiwiZmlyc3ROYW1lIjoiQWtpbnR1bmRlIn0sImlhdCI6MTY4MjA2MTk4MywiZXhwIjoxNjgyMTQ4MzgzfQ.hu-jzhM29wF8JoVgIlhjU3UAOGoQkTUWYYdEcOnYOmU";
  };
  return (
    <div>
      <div className="bg-white w-[517px] h-[385.53px] ">
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
              <button
                onClick={handleButtonClick}
                className="w-full flex gap-2 text-[16px] justify-center items-center bg-[#24292E] text-white px-[24px] py-[12px] "
              >
                <FaGithub className="text-lg" /> Continue with GitHub
              </button>
            </div>
            <Link
              href={"/signup-with-email"}
              className="text-link justify-center flex font-[400] items-center gap-[8px]"
            >
              <span className="text-[16px]">Continue with Email </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={19}
                height={19}
                fill="none"
              >
                <path
                  fill="#556DFF"
                  d="M11.322 14.646a.556.556 0 0 1-.397-.165.566.566 0 0 1 0-.795l4.155-4.155-4.155-4.155a.566.566 0 0 1 0-.795.566.566 0 0 1 .795 0l4.553 4.553a.566.566 0 0 1 0 .795L11.72 14.48a.556.556 0 0 1-.398.165Z"
                />
                <path
                  fill="#556DFF"
                  d="M15.748 10.094H3.125a.567.567 0 0 1-.563-.563c0-.307.256-.562.563-.562h12.623c.307 0 .562.255.562.562a.567.567 0 0 1-.562.563Z"
                />
              </svg>
            </Link>
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

export default signUpWithGithub;
