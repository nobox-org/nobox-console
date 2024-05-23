import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  const closeSidebar = () => {
    document.querySelector<HTMLElement>("#sidebar")?.classList.remove("open");
  };

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
                width={20}
                height={20}
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
              </svg>
              <p className="pl-5">Overview</p>
            </Link>
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
        <ul className="mb-5">
          <li className="flex items-center">
            <Link href={"/settings"}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.78721 6.128C1.38721 6.312 0.377616 6.9152 0.249616 6.9968C0.172678 7.04454 0.109311 7.11126 0.0655999 7.19055C0.0218892 7.26985 -0.000695413 7.35905 1.63158e-05 7.4496V8.5504C-0.000544094 8.6423 0.0227493 8.73278 0.0676204 8.81298C0.112491 8.89319 0.177405 8.96038 0.256016 9.00799C0.425615 9.11519 1.40961 9.70239 1.79361 9.87679L2.28961 11.0768C2.12961 11.4992 1.84321 12.632 1.80961 12.7792C1.78944 12.8673 1.79208 12.9591 1.81727 13.0459C1.84247 13.1327 1.8894 13.2116 1.95361 13.2752L2.73121 14.0528C2.79498 14.1168 2.87392 14.1635 2.96066 14.1887C3.0474 14.2139 3.1391 14.2167 3.22721 14.1968L3.2474 14.1916C3.48786 14.1301 4.54489 13.8595 4.92961 13.7168L6.12961 14.2128C6.31361 14.6128 6.91681 15.6224 6.99841 15.7504C7.04671 15.8268 7.11356 15.8898 7.19272 15.9334C7.27189 15.977 7.36081 15.9999 7.45121 16H8.55041C8.64231 16.0006 8.73279 15.9773 8.81299 15.9324C8.8932 15.8875 8.96039 15.8226 9.00801 15.744C9.11521 15.5744 9.70241 14.5904 9.87681 14.2064L11.0768 13.7104C11.4992 13.8704 12.632 14.1568 12.7792 14.1904C12.8673 14.2106 12.9591 14.2079 13.0459 14.1827C13.1327 14.1575 13.2116 14.1106 13.2752 14.0464L14.0528 13.2688C14.1168 13.205 14.1635 13.1261 14.1887 13.0393C14.2139 12.9526 14.2167 12.8609 14.1968 12.7728L14.1916 12.7525C14.13 12.512 13.8595 11.4551 13.7168 11.0704L14.2128 9.87039C14.6128 9.68639 15.6224 9.08319 15.7504 9.00159C15.8268 8.95329 15.8898 8.88645 15.9334 8.80728C15.977 8.72811 16 8.63919 16 8.5488V7.4496C15.9999 7.35866 15.9765 7.26927 15.9319 7.18998C15.8874 7.1107 15.8232 7.04418 15.7456 6.9968C15.576 6.8896 14.592 6.3024 14.208 6.128L13.712 4.928C13.872 4.5056 14.1584 3.3728 14.192 3.2256C14.2122 3.1375 14.2095 3.04571 14.1843 2.95892C14.1591 2.87213 14.1122 2.7932 14.048 2.7296L13.2704 1.9472C13.2066 1.88324 13.1277 1.83648 13.041 1.8113C12.9542 1.78612 12.8625 1.78333 12.7744 1.8032L12.7542 1.80837C12.5137 1.86992 11.4567 2.14048 11.072 2.2832L9.87201 1.7872C9.68801 1.3872 9.08481 0.3776 9.00321 0.2496C8.9549 0.173188 8.88806 0.110234 8.80889 0.0665935C8.72972 0.0229535 8.64081 4.52862e-05 8.55041 0H7.44961C7.35867 9.96616e-05 7.26928 0.0235439 7.19 0.0680877C7.11072 0.112631 7.0442 0.176783 6.99681 0.2544C6.88961 0.424 6.30241 1.408 6.12801 1.792L4.92801 2.288C4.50561 2.128 3.37281 1.8416 3.22561 1.808C3.13752 1.78782 3.04573 1.79046 2.95893 1.81566C2.87214 1.84086 2.79321 1.88778 2.72961 1.952L1.94721 2.7296C1.88325 2.79337 1.8365 2.87231 1.81132 2.95905C1.78613 3.04579 1.78335 3.13749 1.80321 3.2256C1.80472 3.23149 1.80645 3.23824 1.80839 3.2458C1.86994 3.48627 2.1405 4.54328 2.28321 4.928L1.78721 6.128ZM8 11.3333C9.84095 11.3333 11.3333 9.84095 11.3333 8C11.3333 6.15905 9.84095 4.66667 8 4.66667C6.15905 4.66667 4.66667 6.15905 4.66667 8C4.66667 9.84095 6.15905 11.3333 8 11.3333Z"
                  fill="#8E8EA9"
                />
              </svg>
              settings
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
