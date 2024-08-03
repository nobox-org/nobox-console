"use client";
import Link from "next/link";
import OAuthBtn from "@/app/components/Oauth-btn";
import { LINKS } from "@/lib/links";
import EmailSignUpForm from "./EmailSignUpForm";
import NYellowLine from "@/app/components/NYellowLine";
import FormTitle from "@/app/components/FormTitle";
import { useSearchParams } from "next/navigation";

const SignUpEmail = () => {

  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')

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
      </div>
    </ >
  );
};

export default SignUpEmail;
