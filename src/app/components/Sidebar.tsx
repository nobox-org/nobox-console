'use client';
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

import React from "react";
import { storageConstants } from "@/lib/constants";
import { LINKS } from "@/lib/links";
import { useRouter } from "next/navigation";


const Spacer = () => {
  return <div className="border-t mt-5 pt-5"></div>
}

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const closeSidebar = () => {
    document.querySelector<HTMLElement>("#sidebar")?.classList.remove("open");
  };

  const handleLogout = () => {
    localStorage.removeItem(storageConstants.NOBOX_CLIENT_TOKEN);
    router.push(LINKS.internalPages.login.github);
  }

  return (
    
    <aside className="flex flex-col h-screen justify-between gap-4 md:border-r border-[#E6E8F9]">
      <ul className=" text-[#496080] font-light">

        <div id="sidebar" className="flex flex-col bg-[#fff] gap-y-2 pt-5">

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

          <Spacer />

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

          <Spacer />

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
  );
};

export default Sidebar;
