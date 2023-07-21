"use client";
import Sidebar from "@/app/components/Sidebar";
import { FiMenu } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { storageConstants } from "@/lib/constants";
import { LINKS } from "@/lib/links";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const router = useRouter();

  const toggleSidebar = () => {
    const sidebar = document.getElementById("sidebar");
    sidebar?.classList.add("open");
  };

  if (
    pathname === "/signup" ||
    pathname === "/signup-with-email" ||
    pathname === "/login" ||
    pathname === LINKS.internalPages.login.github) {
    return <>{children}</>
  }

  const handleLogout = () => {
    localStorage.removeItem(storageConstants.NOBOX_CLIENT_TOKEN);
    router.push(LINKS.internalPages.login.github);
  }

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
          <Sidebar />
        </div>
        <div className="md:w-[calc(100%-350px)] md:ml-[350px] ">
          <div className="flex justify-between items-center px-[24px] h-[56px] border-b border-b-[#E6E8F9]">
            <div>
              <h3 className="text-[#24242E] text-[24px] tracking-[-0.02em] font-[900]">
                {pathname === "/dashboard" && <span>Overview</span>}
                {pathname === "/dashboard/docs/user-guide" && (
                  <span>Documentation</span>
                )}
              </h3>
            </div>
            <div className=" flex items-center ">
              <button onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
          <div className="bg-[#ECEDF3]  min-h-screen w-full">{children}</div>
        </div>
      </div>
    </section>
  );
}
