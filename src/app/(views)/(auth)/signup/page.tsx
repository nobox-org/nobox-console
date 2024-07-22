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
        </div>
      </div>
      <div className="text-[#404040] w-[517px] h-[36px] text-[12px] font-[400] text-center">
        <Link
          href={"/login"}
          className="text-md font-[600] text-lg auth-btn py-[16px] mt-[4px] text-white w-full focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 px-5 text-center flex justify-center items-center mr-2 mb-2"
        >
          <div>
            Already Have an Account? Sign In.
          </div>
        </Link>
      </div>
    </div >
  );
};

export default SignUpEmail;
