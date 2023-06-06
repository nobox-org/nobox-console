import { useState } from "react";
import Link from "next/link";
import { VscFileCode } from "react-icons/vsc";
import { BsFolder2Open } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaTimes, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);

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
          <div id="sidebar" className="px-2 flex h-screen flex-col gap-y-2">
            <div
              className="text-lg flex md:hidden justify-end text-primary cursor-pointer font-light my-4"
              onClick={closeSidebar}
            >
              <FaTimes />
            </div>
            <Link
              className={
                pathname == "/dashboard"
                  ? "bg-[#ECF3FF] text-secondary font-medium flex gap-2 px-2 py-4 items-center"
                  : "flex gap-2 px-2 py-4 items-center hover:bg-[#ECF3FF] hover:text-secondary hover:font-medium"
              }
              href="/dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  fill={
                    pathname == "/dashboard" ? "#556DFF" : "#838389"
                  }
                  d="M21.5 10.9V4.1c0-1.5-.64-2.1-2.23-2.1h-4.04C13.64 2 13 2.6 13 4.1v6.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM11 13.1v6.8c0 1.5-.64 2.1-2.23 2.1H4.73c-1.59 0-2.23-.6-2.23-2.1v-6.8c0-1.5.64-2.1 2.23-2.1h4.04c1.59 0 2.23.6 2.23 2.1Z"
                />
                <path
                  fill={
                    pathname == "/dashboard" ? "#556DFF" : "#838389"
                  }
                  d="M21.5 19.9v-2.8c0-1.5-.64-2.1-2.23-2.1h-4.04c-1.59 0-2.23.6-2.23 2.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04c1.59 0 2.23-.6 2.23-2.1ZM11 6.9V4.1C11 2.6 10.36 2 8.77 2H4.73C3.14 2 2.5 2.6 2.5 4.1v2.8c0 1.5.64 2.1 2.23 2.1h4.04C10.36 9 11 8.4 11 6.9Z"
                  opacity={0.4}
                />
              </svg>{" "}
              Overview{" "}
            </Link>
            <Link
              className={
                pathname == "/dashboard/projects"
                  ? "bg-[#ECF3FF] text-secondary font-medium flex gap-2 px-2 py-4 items-center"
                  : "flex gap-2 px-2 py-4 items-center hover:bg-[#ECF3FF] hover:text-secondary hover:font-medium"
              }
              href="/dashboard/projects"
            >
              {/* <BsFolder2Open className="text-2xl" /> Projects */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  fill={
                    pathname == "/dashboard/projects" ? "#556DFF" : "#838389"
                  }
                  d="M22 11.07v5.58C22 19.6 19.6 22 16.65 22h-9.3C4.4 22 2 19.6 2 16.65V9.44h19.74c.15.45.23.91.25 1.4.01.07.01.16.01.23Z"
                />
                <path
                  fill={
                    pathname == "/dashboard/projects" ? "#556DFF" : "#838389"
                  }
                  d="M21.74 9.44H2V6.42C2 3.98 3.98 2 6.42 2h2.33c1.63 0 2.14.53 2.79 1.4l1.4 1.86c.31.41.35.47.93.47h2.79c2.37-.01 4.39 1.55 5.08 3.71Z"
                  opacity={0.4}
                />
              </svg> Projects
            </Link>
            <Link
              className={
                pathname == "/dashboard/records"
                  ? "bg-[#ECF3FF] text-secondary font-medium flex gap-2 px-2 py-4 items-center"
                  : "flex gap-2 px-2 py-4 items-center hover:bg-[#ECF3FF] hover:text-secondary hover:font-medium"
              }
              href="/dashboard/records"
            >
              {/* <BsFolder2Open className="text-2xl" /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  fill="#496080"
                  d="M18.29 22.75H5.71c-3.4 0-3.58-1.87-3.73-3.38l-.4-5.01c-.09-.97.19-1.94.81-2.72a3.74 3.74 0 0 1 2.92-1.39h13.38c1.11 0 2.16.49 2.87 1.34l.17.23c.54.74.78 1.64.69 2.55l-.4 4.99c-.15 1.52-.33 3.39-3.73 3.39Zm-12.98-11c-.67 0-1.31.3-1.73.82l-.07.07c-.32.41-.49.99-.43 1.59l.4 5.01c.14 1.46.2 2.01 2.23 2.01h12.58c2.04 0 2.09-.55 2.23-2.02l.4-5.01a2.18 2.18 0 0 0-.5-1.64l-.1-.12c-.45-.47-1.02-.71-1.64-.71H5.31Z"
                />
                <path
                  fill="#496080"
                  d="M20.5 12.22c-.41 0-.75-.34-.75-.75V9.68c0-2.98-.52-3.5-3.5-3.5H13.7c-1.13 0-1.52-.4-1.95-.97L10.46 3.5c-.44-.58-.54-.72-1.44-.72H7.75c-2.98 0-3.5.52-3.5 3.5v5.15c0 .41-.34.75-.75.75s-.75-.34-.75-.75V6.28c0-3.83 1.17-5 5-5h1.28c1.54 0 2.02.5 2.64 1.32l1.28 1.7c.27.36.29.38.76.38h2.55c3.83 0 5 1.17 5 5v1.79a.77.77 0 0 1-.76.75ZM14.57 17.75H9.43c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5.14a.749.749 0 1 1 0 1.5Z"
                />
              </svg>
              Records
            </Link>
            <div
              className={
                docsDropdownOpen
                  ? "bg-[#ECF3FF] text-secondary font-medium flex gap-2 px-2 py-4 items-center cursor-pointer relative"
                  : "flex gap-2 px-2 py-4 items-center hover:bg-[#ECF3FF] hover:text-secondary hover:font-medium cursor-pointer relative"
              }
              onClick={toggleDocsDropdown}
            >
              {/* Add an icon here to indicate that this is a dropdown */}
              {docsDropdownOpen ? (
                <>
                  <div className="flex w-full justify-between items-center">
                    <div className="flex space-x-2 flex-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                      >
                        <path
                          fill={
                            pathname == "/dashboard/docs"
                              ? "#556DFF"
                              : "#838389"
                          }
                          d="M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75Zm-8-20C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25H8Z"
                        />
                        <path
                          fill={
                            pathname == "/dashboard/docs"
                              ? "#556DFF"
                              : "#838389"
                          }
                          d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 17.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.06 15l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM14 17.75c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06L14.94 15l-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z"
                        />
                      </svg>
                      <span>Docs</span>
                    </div>
                    <div>
                      <FaChevronDown />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex w-full justify-between items-center">
                    <div className="flex space-x-2 flex-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                      >
                        <path
                          fill={
                            pathname == "/dashboard/docs"
                              ? "#556DFF"
                              : "#838389"
                          }
                          d="M16 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V7c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v10c0 3.65-2.1 5.75-5.75 5.75Zm-8-20C5.14 2.75 3.75 4.14 3.75 7v10c0 2.86 1.39 4.25 4.25 4.25h8c2.86 0 4.25-1.39 4.25-4.25V7c0-2.86-1.39-4.25-4.25-4.25H8Z"
                        />
                        <path
                          fill={
                            pathname == "/dashboard/docs"
                              ? "#556DFF"
                              : "#838389"
                          }
                          d="M18.5 9.25h-2c-1.52 0-2.75-1.23-2.75-2.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 .69.56 1.25 1.25 1.25h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 17.75c-.19 0-.38-.07-.53-.22l-2-2a.755.755 0 0 1 0-1.06l2-2c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L9.06 15l1.47 1.47c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM14 17.75c-.19 0-.38-.07-.53-.22a.755.755 0 0 1 0-1.06L14.94 15l-1.47-1.47a.755.755 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06l-2 2c-.15.15-.34.22-.53.22Z"
                        />
                      </svg>
                      <span>Docs</span>
                    </div>
                    <div>
                      <FaChevronRight />
                    </div>
                  </div>
                </>
              )}
              {/* {docsDropdownOpen && (
                <div className="absolute top-full left-0 w-full h-[1px] bg-gray-300" />
              )} */}
            </div>
            {docsDropdownOpen && <div className=""></div>}

            {docsDropdownOpen && (
              <ul className="pl-8 flex flex-col space-y-3">
                <li className="bg-[#ECF3FF] px-[22px] py-[8px]">
                  <Link
                    href="dashboard/docs"
                    className={`${
                      pathname === "dashboard/docs"
                        ? "text-[#556DFF]"
                        : "#838389"
                    } font-[500] text-[14px]`}
                  >
                    Get started
                  </Link>
                </li>
                <li className="bg-[#ECF3FF] px-[22px] py-[8px]">
                  <Link
                    href="dashboard/docs/user-guide"
                    className={`${
                      pathname === "dashbord/docs/user-guide"
                        ? "text-[#556DFF]"
                        : "#838389"
                    } font-[500] text-[14px]`}
                  >
                    User Guide
                  </Link>
                </li>

                {/* Add more links here if needed */}
              </ul>
            )}
          </div>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
