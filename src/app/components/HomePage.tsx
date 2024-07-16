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
            
            <div className={`${!isSkipped && "space-up"}`}>
                <OverviewSection title="Projects" data={projects} addNewButton />
                <OverviewSection title="Shared Projects" dataIsEmpty={sharedProjects?.length <= 0} data={sharedProjects} />
            </div>
        </>
    );
}
