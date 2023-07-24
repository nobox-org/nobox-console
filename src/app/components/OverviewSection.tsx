"use client";
import React, { FC, ReactElement } from "react";

interface OverviewSectionProps {
    title: string;
    Section: any;
    loading?: boolean;
    dataIsEmpty?: boolean;
}

export default function OverviewSection({ title, Section, loading, dataIsEmpty }: OverviewSectionProps) {
    if (loading) {
        return (
            <div className="text-[#292D32] bg-[#ECEDF3] h-full p-[24px]">
                Loading
            </div>
        );
    }

    if (!dataIsEmpty) {
        return (
            <>
                <h6 className="text-[20px] font-[700] text-[#292D32] mt-[16px]">
                    {title}
                </h6>
                <div className="flex flex-wrap gap-[24px] mt-[8px] mb-[48px]">
                    {Section}
                </div>
            </>
        );
    }

    return <></>
}
