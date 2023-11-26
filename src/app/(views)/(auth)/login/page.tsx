"use client";
import Link from "next/link";
import OAuthBtn from "./oauth-btn";
import { LINKS } from "@/lib/links";

const SignIn = () => {
  return (
    <div>
      <div className="w-[517px] h-[400px] bg-white">
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
            <div className="pt-[24px] mb-[4px]">
              <OAuthBtn link={LINKS.githubLogin} title="Login With Github" name="github" />
              {/* <OAuthBtn link={LINKS.googleLogin} title="Login With Google" name="google" /> */}
            </div>
            <div className="text-[#404040] w-[317px] h-[36px] mx-auto mt-[24px] text-[12px] font-[400] text-center">
              <span>By creating an account, you agree to our </span>
              <p>
                <Link href={"/docs/terms-and-conditions"} className="text-link font-medium">
                  Terms & Conditions
                </Link><span>&nbsp;and&nbsp;</span>
                <Link href={"/docs/privacy-policy"} className="text-link font-medium">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
