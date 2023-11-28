"use client";
import Link from "next/link";
import OAuthBtn from "@/app/components/Oauth-btn";
import { LINKS } from "@/lib/links";
import EmailSignUpForm from "./EmailSignUpForm";
import NYellowLine from "@/app/components/NYellowLine";
import FormTitle from "@/app/components/FormTitle";

const SignUpEmail = () => {
  return (
    <div>
      <div className="w-[517px] bg-white">
        <div className="py-[48px] px-[24px]">
          <FormTitle title="Create an account" subTitle="Sign up to Nobox with any option below" />
          <div className="pt-[8px] mb-[4px]">
            <EmailSignUpForm />
            <NYellowLine />
            <OAuthBtn title="Signup With Github" name="github" link={LINKS.githubLogin} />
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
        </div>
      </div>
      <div className="text-[#000] mt-[24px] text-center">
        Already have an account?{" "}
        <Link href={"/login"} className="pl-2 italic text-link ">
          Sign In
        </Link>
      </div>
    </div >
  );
};

export default SignUpEmail;
