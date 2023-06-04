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
          <div className="w-full hidden md:flex mb-4 pb-2 pt-6 justify-between px-4 items-center border-b border-[#E6E8F9] text-[#1C1B1B]">
            <div className="md:px-2 flex gap-2 ">
              <img src="/logo.svg" className="w-full" alt="" />
              <p className="text-xl font-medium">Nobox</p>
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
              <TbLayoutDashboard className="text-2xl" /> Overview{" "}
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
                  d="M16.31 20.15c-.04-.22-.06-.43-.06-.65 0-.09 0-.17.01-.25H7.74c.01.08.01.16.01.25a3.09 3.09 0 0 1-.25 1.25h9c-.09-.19-.15-.39-.19-.6ZM3.86 7.69a3.09 3.09 0 0 1-.61-.19v9c.19-.09.39-.15.6-.19a3.573 3.573 0 0 1 .9-.05V7.74c-.08.01-.16.01-.25.01-.22 0-.43-.02-.64-.06Zm16.29 0c-.22.04-.43.06-.65.06-.09 0-.17 0-.25-.01v8.52c.08-.01.16-.01.25-.01a3.09 3.09 0 0 1 1.25.25v-9c-.19.09-.39.15-.6.19ZM16.5 3.25h-9c.09.19.15.39.19.6.04.22.06.43.06.65 0 .09 0 .17-.01.25h8.52c-.01-.08-.01-.16-.01-.25a3.09 3.09 0 0 1 .25-1.25Z"
                  opacity={0.4}
                />
                <path
                  fill={
                    pathname == "/dashboard/projects" ? "#556DFF" : "#838389"
                  }
                  d="M7.75 4.5c0 .09 0 .17-.01.25-.02.26-.07.5-.15.74-.02.09-.06.19-.1.28-.02.05-.05.11-.08.17-.03.06-.06.12-.1.18-.28.5-.69.91-1.19 1.19-.06.04-.12.07-.18.1s-.12.06-.17.08c-.09.04-.19.08-.28.1-.24.08-.48.13-.74.15-.08.01-.16.01-.25.01a3.09 3.09 0 0 1-1.25-.25c-1.19-.5-2-1.68-2-3 0-1.79 1.46-3.25 3.25-3.25 1.33 0 2.5.81 3 2 .09.19.15.39.19.6.04.22.06.43.06.65ZM22.75 4.5c0 1.33-.81 2.5-2 3-.19.09-.39.15-.6.19-.22.04-.43.06-.65.06-.09 0-.17 0-.25-.01-.27-.02-.52-.07-.77-.16-.08-.02-.17-.05-.25-.09-.06-.02-.11-.05-.17-.08-.06-.03-.12-.06-.18-.1-.5-.28-.91-.69-1.19-1.19-.04-.06-.07-.12-.1-.18s-.06-.11-.08-.17c-.04-.08-.07-.17-.09-.25-.09-.25-.14-.5-.16-.77-.01-.08-.01-.16-.01-.25a3.09 3.09 0 0 1 .25-1.25c.5-1.19 1.68-2 3-2 1.79 0 3.25 1.46 3.25 3.25ZM7.75 19.5a3.09 3.09 0 0 1-.25 1.25c-.5 1.19-1.68 2-3 2-1.79 0-3.25-1.46-3.25-3.25 0-1.33.81-2.5 2-3 .19-.09.39-.15.6-.19a3.573 3.573 0 0 1 .9-.05c.25.02.49.07.72.14.08.02.17.05.25.09.07.03.14.06.22.1.06.03.12.06.18.1.5.28.91.69 1.19 1.19.04.06.07.12.1.18.04.08.07.15.1.22.04.08.07.17.09.25.07.23.12.47.14.72.01.08.01.16.01.25ZM22.75 19.5c0 1.79-1.46 3.25-3.25 3.25-1.33 0-2.5-.81-3-2-.09-.19-.15-.39-.19-.6-.04-.22-.06-.43-.06-.65 0-.09 0-.17.01-.25 0-.03 0-.06.01-.09.01-.11.03-.21.05-.32.05-.27.14-.53.27-.78.03-.06.06-.12.1-.18.28-.5.69-.91 1.19-1.19.06-.04.12-.07.18-.1.25-.13.51-.22.78-.27.11-.02.21-.04.32-.05.03-.01.06-.01.09-.01.08-.01.16-.01.25-.01a3.09 3.09 0 0 1 1.25.25c1.19.5 2 1.68 2 3Z"
                />
              </svg>{" "}
              Projects
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
