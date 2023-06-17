"use client";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
const signUpWithGithub = () => {
  const handleButtonClick = () => {
    window.location.href =
      "http://localhost:3000/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGV0YWlscyI6eyJfaWQiOiI2NDNmMTBkNjQxYzFhNTk1NWEyYjg2MzIiLCJlbWFpbCI6ImZhdm91cnNhbXNvbjM0N0BnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91LzY4NjkyNjg0P3Y9NCIsImZpcnN0TmFtZSI6InNhbXNvbi1mYXZvdXIiLCJsYXN0TmFtZSI6bnVsbCwiY3JlYXRlZEF0IjoiMjAyMy0wNC0xOFQyMTo1MToxOC4yMzdaIiwidXBkYXRlZEF0IjoiMjAyMy0wNC0xOFQyMTo1MToxOC4yMzdaIn0sImlhdCI6MTY4Njk4NzMyMX0.YA4NeJDJGtWS7VjBuXgxSOcaariPOUO96Dc348ykKLI";
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
