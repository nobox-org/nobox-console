"use client";
import RecordTableBody from "@/app/components/tables/RecordTableBody";
import RecordTableHead from "@/app/components/tables/RecordTableHead";
import { useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import { BiArrowBack } from "react-icons/bi";
import RecordDataBox from "@/app/components/RecordDataBox";
import Pagination from "@/app/components/Pagination";
import CreateProject from "@/app/components/modals/createProject";

type ViewMode = "table" | "grid" 


const Records = () => {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };

   const [viewMode, setViewMode] = useState<ViewMode>("table");

   useEffect(() => {
     console.log({ viewMode });
   }, [viewMode]);

   const toggleViewMode = (mode: ViewMode) => {
     setViewMode(mode);
  };
  
  const renderData = () => {
    if (viewMode === "table") {
      return (
        <table className="w-full">
          <thead className="h-[40px] border bg-tableHeadBgColor">
            <RecordTableHead />
          </thead>
          <tbody className="">
            <RecordTableBody />
            <RecordTableBody />
            <RecordTableBody />
            <RecordTableBody />
            <RecordTableBody />
            <RecordTableBody />
            <RecordTableBody />
            <RecordTableBody />
            <RecordTableBody />
          </tbody>
        </table>
      );
    }
    if (viewMode === 'grid') return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[24px]">
          <div className="w-[224px] h-[208px] rounded-[2px] border border-solid border-[#E6E8F9] bg-white">
            <div className="h-[56px] flex items-center border-[#E6E8F9]  border-t-[0px] border-l-[0px] border-r-[0px] border-b-[0.5px]">
              <h2 className="w-[192px] h-[24px] pl-[16px] text-[16px] font-[600] text-[#000000]">
                Sign Ups
              </h2>
            </div>
            <div className="h-[152px]  w-[224px] flex items-center">
              <div className="h-[120px]  flex  flex-col justify-center ">
                <RecordDataBox name="Size" value="5.63 kb" />
                <RecordDataBox name="Documents" value="3" />
                <RecordDataBox name="Avg. Size" value="102 B" />
                <RecordDataBox name="Indexes" value="1" />
                <RecordDataBox name="Index Size" value="35.1 kb" />
              </div>
            </div>
          </div>
          <div className="w-[224px] h-[208px] rounded-[2px] border border-solid border-[#E6E8F9] bg-white">
            <div className="h-[56px] flex items-center border-[#E6E8F9]  border-t-[0px] border-l-[0px] border-r-[0px] border-b-[0.5px]">
              <h2 className="w-[192px] h-[24px] pl-[16px] text-[16px] font-[600] text-[#000000]">
                Sign Ups
              </h2>
            </div>
            <div className="h-[152px]  w-[224px] flex items-center">
              <div className="h-[120px]  flex  flex-col justify-center ">
                <RecordDataBox name="Size" value="5.63 kb" />
                <RecordDataBox name="Documents" value="3" />
                <RecordDataBox name="Avg. Size" value="102 B" />
                <RecordDataBox name="Indexes" value="1" />
                <RecordDataBox name="Index Size" value="35.1 kb" />
              </div>
            </div>
          </div>
          <div className="w-[224px] h-[208px] rounded-[2px] border border-solid border-[#E6E8F9] bg-white">
            <div className="h-[56px] flex items-center border-[#E6E8F9]  border-t-[0px] border-l-[0px] border-r-[0px] border-b-[0.5px]">
              <h2 className="w-[192px] h-[24px] pl-[16px] text-[16px] font-[600] text-[#000000]">
                Sign Ups
              </h2>
            </div>
            <div className="h-[152px]  w-[224px] flex items-center">
              <div className="h-[120px]  flex  flex-col justify-center ">
                <RecordDataBox name="Size" value="5.63 kb" />
                <RecordDataBox name="Documents" value="3" />
                <RecordDataBox name="Avg. Size" value="102 B" />
                <RecordDataBox name="Indexes" value="1" />
                <RecordDataBox name="Index Size" value="35.1 kb" />
              </div>
            </div>
          </div>
          <div className="w-[224px] h-[208px] rounded-[2px] border border-solid border-[#E6E8F9] bg-white">
            <div className="h-[56px] flex items-center border-[#E6E8F9]  border-t-[0px] border-l-[0px] border-r-[0px] border-b-[0.5px]">
              <h2 className="w-[192px] h-[24px] pl-[16px] text-[16px] font-[600] text-[#000000]">
                Sign Ups
              </h2>
            </div>
            <div className="h-[152px]  w-[224px] flex items-center">
              <div className="h-[120px]  flex  flex-col justify-center ">
                <RecordDataBox name="Size" value="5.63 kb" />
                <RecordDataBox name="Documents" value="3" />
                <RecordDataBox name="Avg. Size" value="102 B" />
                <RecordDataBox name="Indexes" value="1" />
                <RecordDataBox name="Index Size" value="35.1 kb" />
              </div>
            </div>
          </div>
          <div className="w-[224px] h-[208px] rounded-[2px] border border-solid border-[#E6E8F9] bg-white">
            <div className="h-[56px] flex items-center border-[#E6E8F9]  border-t-[0px] border-l-[0px] border-r-[0px] border-b-[0.5px]">
              <h2 className="w-[192px] h-[24px] pl-[16px] text-[16px] font-[600] text-[#000000]">
                Sign Ups
              </h2>
            </div>
            <div className="h-[152px]  w-[224px] flex items-center">
              <div className="h-[120px]  flex  flex-col justify-center ">
                <RecordDataBox name="Size" value="5.63 kb" />
                <RecordDataBox name="Documents" value="3" />
                <RecordDataBox name="Avg. Size" value="102 B" />
                <RecordDataBox name="Indexes" value="1" />
                <RecordDataBox name="Index Size" value="35.1 kb" />
              </div>
            </div>
          </div>
          <div className="w-[224px] h-[208px] rounded-[2px] border border-solid border-[#E6E8F9] bg-white">
            <div className="h-[56px] flex items-center border-[#E6E8F9]  border-t-[0px] border-l-[0px] border-r-[0px] border-b-[0.5px]">
              <h2 className="w-[192px] h-[24px] pl-[16px] text-[16px] font-[600] text-[#000000]">
                Sign Ups
              </h2>
            </div>
            <div className="h-[152px]  w-[224px] flex items-center">
              <div className="h-[120px]  flex  flex-col justify-center ">
                <RecordDataBox name="Size" value="5.63 kb" />
                <RecordDataBox name="Documents" value="3" />
                <RecordDataBox name="Avg. Size" value="102 B" />
                <RecordDataBox name="Indexes" value="1" />
                <RecordDataBox name="Index Size" value="35.1 kb" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="">
      <div className="h-[107px] flex justify-between px-[24px] items-center ">
        <div className="">
          <p className="text-[#98A2B3] text-[14px]">
            Projects/{" "}
            <span className="text-[14px] text-[#667085] font-[500]">NoBox</span>{" "}
          </p>
          <h1 className="text-[25px] font-[600] text-[#292D32] leading-[40px]">
            NoBox
          </h1>
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
      <div className="px-[24px] py-[16px] flex justify-between items-center border-[#E6E8F9] border-t-[1px] border-b-[1px] border-r-[0px] border-l-[0px]">
        <div className="flex h-[48px] max-w-[358px] pl-[17.25px] items-center space-x-2 bg-[#FAFAFA] rounded-[2px] border-[#E6E8F9] border-[1.2px]">
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
            className="bg-[#FAFAFA] border-none"
            placeholder="Search for records"
            id=""
          />
        </div>
        <div className="flex space-x-6 items-center">
          <div className="flex space-x-5">
            <div className="flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
              >
                <path
                  stroke="#667085"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit={10}
                  d="M3.6 1.4h8.8c.733 0 1.333.6 1.333 1.333V4.2c0 .533-.333 1.2-.666 1.533L10.2 8.267c-.4.333-.667 1-.667 1.533v2.867c0 .4-.266.933-.6 1.133L8 14.4c-.867.533-2.067-.067-2.067-1.133V9.733c0-.466-.266-1.066-.533-1.4L2.867 5.667c-.334-.334-.6-.934-.6-1.334V2.8c0-.8.6-1.4 1.333-1.4ZM7.287 1.4 4 6.667"
                />
              </svg>
              <p className="text-[14px] text-[#667085] font-[500]">Filter</p>
            </div>
            <div className="flex space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
              >
                <path
                  stroke="#667085"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.667}
                  d="M5 10h10M2.5 5h15m-10 10h5"
                />
              </svg>
              <p className="text-[14px] text-[#667085] font-[500]">Sort</p>
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            <div
              className="cursor-pointer"
              onClick={() => toggleViewMode("grid")}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
              >
                <path
                  stroke="#98A2B3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.667 5.68V2.653c0-.94-.427-1.32-1.487-1.32h-2.693c-1.06 0-1.487.38-1.487 1.32v3.02c0 .947.427 1.32 1.487 1.32h2.693c1.06.007 1.487-.373 1.487-1.313ZM14.667 13.18v-2.693C14.667 9.427 14.24 9 13.18 9h-2.693C9.427 9 9 9.427 9 10.487v2.693c0 1.06.427 1.487 1.487 1.487h2.693c1.06 0 1.487-.427 1.487-1.487ZM7 5.68V2.653c0-.94-.427-1.32-1.487-1.32H2.82c-1.06 0-1.487.38-1.487 1.32v3.02c0 .947.427 1.32 1.487 1.32h2.693C6.573 7 7 6.62 7 5.68ZM7 13.18v-2.693C7 9.427 6.573 9 5.513 9H2.82c-1.06 0-1.487.427-1.487 1.487v2.693c0 1.06.427 1.487 1.487 1.487h2.693C6.573 14.667 7 14.24 7 13.18Z"
                />
              </svg>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => toggleViewMode("table")}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
              >
                <path
                  stroke="#556DFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.667}
                  d="M6.667 5H17.5M6.667 10H17.5M6.667 15H17.5M2.5 5h.008M2.5 10h.008M2.5 15h.008"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="p-[24px] bg-[#FAFAFA]">{renderData()}</div>
      <Pagination />
      <div className="">
        <CreateProject open={open} close={close} />
      </div>
    </div>
  );
};

export default Records;
