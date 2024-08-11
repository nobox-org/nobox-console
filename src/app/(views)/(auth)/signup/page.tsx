"use client";
import Image from "next/image";
import React, { useState } from "react";
import SignUpNav from "@/app/components/auth/SignUpNavbar";

import Google from "../../../../assets/google-icon.svg";
import Github from "../../../../assets/github-icon.svg";
import Link from "next/link";
import OAuthBtn from "@/app/components/Oauth-btn";
import { LINKS } from "@/lib/links";
import EmailSignUpForm from "./EmailSignUpForm";
import NYellowLine from "@/app/components/NYellowLine";
import FormTitle from "@/app/components/FormTitle";
import { useSearchParams } from "next/navigation";

const SignUpEmail = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isFormFilled = email !== "" && password !== "";

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormFilled) {
      console.log(email, password);
    }
  };

  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')

  return (
    <>
    <SignUpNav />
    <p className="text-[#FFFFFF] text-[30px] font-semibold text-center mt-16">
        Create an account
      </p>
      <p className="text-[#CACFD8] text-[16px] font-normal text-center mt-3">
        Get started in few seconds
      </p>

      <form
        action=""
        onSubmit={handleSignUp}
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
          placeholder="Create a password"
          className="h-[44px] border focus:border-2 border-[#525866] focus:border-[#91B8E9] rounded-lg mt-[6px] bg-[#121212] px-[14px] placeholder-[#717784] text-[#FFFFFF] text-base font-normal outline-none"
        />

        <p className="text-[#667085] text-[14px] font-normal mt-[6px]">
          Must be at least 8 characters.
        </p>

        <button
          type="submit"
          className={`w-full h-11 rounded-lg mt-4 text-[#FFFFFF] text-base font-medium ${
            isFormFilled
              ? "bg-[#2371D4] cursor-pointer"
              : "bg-[#B6D0F1] cursor-not-allowed"
          }`}
        >
          Sign up
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
            Sign up with Google
          </p>
        </div>

        <div className="w-full h-[44px] bg-[#121212] border border-[#525866] rounded-lg mt-6 flex justify-center items-center cursor-pointer">
          <Image src={Github} alt="Github" className="w-[24px] h-[24px] ml-4" />
          <p className="text-[#CACFD8] text-base font-medium ml-3">
            Sign up with Github
          </p>
        </div>

        <p className="text-[#CACFD8] text-sm font-normal my-8 text-center">
          Already have an account?{" "}
          <a
            href="/login"
            rel="noopener noreferrer"
            className="text-[#2371D4] text-sm font-medium"
          >
            Log in
          </a>
        </p>
      </form>

      {/* <FormTitle title="Create an account" subTitle="" />
      <div className="pt-[8px] mb-[4px]">
        {
          Number(process.env.NEXT_PUBLIC_ALLOW_NON_VALIDATED_AUTH) === 1 ?
            <>
              <EmailSignUpForm />–
              <NYellowLine />
            </> :
            <></>
        }
        {
          Number(process.env.NEXT_PUBLIC_ALLOW_THIRD_PARTY_AUTH) === 1
            ? <>
              <OAuthBtn title="Signup With Github" name="github" link={`${LINKS.githubLogin}?plan=${plan}`} />
              <OAuthBtn title="Signup With Google" name="google" link={`${LINKS.googleLogin}?plan=${plan}`} />
            </>
            : <></>
        }
      </div>
      <div className="text-[#404040] h-[36px] text-[12px] font-[400] text-center">
        <Link
          href={"/login"}
          className="text-md font-[400] text-[16px] py-[16px] mt-[4px] text-black w-full focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 px-5 text-center flex justify-center items-center mr-2 mb-2"
        >
          <div>
            Already Have an Account? <br />Sign In
          </div>
        </Link>
      </div> */}
    </>
  );
};

export default SignUpEmail;
