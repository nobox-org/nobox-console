import Link from "next/link";
// import { FaBars } from "react-icons/fa";
import { VscFileCode } from "react-icons/vsc";
import { BsFolder2Open } from "react-icons/bs";
import { TbLayoutDashboard } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <aside className="aside flex flex-col justify-between gap-4 px-4 py-8 h-screen md:border-r border-neutral-border">
        <ul className="flex flex-col gap-y-8  text-[#496080] font-light">
          <div className="w-full flex justify-between items-center">
            <div className="md:pl-3">
              <img src="/logo.svg" className="w-full" alt="" />
            </div>
            {/* <div className="">
              <FaBars />
            </div> */}
          </div>
          <Link
            className="flex gap-2 items-center hover:bg-[#ECF3FF] hover:text-"
            href="/overview"
          >
            <TbLayoutDashboard className="text-2xl" /> Overview{" "}
          </Link>
          <Link className="flex gap-2 items-center" href="/projectss">
            <BsFolder2Open className="text-2xl" /> Projects
          </Link>
          <Link className="flex gap-2 items-center" href="/docs">
            <VscFileCode className="text-2xl" /> Docs{" "}
          </Link>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
