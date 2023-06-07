"use client";
import { AiOutlinePlus } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import "./style.scss";
import CreateProject from "@/app/components/modals/createProject";
import { useState } from "react";
import ProjectableBody from "@/app/components/tables/ProjectableBody";
import ProjectTableHead from "@/app/components/tables/ProjectTableHead";
import Pagination from "@/app/components/Pagination";
import { usePathname } from "next/navigation";

const Projects = () => {
  const pathname = usePathname();
  const projects: any[] = [];
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  return (
    <div className=" bg-[#FAFAFA]">
      <div className="pt-[24px] px-[24px] pb-[32px] flex justify-between items-center">
        <div className="flex h-[48px] w-[358px] pl-[17.25px] items-center space-x-2 bg-[#FFFFFF] rounded-[2px] border-[#E6E8F9] border-[1.2px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
          >
            <path
              fill="#838389"
              d="M11 20.75c-5.38 0-9.75-4.37-9.75-9.75S5.62 1.25 11 1.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75Zm0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25ZM20.16 22.79c-.08 0-.16-.01-.23-.02-.47-.06-1.32-.38-1.8-1.81-.25-.75-.16-1.5.25-2.07.41-.57 1.1-.89 1.89-.89 1.02 0 1.82.39 2.18 1.08.36.69.26 1.57-.31 2.42-.71 1.07-1.48 1.29-1.98 1.29Zm-.6-2.3c.17.52.41.78.57.8.16.02.46-.17.77-.62.29-.43.31-.74.24-.88s-.35-.29-.87-.29c-.31 0-.54.1-.67.27-.12.17-.14.43-.04.72Z"
            />
          </svg>
          <input
            type="search"
            name=""
            className="bg-[#FFFFFF] border-none focus:ring-0"
            placeholder="Search for something"
            id=""
          />
        </div>
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="bg-secondary text-white flex justify-center items-center py-2 gap-2 px-2 md:px-4"
        >
          <AiOutlinePlus /> Create Project
        </button>
      </div>

      <div className="px-[24px]">
        <table className="w-full">
          <thead className="h-[40px] border bg-[#FFFFFF]">
            <ProjectTableHead />
          </thead>
          <tbody className="">
            <ProjectableBody />
            <ProjectableBody />
            <ProjectableBody />
            <ProjectableBody />
            <ProjectableBody />
            <ProjectableBody />
            <ProjectableBody />
            <ProjectableBody />
          </tbody>
        </table>
      </div>

      <div className="pt-[24px]">
        <Pagination />
      </div>

      {/* <div className="flex flex-col h-[70vh] justify-center items-center">
        <div className="mx-auto mb-5">
          <img src="/empty-project.svg" alt="no projects" />
        </div>
        <h6 className="text-[#24242E]">No projects yet.</h6>
        <p className="text-[#838389] font-thin">
          Create your first project below
        </p>
        <button className="bg-secondary text-white flex justify-center items-center py-2 mt-2 gap-2 px-4">
          <AiOutlinePlus /> Create Project
        </button>
      </div> */}
      <div className="">
        <CreateProject open={open} close={close} />
      </div>
    </div>
  );
};

export default Projects;
