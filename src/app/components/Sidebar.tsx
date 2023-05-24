import Link from "next/link";
// import { FaBars } from "react-icons/fa";
import { VscFileCode } from "react-icons/vsc";
import { BsFolder2Open } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <aside className="flex flex-col justify-between gap-4 pt-6 h-screen">
        <ul className=" text-[#496080] font-light">
          <div className="w-full flex mb-4 pb-2 justify-between px-4 items-center border-b border-[#E6E8F9]">
            <div className="md:pl-3 flex gap-2 ">
              <img src="/logo.svg" className="w-full" alt="" />
              <p className="text-[#1C1B1B] text-xl font-medium">Nobox</p>
            </div>
            {/* <div className="">
              <FaBars />
            </div> */}
          </div>
          <div className="px-2 flex flex-col gap-y-2">
            <Link
              className="flex gap-2 px-2 py-4 items-center hover:bg-[#ECF3FF] hover:text-secondary hover:font-medium"
              href="/overview"
            >
              <TbLayoutDashboard className="text-2xl" /> Overview{" "}
            </Link>
            <Link
              className="flex gap-2 px-2 py-4 items-center hover:bg-[#ECF3FF] hover:text-secondary hover:font-medium"
              href="/projectss"
            >
              <BsFolder2Open className="text-2xl" /> Projects
            </Link>
            <Link
              className="flex gap-2 px-2 py-4 items-center hover:bg-[#ECF3FF] hover:text-secondary hover:font-medium"
              href="/docs"
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
