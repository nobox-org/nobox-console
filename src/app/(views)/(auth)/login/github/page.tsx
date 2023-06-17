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
        <div className="w-[441px] h-[289.53px] mx-auto flex
  align-items: center;
  justify-content: center;">
          <div className="h-[289.53px]">
            <div className="mb-[12px]">
              <button
                onClick={handleButtonClick}
                className="w-full flex gap-2 text-[16px] justify-center items-center bg-[#24292E] text-white px-[24px] py-[12px] "
              >
                <FaGithub className="text-lg" /> Login with GitHub
              </button>
            </div>
            <div className="text-[#404040] w-[317px] h-[36px] mx-auto text-[12px] font-[400] text-center">
              <span>By creating an account, you agree to our</span>
              <Link href={"/"} className="text-link font-medium">
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
