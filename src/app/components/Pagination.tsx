import React from 'react'
import { GrLinkNext } from "react-icons/gr";
import { BiArrowBack } from "react-icons/bi";

const Pagination = () => {
  return (
    <div className="flex w-full justify-between px-[24px] mb-[21px]">
      <div></div>
      <div className="flex w-[493px] h-[40px] border  border-[#E6E8F9] bg-[#FFFFFF]">
        <div className="flex gap-[8px] w-[115px] items-center justify-center">
          <BiArrowBack />{" "}
          <span className="text-[14px] font-[500]"> Previous</span>
        </div>
        <div className="w-[40px] flex items-center justify-center text-[14px] font-[500] bg-[#ECECF2] ">
          1
        </div>
        <div className="w-[40px] flex items-center justify-center text-[14px] font-[500] bg-[#FFFFFF]">
          2
        </div>
        <div className="w-[40px] flex items-center justify-center text-[14px] font-[500] bg-[#FFFFFF]">
          3
        </div>
        <div className="w-[40px] flex items-center justify-center text-[14px] font-[500] bg-[#FFFFFF]">
          ...
        </div>
        <div className="w-[40px] flex items-center justify-center text-[14px] font-[500] bg-[#FFFFFF]">
          8
        </div>
        <div className="w-[40px] flex items-center justify-center text-[14px] font-[500] bg-[#FFFFFF]">
          9
        </div>
        <div className="w-[40px] flex items-center justify-center text-[14px] font-[500] bg-[#FFFFFF]">
          10
        </div>
        <div className="flex gap-[8px] w-[92px] items-center justify-center">
          <span className="text-[14px] font-[500]">Next</span> <GrLinkNext />
        </div>
      </div>
    </div>
  );
}

export default Pagination
