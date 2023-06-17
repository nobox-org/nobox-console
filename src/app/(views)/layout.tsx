"use client";
import Sidebar from "@/app/components/Sidebar";
import { FiMenu } from "react-icons/fi";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar?.classList.add("open");
  };

  console.log({ pathname })

  if (pathname === "/signup" || pathname === "/signup-with-email" || pathname === "/login" || pathname === "/login/github") {
    return <>{children}</>
  }

  return (
    <section>
      <div className="md:flex justify-center">
        <div className="md:hidden fixed top-0 left-0 w-full bg-white flex pb-2 pt-6 justify-between px-4 items-center border-b border-[#E6E8F9] text-[#1C1B1B]">
          <div className="md:px-2 flex gap-2 ">
            <img src="/logo.svg" className="w-full" alt="" />
            <p className="text-xl font-medium">Nobox</p>
          </div>
          <div className=" text-xl" onClick={toggleSidebar}>
            <FiMenu />
          </div>
        </div>
        <div className="md:w-[200px] w-full fixed top-0 left-0 bg-white">
          <Sidebar />
        </div>
        <div className="md:w-[calc(100%-200px)] md:ml-[200px] ">
          <div className="flex justify-between items-center px-[24px] h-[56px] border-b border-b-[#E6E8F9]">
            <div>
              <h3 className="text-[#24242E] text-[24px] tracking-[-0.02em] font-[900]">
                {pathname === "/dashboard" && <span>Overview</span>}
                {pathname === "/dashboard/projects" && <span>Projects</span>}
                {pathname === "/dashboard/records" && <span>Records</span>}
                {pathname === "/dashboard/docs/user-guide" && (
                  <span>Documentation</span>
                )}
              </h3>
            </div>
            <div className=" flex items-center ">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                >
                  <path
                    fill="#6B7280"
                    d="M6.43 2.413a.75.75 0 1 0-1.13-.986l-1.293 1.48a4.75 4.75 0 0 0-1.17 3.024L2.78 8.65a.75.75 0 1 0 1.5.031l.057-2.718a3.25 3.25 0 0 1 .8-2.069l1.292-1.48Z"
                  />
                  <path
                    fill="#6B7280"
                    fillRule="evenodd"
                    d="M6.237 7.7a4.214 4.214 0 0 1 4.206-3.95h.558V3a1 1 0 1 1 2 0v.75h.557a4.214 4.214 0 0 1 4.205 3.95l.221 3.534a7.377 7.377 0 0 0 1.308 3.754 1.617 1.617 0 0 1-1.134 2.529l-3.408.408V19a2.75 2.75 0 1 1-5.5 0v-1.075l-3.407-.409a1.617 1.617 0 0 1-1.134-2.528 7.377 7.377 0 0 0 1.307-3.754l.221-3.533Zm4.206-2.45a2.714 2.714 0 0 0-2.708 2.544l-.221 3.534a8.877 8.877 0 0 1-1.574 4.516.117.117 0 0 0 .082.183l3.738.449c1.488.178 2.993.178 4.481 0l3.738-.449a.117.117 0 0 0 .082-.183 8.876 8.876 0 0 1-1.574-4.516l-.22-3.534a2.714 2.714 0 0 0-2.71-2.544h-3.114Zm1.558 15c-.69 0-1.25-.56-1.25-1.25v-.75h2.5V19c0 .69-.56 1.25-1.25 1.25Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="#6B7280"
                    d="M17.644 1.355a.75.75 0 0 0-.072 1.058l1.291 1.48a3.25 3.25 0 0 1 .801 2.07l.057 2.717a.75.75 0 0 0 1.5-.031l-.057-2.718a4.75 4.75 0 0 0-1.17-3.024l-1.292-1.48a.75.75 0 0 0-1.058-.072Z"
                  />
                </svg>
              </button>
              <div className="flex w-[167px] gap-[12px] items-center justify-end">
                <p className="text-[13px] font-[450] tracking-[-0.02em] text-[#262626]">
                  Akintunde
                </p>
                <div className="rounded-full h-[40px] w-[40px] bg-[#D7D7D7] flex items-center justify-center">
                  <p className="text-[#000000] text-md">AK</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF]  min-h-screen w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
