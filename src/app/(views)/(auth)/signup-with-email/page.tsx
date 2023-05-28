import Link from "next/link";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
const signUpEmail = () => {
  return (
    <div>
      <div className="bg-white px-5 py-10">
        <h3 className="text-xl font-bold text-dark">Create an account</h3>
        <p className="text-neutral text-md font-light py-1">
          Sign up to Nobox with any option below
        </p>
        <form className="mt-8 text-[#262626]">
          <div className="mb-6">
            <label htmlFor="email" className=" font-light">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-[#DFE5EC] rounded-sm p-1 mt-1"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="font-light">
              Password
            </label>
            <div className="border border-[#DFE5EC] rounded-sm mt-1 p-1 flex">
              <input
                type="password"
                id="password"
                name="password"
                className="w-full "
              />
              <p className="text-sm">Show</p>
            </div>
          </div>
        </form>
        <button className="w-full flex gap-2 text-md justify-center items-center auth-btn py-2 mt-10 mb-5">
          Continue with Email
        </button>
        <Link
          href={"/signup"}
          className="text-link justify-center flex font-light items-center gap-1"
        >
          <FaArrowLeft className="font-thin" /> Other Sign Up Options
        </Link>
        <div className="text-[#404040] mt-8 text-sm font-light text-center">
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
        <Link href={"/login"} className="pl-2 text-link font-medium">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default signUpEmail;
