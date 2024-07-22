"use client";

import Sidebar from "@/app/components/Sidebar";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import { LINKS } from "@/lib/links";
import Image from "next/image";
import HeaderCrumbSection from "../components/HeaderCrumbSection";
import DataContextProvider from "../components/dataContext/DataContextAPI";
import NoSSR from "../components/NoSSR";
import { MainLoader } from "../components/MainLoader";
import { Toaster } from "react-hot-toast";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {

  const pathName = usePathname();

  const toggleSidebar = () => {
    console.log("toggle")
    const sidebar = document?.getElementById("sidebar");
    const menuHandle = document?.getElementById("menuHandle");

    if (!sidebar) return;
    
    sidebar.classList.toggle('open');
    menuHandle?.toggleAttribute('data-active');

  };

  if (
    pathName === "/signup" ||
    pathName === "/signup-with-email" ||
    pathName === "/login" ||
    pathName === LINKS.internalPages.login.github ||
    pathName === LINKS.internalPages.error.main ||
    pathName.startsWith("/docs")
  ) {
    return (
      <NoSSR onSSR={<MainLoader />}>
        {children}
      </NoSSR>
    )
  }

  return (
    <NoSSR onSSR={<MainLoader />}>
      <DataContextProvider>
        <section>
          <div>

            <div
              className="header w-full flex justify-between px-4 items-center border-b border-[#E6E8F9] text-[#1C1B1B] bg-[#fff]"
            >
              <a href="/">
                <div className="md:px-2 flex gap-2 ">
                  <Image
                    src="/logo.svg"
                    className="w-full"
                    alt=""
                    width={100} 
                    height={100}
                  />
                  
                  <p className="text-xl font-medium">Nobox</p>
                </div>
              </a>

              <div className="md:hidden text-xl top-most" id="menuHandle" onClick={toggleSidebar}>
                <div>

                <FiMenu />
                </div>

                <div>

                <RxCross2 />
                </div>
              </div>
            </div>

            <div className="sidebar">
              <Sidebar />
            </div>

            <div className="md:w-[calc(100%-290px)] md:ml-[290px] ">
              <div
                className="flex justify-between items-center px-[24px] h-[46px] border-b border-b-[#E6E8F9]"
              >

                <div className="text-[20px] text-[#292D32]">
                  <HeaderCrumbSection />
                </div>

                <Toaster toastOptions={{
                  style: {
                    fontSize: '14px',
                  }
                }} />

              </div>

              <div className="mx-10">
                {children}
              </div>
            </div>
          </div>
        </section>
      </DataContextProvider>
    </NoSSR>
  );
}
