"use client";
import Sidebar from "@/app/components/Sidebar";
import { FiMenu } from "react-icons/fi";
import { MdOutlineNotificationsActive } from "react-icons/md";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar?.classList.add("open");
  };
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
        <div className="md:w-[calc(100%-200px)] md:ml-[200px]">
          <div className="border-b pt-3 pb-2 pr-8 border-[#E6E8F9] mt-16 md:mt-0 flex justify-end gap-8 w-full">
            <button>
              <MdOutlineNotificationsActive className="text-2xl" />
            </button>
            <div className="flex gap-2 items-center">
              <p>Akintunde</p>
              <div className="rounded-full h-10 w-10 bg-[#D7D7D7] flex items-center justify-center">
                <p className="text-[#000000] text-md">TD</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F6F6F9] p-4 min-h-screen w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
