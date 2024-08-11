"use client";
import Image from "next/image";
import React, { useState } from "react";
import SignInNav from "@/app/components/auth/SignInNavbar";
import Google from "../../../../assets/google-icon.svg";
import Github from "../../../../assets/github-icon.svg";
import Link from "next/link";
import { LINKS } from "@/lib/links";
import OAuthBtn from "@/app/components/Oauth-btn";
import EmailLoginForm from "./EmailLoginForm";
import FormTitle from "@/app/components/FormTitle";


const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isFormFilled = email !== "" && password !== "";

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormFilled) {
      console.log(email, password);
    }
  };

  return (
    <>
    < SignInNav />

<p className="text-[#FFFFFF] text-[30px] font-semibold text-center mt-16">
        Log in to NoBox
      </p>
      <p className="text-[#CACFD8] text-[16px] font-normal text-center mt-3">
        Welcome back! Kindly enter your details.
      </p>

      <form
        action=""
        onSubmit={handleSignIn}
        className="w-10/12 md:w-1/2 lg:w-2/6 m-auto h-auto mt-8 flex flex-col"
      >
        <label htmlFor="" className="text-[#CACFD8] text-[14px] font-medium">
          Email*
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="h-[44px] border focus:border-2 border-[#525866] focus:border-[#91B8E9] rounded-lg mt-[6px] bg-[#121212] px-[14px] placeholder-[#717784] text-[#FFFFFF] text-base font-normal outline-none"
        />

        <label
          htmlFor=""
          className="text-[#CACFD8] text-[14px] font-medium mt-4"
        >
          Password*
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
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
          Log in
        </button>

        <div className="flex items-center justify-center w-full my-3">
          <hr className="w-full h-px my-8" />
          <span className="absolute px-3 font-medium text-[#667085] -translate-x-1/2 left-1/2 bg-[#121212]">
            OR
          </span>
        </div>

        <div className="w-full h-[44px] bg-[#121212] border border-[#525866] rounded-lg flex justify-center items-center cursor-pointer">
          <Image src={Google} alt="Google" className="w-[24px] h-[24px] ml-4" />
          <p className="text-[#CACFD8] text-base font-medium ml-3">
            Sign in with Google
          </p>
        </div>

        <div className="w-full h-[44px] bg-[#121212] border border-[#525866] rounded-lg mt-6 flex justify-center items-center cursor-pointer">
          <Image src={Github} alt="Github" className="w-[24px] h-[24px] ml-4" />
          <p className="text-[#CACFD8] text-base font-medium ml-3">
            Sign in with Github
          </p>
        </div>

        <p className="text-[#CACFD8] text-sm font-normal my-8 text-center">
          Don’t have an account?{" "}
          <a
            href="/signup"
            rel="noopener noreferrer"
            className="text-[#2371D4] text-sm font-medium"
          >
            Sign up
          </a>
        </p>
      </form>

      {/* <FormTitle title="Sign In" subTitle="Jump back right in" />

      <div className="pt-[8px] mb-[4px]">
        {
          Number(process.env.NEXT_PUBLIC_ALLOW_NON_VALIDATED_AUTH) === 1
            ?
            <>
              <EmailLoginForm />
            </>
            : <></>
        }{
          Number(process.env.NEXT_PUBLIC_ALLOW_THIRD_PARTY_AUTH) === 1
            ? <>
              <OAuthBtn link={LINKS.githubLogin} title="Login With Github" name="github" />
              <OAuthBtn link={LINKS.googleLogin} title="Login With Google" name="google" />
            </>
            : <></>
        }
      </div>
      <div className="text-[#404040] h-[36px] text-[12px] font-[400] text-center">
        <Link
          href={"/signup"}
          className="text-md font-[400] text-[16px] py-[16px] mt-[4px] text-black w-full focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 px-5 text-center flex justify-center items-center mr-2 mb-2"
        >
          Don&lsquo;t have an account? <br />Sign Up
        </Link>
      </div> */}
    </>

  );
};

export default SignIn;
