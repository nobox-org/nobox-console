"use client";
import React, { useEffect, useRef } from "react";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/custom-toast.css'
import { OnboardingInfo } from "../components/OnboardingInfo";
import useTokenHandler from "@/lib/hooks/useTokenHandler";
import useInfoSkip from "@/lib/hooks/useInfoSkip";
import useNoboxData from "@/lib/hooks/useNoboxData";
import { storageConstants } from "@/lib/constants";
import OverviewSection from "../components/OverviewSection";
import ProjectCard from "../components/ProjectCards";

export default function Dashboard() {
  const { token } = useTokenHandler();
  const { isSkipped, skip } = useInfoSkip();
  const { dataLoadingStatus, data: projects, sharedData: sharedProjects, sharedDataLoadingStatus } = useNoboxData();

  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      localStorage.removeItem(storageConstants.NOBOX_DATA);
      localStorage.removeItem(storageConstants.NOBOX_RECORDS);
      isFirstLoad.current = false;
    }
  }, []);

  const handleButtonClick = () => {
    if (token) {
      copyToClipboard(token);
    }
  };

  if (dataLoadingStatus || sharedDataLoadingStatus) {
    return (
      <main className="text-[#292D32] bg-[#ECEDF3] h-full p-[24px]">
        Loading
      </main>
    );
  }

  return (
    <main className="text-[#292D32] h-full p-[24px]">
      <ToastContainer toastClassName="custom-toast" />
      {!isSkipped && <OnboardingInfo handleSkip={skip} token={token} />}
      <div className={`${!isSkipped && "mt-[32px]"}`}>
        <h6 className="text-[20px] font-[700] text-[#292D32]">
          Token
        </h6>
        <div className="flex gap-4 py-2">
          <div className="w-[358px] px-[16px] bg-[#FFF] rounded-lg py-[9.5px] text-[#838389] border-red">
            <p className="whitespace-nowrap text-[14px] text-ellipsis overflow-hidden">
              {token}
            </p>
          </div>
          <button
            onClick={handleButtonClick}
            className="bg-secondary text-white px-[24px] rounded-lg py-[12px] text-[14px] font-[500] bg-blue-500 active:bg-blue-300 hover:bg-blue-700 py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Copy token
          </button>
        </div>
        <OverviewSection title="Projects" dataIsEmpty={projects?.length <= 0} Section={
          projects?.length > 0
          &&
          projects.map((project, i) => <ProjectCard project={project} key={i} />)
        } />
        <OverviewSection title="Shared Projects" dataIsEmpty={sharedProjects?.length <= 0} Section={
          sharedProjects?.length > 0
          &&
          sharedProjects.map((project, i) => <ProjectCard project={project} key={i} />)
        } />
      </div>
    </main>
  );
}
