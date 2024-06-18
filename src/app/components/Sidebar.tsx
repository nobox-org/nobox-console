import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

import React from "react";
import { storageConstants } from "@/lib/constants";
import { LINKS } from "@/lib/links";
import router from "next/router";

const Sidebar = () => {
  const pathname = usePathname();

  const closeSidebar = () => {
    document.querySelector<HTMLElement>("#sidebar")?.classList.remove("open");
  };

  const handleLogout = () => {
    localStorage.removeItem(storageConstants.NOBOX_CLIENT_TOKEN);
    router.push(LINKS.internalPages.login.github);
  }

  return (
    <div>
      <aside className="flex flex-col h-screen justify-between gap-4 md:border-r border-[#E6E8F9]">
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
                <h3 className="text-[#1C1B1B] text-[18px] font-[800]">Nobox</h3>
              </div>
            </div>
          </a>
          <div id="sidebar" className="flex flex-col bg-[#fff] gap-y-2">
            <div
              className="text-lg flex md:hidden justify-end text-primary cursor-pointer font-light my-4"
              onClick={closeSidebar}
            >
              <FaTimes />
            </div>
            <Link className={pathname == "/" ? "active" : ""} href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-home "
              >
                <path d="M9.43414 20.803V13.0557C9.43414 12.5034 9.88186 12.0557 10.4341 12.0557H14.7679C15.3202 12.0557 15.7679 12.5034 15.7679 13.0557V20.803M12.0181 3.48798L5.53031 7.9984C5.26145 8.18532 5.10114 8.49202 5.10114 8.81948L5.10117 18.803C5.10117 19.9075 5.9966 20.803 7.10117 20.803H18.1012C19.2057 20.803 20.1012 19.9075 20.1012 18.803L20.1011 8.88554C20.1011 8.55988 19.9426 8.25462 19.6761 8.06737L13.1639 3.49088C12.8204 3.24951 12.3627 3.24836 12.0181 3.48798Z"></path>
              </svg>
              <p className="pl-5">Projects</p>
            </Link>
            <div className="border-t mt-5 pt-5"></div>
            <Link className={pathname === "/access-tokens" ? "active" : ""} href="/access-tokens">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-auth "
              >
                <path d="M5.24121 15.0674H12.7412M5.24121 15.0674V18.0674H12.7412V15.0674M5.24121 15.0674V12.0674H12.7412V15.0674M15 7.60547V4.60547C15 2.94861 13.6569 1.60547 12 1.60547C10.3431 1.60547 9 2.94861 9 4.60547V7.60547M5.20898 9.60547L5.20898 19.1055C5.20898 20.21 6.10441 21.1055 7.20898 21.1055H16.709C17.8136 21.1055 18.709 20.21 18.709 19.1055V9.60547C18.709 8.5009 17.8136 7.60547 16.709 7.60547L7.20899 7.60547C6.10442 7.60547 5.20898 8.5009 5.20898 9.60547Z"></path>
              </svg>
              <p className="pl-5">Access Tokens</p>
            </Link>
            <div className="border-t mt-5 pt-5"></div>
            <a className={pathname == "docs" ? "active" : ""} target="_blank" href="https://www.docs.nobox.cloud/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sbui-icon"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
              <p className="pl-5">Guides</p>
            </a>
            <a className={pathname == "api-ref" ? "active" : ""} target="_blank" href="https://hackmd.io/iX7teLb4RL2cnOH5r2i0Ow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sbui-icon"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
              <p className="pl-5">API Reference</p>
            </a>

            {/* <a href="https://docs.nobox.cloud/install-nobox" target="_blank">
              <div
                className=""
              >
                <div className="flex w-full justify-between items-center relative">
                  <div className="flex space-x-2 flex-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                    >
                      <path
                        fill={pathname == "/docs" ? "#556DFF" : "#838389"}
                        d="M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75Zm-8-20C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25H8Z"
                      />
                      <path
                        fill={pathname == "/docs" ? "#556DFF" : "#838389"}
                        d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 17.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.06 15l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM14 17.75c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06L14.94 15l-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z"
                      />
                    </svg>
                    <span>Get Started</span>
                  </div>
                </div>
              </div>
            </a> */}
          </div>
        </ul>
        <ul className="mb-5 w-full">
          <li className="flex items-center w-full">
            <a className="w-full" onClick={handleLogout}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sbui-icon"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              <p className="pl-4">Logout</p>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
