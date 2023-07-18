import { useEffect, useState } from "react";
import Link from "next/link";
import { FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";
import React from "react";
import { findProject } from "@/lib/gen";
import useNoboxData from "@/lib/hooks/useNoboxData";
import { useRouter } from "next/router";

const Sidebar = ({ projectSlug }: any) => {
  const pathname = usePathname();

  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);
  const { data: projects } = useNoboxData();
  const router = useRouter();
  const { project_slug } = router.query;


  const project = findProject({
    projects,
    projectSlug: project_slug as string,
  });

  const closeSidebar = () => {
    document.querySelector<HTMLElement>("#sidebar")?.classList.remove("open");
  };
  const toggleDocsDropdown = () => {
    setDocsDropdownOpen((prevOpen) => !prevOpen);
  };

  return (
    <div>
      <aside className="flex flex-col justify-between gap-4 md:border-r border-[#E6E8F9]">
        <ul className=" text-[#496080] font-light">
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
            <Link
              className={
                pathname == "/"
                  ? "bg-[#ECF3FF] text-secondary font-medium flex gap-2 px-2 py-4 items-center"
                  : "flex gap-2 px-2 py-4 items-center hover:bg-[#ECF3FF] hover:text-secondary hover:font-medium"
              }
              href="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  fill={pathname == "/" ? "#556DFF" : "#838389"}
                  d="M21.5 10.9V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04C13.64 2 13 2.6 13 4.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM11 13.1v6.8c0 1.5-.64 2.1-2.23 2.1H4.73c-1.59 0-2.23-.6-2.23-2.1v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1Z"
                />
                <path
                  fill={pathname == "/" ? "#556DFF" : "#838389"}
                  d="M21.5 19.9v-2.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04C10.36 9 11 8.4 11 6.9Z"
                  opacity={0.4}
                />
              </svg>{" "}
              Overview{" "}
            </Link>
            <div
              className={
                docsDropdownOpen
                  ? "bg-[#ECF3FF] text-secondary font-medium flex gap-2 px-2 py-4 items-center cursor-pointer relative"
                  : "flex gap-2 px-2 py-4 items-center hover:bg-[#ECF3FF] hover:text-secondary hover:font-medium cursor-pointer relative"
              }
              onClick={toggleDocsDropdown}
            >
              <a href="https://docs.nobox.cloud" target="_blank">
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
                    <span>Docs</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
