"use client";
import Link from "next/link";
import { LINKS } from "@/lib/links";
import OAuthBtn from "@/app/components/Oauth-btn";
import EmailLoginForm from "./EmailLoginForm";
import NYellowLine from "@/app/components/NYellowLine";
import FormTitle from "@/app/components/FormTitle";

const SignIn = () => {
  return (
    <>
      
      <FormTitle title="Sign In" subTitle="Jump back right in" />

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
      <div className="text-[#404040] w-[517px] h-[36px] text-[12px] font-[400] text-center">
        <Link
          href={"/signup"}
          className="text-md font-[600] text-[16px] auth-btn py-[16px] mt-[4px] text-white w-full focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 text-lg px-5 text-center flex justify-center items-center mr-2 mb-2"
        >
          <div>
            Don&lsquo;t have an account? Sign Up
          </div>
        </Link>
      </div>
    </div>

  );
};

export default SignIn;
