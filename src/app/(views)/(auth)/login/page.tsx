"use client";
import Link from "next/link";
import { LINKS } from "@/lib/links";
import OAuthBtn from "@/app/components/Oauth-btn";
import EmailLoginForm from "./EmailLoginForm";
import NYellowLine from "@/app/components/NYellowLine";
import FormTitle from "@/app/components/FormTitle";

const SignIn = () => {
  return (
    <div>
      <div className="w-[517px] bg-white">
        <div className="py-[48px] px-[24px]">
          <FormTitle title="Sign In" subTitle="Jump back right in" />
          <div className="pt-[8px] mb-[4px]">
            {
              Number(process.env.NEXT_PUBLIC_ALLOW_NON_VALIDATED_AUTH) === 1
                ?
                <>
                  <EmailLoginForm />
                  <NYellowLine />
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
      <div className="text-[#000] mt-[24px] text-center">
        Need An Account?
        <Link href={"/signup"} className="pl-2 italic text-link ">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
