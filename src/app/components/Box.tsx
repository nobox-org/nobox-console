"use client";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import NodeBoxIcon from "./icons/NodeBoxIcon";

interface BoxProps {
  handleClick?: () => void;
  id: string;
  title: string;
  subTitle?: string;
  bottomTitle?: string;
  link?: string;
  tooltip?: string;
}

export default function Box({
  handleClick,
  id,
  title,
  subTitle,
  bottomTitle,
  link,
  tooltip
}: BoxProps) {
  return (
    <a href={link || ""}>
      <div
        title={tooltip}
        key={id}
        className="w-full relative md:w-[224px] bg-white rounded-[2px] cursor-pointer hover:ring hover:ring-blue-500 hover:ring-opacity-50 hover:ring-offset-4 hover:rounded-lg py-4 px-4"
        onClick={handleClick}
      >
        <div className="flex justify-between flex-col h-40" >
          <NodeBoxIcon />
          <div className="flex flex-col gap-[8px] my-[8px]" style={{ textAlign: "center" }}>
            <h6 className="text-[#292D32] text-[18px] font-[600]">{title}</h6>
            <h6 className="text-[#292D32] text-[12px] font-[300]">
              {subTitle}
            </h6>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px]"> {bottomTitle}</span>
            <FaArrowRight />
          </div>
        </div>
      </div>
    </a>
  );
}
