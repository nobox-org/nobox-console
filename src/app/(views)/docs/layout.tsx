'use client'

import HeaderCrumbSection from "@/app/components/HeaderCrumbSection";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import SideBarLink from "./components/SideBarLink";


export default function DocsLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();


  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar?.classList.add("open");
  };

  const closeSidebar = () => {
    document.querySelector<HTMLElement>("#sidebar")?.classList.remove("open");
  };


  return (
    <section>
      <div className="md:flex justify-center ">
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
          <aside className="flex flex-col justify-between gap-4 md:border-r border-[#E6E8F9]">
            <ul className=" text-[#496080] font-light">
              <a href="/">
                <div className="h-[56px] mb-[16px] w-full border-b border-[#E6E8F9]">
                  <div className="flex gap-[8px] h-full items-center pl-[16px] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={19}
                      height={20}
                      fill="none"
                    >
                      <path
                        fill="#FECB00"
                        d="M.99 17.372V6.562a1.92 1.92 0 0 1-.693-.607A1.574 1.574 0 0 1 0 5.003V2.628c0-.495.173-.915.52-1.262.346-.346.766-.52 1.261-.52h15.24c.494 0 .915.174 1.26.52.347.347.52.767.52 1.262v2.375c0 .363-.098.68-.296.952a1.92 1.92 0 0 1-.693.606v10.811c0 .495-.173.916-.52 1.262-.346.346-.767.52-1.261.52H2.77c-.495 0-.916-.174-1.262-.52a1.718 1.718 0 0 1-.52-1.262ZM2.474 6.784v10.588c0 .083.029.153.087.21a.285.285 0 0 0 .21.087h13.26a.289.289 0 0 0 .21-.086.289.289 0 0 0 .087-.21V6.783H2.474ZM17.02 5.3a.287.287 0 0 0 .211-.087.285.285 0 0 0 .086-.21V2.628a.289.289 0 0 0-.086-.21.289.289 0 0 0-.21-.087H1.78a.286.286 0 0 0-.21.086.287.287 0 0 0-.087.21v2.376c0 .082.03.152.087.21a.284.284 0 0 0 .21.087h15.24Z"
                      />
                      <path
                        fill="#FECB00"
                        d="M11.726 14.122h-.759L7.99 10.317v3.805h-.871V8.835h.759l2.97 3.797V8.835h.88v5.287Z"
                      />
                    </svg>
                    <h3 className="text-[#1C1B1B] text-[20px] font-[500]">Nobox</h3>
                  </div>
                </div>
              </a>
              <div
                id="sidebar"
                className="px-2 flex h-screen flex-col bg-[#fff] gap-y-2"
              >
                <div
                  className="text-lg flex md:hidden justify-end text-primary cursor-pointer font-light my-4"
                  onClick={closeSidebar}
                >
                  <FaTimes />
                </div>
                <SideBarLink href="/docs/privacy-policy" title="Privacy Policy" />
                <SideBarLink href="/docs/terms-and-conditions" title="Terms And Conditions" />
              </div>
            </ul>
          </aside>
        </div>
        <div className="md:w-[calc(100%-350px)] md:ml-[350px] ">
          <div className="flex justify-between items-center px-[24px] h-[56px] border-b border-b-[#E6E8F9]">
            <div className="text-[20px] text-[#292D32]">
              <HeaderCrumbSection />
            </div>
          </div>
          <div className="bg-[#c8c8e9]  min-h-screen w-full">   <div className="flex flex-col w-full  min-h-screen justify-between px-4 py-5 items-center">
            {children}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
