import React from "react";
import { RxDotFilled } from "react-icons/rx";

interface DocsTextNoFlex {
  title: string;
  text: string;
}

const DocsTextNoFlex: React.FC<DocsTextNoFlex> = ({ title, text }) => {
  return (
    <div className="flex mt-[16px]">
      <div>
        <RxDotFilled size={18} />{" "}
      </div>
      <p className="text-[#24242E] text-[14px] tracking-[-0.01em]">
        <span className="bg-[#F6F6F9] border px-1 h-[18px] border-[#B0B2C9] rounded-[2px]">
          {title}
        </span>{" "}
        {text}{" "}
      </p>
    </div>
  );
};

export default DocsTextNoFlex;
