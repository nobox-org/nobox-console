"use client";

import Sidebar from "@/app/components/Sidebar";
import { FiMenu } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { storageConstants } from "@/lib/constants";
import { LINKS } from "@/lib/links";
import Image from "next/image";
import HeaderCrumbSection from "../components/HeaderCrumbSection";
import DataContextProvider from "../components/dataContext/DataContextAPI";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const pathName = usePathname();

  const router = useRouter();

  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar?.classList.add("open");
  };


  if (
    pathName === "/signup" ||
    pathName === "/signup-with-email" ||
    pathName === "/login" ||
    pathName === LINKS.internalPages.login.github ||
    pathName === LINKS.internalPages.error.main ||
    pathName.startsWith("/docs")
  ) {
    return <>{children}</>
  }

  const handleLogout = () => {
    localStorage.removeItem(storageConstants.NOBOX_CLIENT_TOKEN);
    router.push(LINKS.internalPages.login.github);
  }

  return (
    <DataContextProvider>
      <section>
        <div>
          <div className="md:hidden fixed top-0 left-0 w-full bg-white flex pb-2 pt-6 justify-between px-4 items-center border-b border-[#E6E8F9] text-[#1C1B1B]">
            <a href="/">
              <div className="md:px-2 flex gap-2 ">
                <Image src="/logo.svg" className="w-full" alt="" width={100} height={100} />
                <p className="text-xl font-medium">Nobox</p>
              </div>
            </a>
            <div className=" text-xl" onClick={toggleSidebar}>
              <FiMenu />
            </div>
          </div>
          <div className="md:w-[350px] w-full fixed top-0 left-0 bg-white">
            <Sidebar />
          </div>
          <div className="md:w-[calc(100%-350px)] md:ml-[350px] ">
            <div className="flex justify-between items-center px-[24px] h-[56px] border-b border-b-[#E6E8F9]">
              <div className="text-[20px] text-[#292D32]">
                <HeaderCrumbSection />
              </div>
              <div className=" flex items-center text-[16px]">
                <button onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
            <div className="bg-[#c8c8e9]">{children}</div>
          </div>
        </div>
      </section>
    </DataContextProvider>
  );
}
