"use client";
import React, { useContext } from "react";
import { copyToClipboard } from "@/lib/copyToClipboard";
import { OnboardingInfo } from "../components/OnboardingInfo";
import useTokenHandler from "@/lib/hooks/useTokenHandler";
import useInfoSkip from "@/lib/hooks/useInfoSkip";
import OverviewSection from "../components/OverviewSection";
import DataContext from "./dataContext/DataContext";

export default function HomePage() {
    const { token } = useTokenHandler();
    const { isSkipped, skip } = useInfoSkip();

    const {
        loading: noboxDataLoading,
        sharedProjects,
        projects
    } = useContext(DataContext);

    if (noboxDataLoading) {
        return (
            <div className="text-[#292D32] bg-[#ECEDF3] h-full p-[24px]">
                Loading
            </div>
        );
    }

    return (
        <>
            {!isSkipped && <OnboardingInfo handleSkip={skip} token={token} />}
            
            <div className={`${!isSkipped && "space-up"}`}>
                <OverviewSection title="Projects" data={projects} addNewButton />
                <OverviewSection title="Shared Projects" dataIsEmpty={sharedProjects?.length <= 0} data={sharedProjects} />
            </div>
        </>
    );
}
