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
        <Link
            href={""}
            title={tooltip}
            // className="w-full flex justify-center items-center display-box bg-[#fff] rounded-[2px] cursor-pointer hover:ring hover:ring-blue-500 hover:ring-opacity-50 hover:ring-offset-4 hover:rounded-lg py-4 px-4"
            className="w-full relative flex justify-center items-center display-box bg-white shadow-md border rounded-lg cursor-pointer hover:ring hover:ring-blue-500 hover:ring-opacity-50 hover:ring-offset-4 hover:rounded-lg py-4 px-4"
            onClick={onClickHandler}

        >
            <span className="text-[#292D32] text-[36px] font-[200]">+</span>
        </Link>
    );
}
