"use client";
import React, { useContext } from "react";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { ToastContainer } from "react-toastify";
import { OnboardingInfo } from "../components/OnboardingInfo";
import useTokenHandler from "@/lib/hooks/useTokenHandler";
import useInfoSkip from "@/lib/hooks/useInfoSkip";
import OverviewSection from "../components/OverviewSection";
import DataContext from "./dataContext/DataContext";

export default function HomePage() {
    const { token } = useTokenHandler();
    const { isSkipped, skip } = useInfoSkip();

    const { projects, sharedProjects, loading } = useContext(DataContext);


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
        <>
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
                        className=" text-white text-[14px] font-[500] bg-blue-500 active:bg-blue-300 hover:bg-blue-700 py-2 px-4 rounded transition duration-300 ease-in-out"
                    >
                        Copy token
                    </button>
                </div>
                <OverviewSection title="Projects" data={projects} addNewButton />
                <OverviewSection title="Shared Projects" dataIsEmpty={sharedProjects?.length <= 0} data={sharedProjects} />
            </div>
        </>
    );
}
