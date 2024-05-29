"use client";
import React from "react";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { ToastContainer } from "react-toastify";
import useTokenHandler from "@/lib/hooks/useTokenHandler";
import useInfoSkip from "@/lib/hooks/useInfoSkip";

export default function HomePage() {
  const { token } = useTokenHandler();
  const { isSkipped } = useInfoSkip();


  const handleButtonClick = () => {
    if (token) {
      copyToClipboard(token);
    }
  };

  return (
    <>
      <ToastContainer toastClassName="custom-toast" />
      <div className={`${!isSkipped && "mt-[32px]"} bg-white p-5 mt-10 rounded-md`}>
        <h6 className="font-[500] text-[#292D32]">Token</h6>
        <div className="flex gap-4 py-2">
          <div className="w-[358px] px-[16px] bg-[#FFF] rounded-lg py-[9.5px] text-[#838389] border border-gray-200 ">
            <p className="whitespace-nowrap text-[14px] text-ellipsis overflow-hidden">
              {token}
            </p>
          </div>
          <button
            onClick={handleButtonClick}
            className=" text-white text-[14px] font-[500] bg-blue-500 active:bg-blue-300 hover:bg-blue-700 py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Copy token
          </button>
        </div>
      </div>
    </>
  );
}
