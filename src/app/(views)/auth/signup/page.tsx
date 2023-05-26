import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
const signUpWithGithub = () => {
  return (
    <div>
      <div className="bg-white px-5 py-10">
        <h3 className="text-xl font-bold text-dark">Create an account</h3>
        <p className="text-neutral text-md font-light py-1">
          Sign up to Nobox with any option below
        </p>
        <button className="w-full flex gap-2 text-md justify-center items-center bg-[#24292E] text-white py-2 mt-8 mb-5">
          <FaGithub className="text-lg" /> Continue with GitHub
        </button>
        <Link
          href={"/auth/signup-with-email"}
          className="text-link justify-center flex font-light items-center gap-1"
        >
          Continue with Email <FaArrowRight className="font-thin" />
        </Link>
        <div className="text-[#404040] mt-10 text-sm font-light text-center">
          By creating an account, you agree to our{" "}
          <Link href={"/"} className="text-link font-medium">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link href={"/"} className="text-link font-medium">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="text-white mt-5 text-center">
        Already have an account?{" "}
        <Link href={"/auth/login"} className="pl-2 text-link font-medium">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default signUpWithGithub;
