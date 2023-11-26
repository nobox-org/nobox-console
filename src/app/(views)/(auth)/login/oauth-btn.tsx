"use client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const OAuthBtn = ({ link, title, name }: {
  link: string;
  title: string;
  name: "google" | "github";
}) => {

  const handleButtonClick = () => {
    window.location.href = link;
  };

  return (
    <button
      onClick={handleButtonClick}
      className="text-md font-[600] text-[16px] auth-btn py-[16px] mt-[4px] text-white w-full focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 text-sm px-5 text-center inline-flex items-center justify-between  mr-2 mb-2"
    >
      {name === "google" ? <FaGoogle className="text-lg" /> : <FaGithub className="text-lg" />}{title}<div></div>
    </button>
  );
};

export default OAuthBtn;
