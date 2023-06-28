"use client";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/custom-toast.css'
import { OnboardingInfo } from "../components/OnboardingInfo";
import useTokenHandler from "@/lib/hooks/useTokenHandler";
import useInfoSkip from "@/lib/hooks/useInfoSkip";
import useNoboxData from "@/lib/hooks/useNoboxData";
import Box from "../components/Box";

export default function Dashboard() {
  const { token } = useTokenHandler();
  const { isSkipped, skip } = useInfoSkip();
  const { loading, data: projects } = useNoboxData();

  const handleButtonClick = () => {
    if (token) {
      copyToClipboard(token);
    }
  };

  if (loading) {
    return (
      <main className="text-[#292D32] bg-[#ECEDF3] h-full p-[24px]">
        Loading
      </main>
    );
  }

  return (
    <main className="text-[#292D32] bg-[#ECEDF3] h-full p-[24px]">
      <ToastContainer toastClassName="custom-toast" />
      {!isSkipped && <OnboardingInfo handleSkip={skip} token={token} />}
      <div className={`${!isSkipped && "mt-[32px]"}`}>
        <h6 className="text-[20px] font-[700] text-[#292D32]">
          Your forever token
        </h6>
        <div className="flex gap-4 py-2">
          <div className="bg-white w-[358px] px-[16px] py-[9.5px] text-[#838389]">
            <p className="whitespace-nowrap text-[14px] text-ellipsis overflow-hidden">
              {token}
            </p>
          </div>
          <button
            onClick={handleButtonClick}
            className="bg-secondary text-white px-[24px] py-[12px] text-[14px] font-[500]"
          >
            Copy token
          </button>
        </div>
        <h6 className="text-[20px] font-[700] text-[#292D32] mt-[24px]">
          Projects
        </h6>
        <div className="flex flex-wrap gap-[24px] mt-[8px] mb-[136px]">
          {
            projects?.length > 0 && projects.map(project => {
              const { name, id, slug } = project;

              const handleProjectClick = () => {
                window.location.href = `/record-spaces/${slug}`;

              }
              return (<Box id={id} key={id} handleClick={handleProjectClick} title={name} />)
            })
          }
        </div>
      </div>
    </main>
  );
}
