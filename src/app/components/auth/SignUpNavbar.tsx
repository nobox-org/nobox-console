"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./Button";
import Logo from "../../../assets/Logomark.png"; 
import MenuOpen from "../../../assets/menu-open.svg";
import MenuClose from "../../../assets/menu-close.svg";

function Navbar() {
  const router = useRouter();
  const [navbar, setNavbar] = useState<boolean>(false);

  return (
    <nav>
      <div className="w-full flex justify-between items-center px-4 md:px-10 py-1 md:py-3">
        <Image
          src={Logo}
          alt="Logo"
          className="w-[104px] md:w-[104px] h-[30px] md:h-[30px] cursor-pointer"
          onClick={
            () => {
              router.push("https://www.nobox.cloud");
          } }
        />
        {/* HAMBURGER BUTTON FOR MOBILE */}
        <div className="lg:hidden">
          <button
            className="p-2 outline-none"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <Image src={MenuClose} width={30} height={30} alt="close icon" />
            ) : (
              <Image src={MenuOpen} width={30} height={30} alt="menu icon" />
            )}
          </button>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="hidden lg:flex items-center">
          <Button text="Log in" route="/login" />
          <button onClick={() => router.push("https://www.nobox.cloud/contact-us")}  className="bg-[#2371D4] text-[#FFFFFF] w-[114px] h-[44px] rounded-[8px] text-sm md:text-base font-normal md:font-medium text-center ml-5">
            Contact us
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {navbar && (
        <div className="lg:hidden w-full bg-[#121212] h-screen fixed top-16 left-0 z-50 pt-20">
          <div  className="bg-[#2371D4] text-[#FFFFFF] w-10/12 md:w-1/2 text-center items-center m-auto py-3 h-12 rounded-lg text-base font-medium cursor-pointer">
            Sign up
          </div>
          <div
          onClick={() => router.push("https://www.nobox.cloud/contact-us")}
          className="bg-[#FFFFFF] text-[#2371D4] w-10/12 md:w-1/2 text-center items-center m-auto py-3 h-12 rounded-lg text-base font-medium cursor-pointer mt-10">
            Contact us
          </div>
        </div>
      )}

      <hr className="w-full h-[1px] border-0 bg-[#214E87]" />
    </nav>
  );
}

export default Navbar;
