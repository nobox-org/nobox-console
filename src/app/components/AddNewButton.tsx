"use client";
import React from "react";
import Box from "./Box";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import NodeBoxIcon from "./icons/NodeBoxIcon";

interface AddNewButtonProps {
    onClickHandler: () => void;
    tooltip: string
}

export default function AddNewButton({ onClickHandler, tooltip }: AddNewButtonProps) {
    return (
        <Link href={""}>
            <div
                title={tooltip}
                className="w-full relative md:w-[224px] bg-[#fff] rounded-[2px] cursor-pointer hover:ring hover:ring-blue-500 hover:ring-opacity-50 hover:ring-offset-4 hover:rounded-lg py-4 px-4"
                onClick={onClickHandler}
            >
                <div className="flex justify-center items-center h-40" >
                    <div className="flex flex-col gap-[8px] my-[8px]">
                        <h6 className="text-[#292D32] text-[36px] font-[200]">+</h6>
                    </div>
                </div>
            </div>
        </Link>
    );
}
