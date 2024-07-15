"use client";
import Link from "next/link";
import OAuthBtn from "@/app/components/Oauth-btn";
import { LINKS } from "@/lib/links";
import EmailSignUpForm from "./EmailSignUpForm";
import NYellowLine from "@/app/components/NYellowLine";
import FormTitle from "@/app/components/FormTitle";

const SignUpEmail = () => {
  return (
    <>
      <FormTitle title="Create an account" subTitle="" />
      <div className="pt-[8px] mb-[4px]">
        {
          Number(process.env.NEXT_PUBLIC_ALLOW_NON_VALIDATED_AUTH) === 1 ?
            <>
              <EmailSignUpForm />
              <NYellowLine />
            </> :
            <></>
        }
        {
          Number(process.env.NEXT_PUBLIC_ALLOW_THIRD_PARTY_AUTH) === 1
            ? <>
              <OAuthBtn title="Signup With Github" name="github" link={LINKS.githubLogin} />
              <OAuthBtn title="Signup With Google" name="google" link={LINKS.googleLogin} />
            </>
            : <></>
        }
      </div>

      <div className="text-[#404040] w-[317px] h-[36px] mx-auto mt-[12px] text-[12px] font-[400] text-center">
        <span>By creating an account, you agree to our </span>
        <Link href={"/docs/terms-and-conditions"} className="text-link font-medium">
          Terms & Conditions
        </Link>{" "}
        <span>and</span>{" "}
        <Link href={"/docs/privacy-policy"} className="text-link font-medium">
          Privacy Policy
        </Link>
      </div>

      <div className="text-[#000] mt-[24px] text-center">
        Already have an account?{" "}
        <Link href={"/login"} className="pl-2 italic text-link ">
          Sign In
        </Link>
      </div>
    </ >
  );
};

export default SignUpEmail;
