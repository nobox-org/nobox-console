import Link from "next/link";
import { VscFileCode } from "react-icons/vsc";
import { BsFolder2Open } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";
import { FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const closeSidebar = () => {
    document.querySelector<HTMLElement>("#sidebar")?.classList.remove("open");
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
              <BsFolder2Open className="text-2xl" /> Projects
            </Link>
            <Link
              className={
                pathname == "/dashboard/docs"
                  ? "bg-[#ECF3FF] text-secondary font-medium flex gap-2 px-2 py-4 items-center"
                  : "flex gap-2 px-2 py-4 items-center hover:bg-[#ECF3FF] hover:text-secondary hover:font-medium"
              }
              href="/dashboard/docs"
            >
              <VscFileCode className="text-2xl" /> Docs{" "}
            </Link>
          </div>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
