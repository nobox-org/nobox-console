"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCards";
import AddNewButton from "./AddNewButton";
import Modal from "./Modal";
import CreateProject from "./CreateProject";
import { CreateProjectInput, createProject } from "@/lib/hooks/utils";

interface OverviewSectionProps<T = unknown> {
    title: string;
    section?: any;
    loading?: boolean;
    dataIsEmpty?: boolean;
    addNewButton?: boolean;
    data?: T[]
}

export default function OverviewSection({ title, section, loading, dataIsEmpty, data, addNewButton }: OverviewSectionProps) {

    const [openModal, setOpenModal] = useState<boolean>(false);

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
                    {section ?? (data ?? []).map((project, i) => <ProjectCard project={project} key={i} />)}
                    {addNewButton && (<AddNewButton onClickHandler={() => {
                        setOpenModal(true)
                    }} tooltip="Add New Project" />)}
                </div>
                <Modal
                    isOpen={openModal}
                    setIsOpen={setOpenModal}
                    content={
                        <div style={{ width: "600px", padding: "10px", margin: "30px", overflowY: "scroll", height: "700px" }} >
                            <CreateProject inputKeys={["description", "name", "slug"]} handleSubmit={
                                async (data: CreateProjectInput) => {
                                    const project = await createProject(data);
                                    return project;
                                }} />
                        </div>
                    }
                    buttonText={'Copy Text'}
                />
            </>
        );
    }

    return <></>
}
