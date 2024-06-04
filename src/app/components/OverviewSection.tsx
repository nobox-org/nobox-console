"use client";
import React, { useContext, useState } from "react";
import ProjectCard from "./ProjectCards";
import AddNewButton from "./AddNewButton";
import Modal from "./Modal";
import CreateProject from "./CreateProject";
import { CreateProjectInput, createProject } from "@/lib/hooks/utils";
import DataContext from "./dataContext/DataContext";
import createUIIndication from "@/lib/createUIIndication";

interface OverviewSectionProps<T = unknown> {
    title: string;
    section?: any;
    loading?: boolean;
    dataIsEmpty?: boolean;
    addNewButton?: boolean;
    data?: T[]
}

export default function OverviewSection({ title, section, loading, dataIsEmpty, data, addNewButton }: OverviewSectionProps) {
    const { initiateReload } = useContext(DataContext);

    const [openModal, setOpenModal] = useState<boolean>(false);
    const openModalIndicator = createUIIndication(setOpenModal);

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
                <h6 className="text-[16px] font-[700] text-[#292D32]">
                    {title} 
                </h6>
                <div className="flex flex-wrap gap-[24px] mt-[20px] mb-[48px]">
                    {section ?? (data ?? []).map((project, i) => <ProjectCard project={project} key={i} />)}
                    {addNewButton && (<AddNewButton onClickHandler={() => {
                        setOpenModal(true)
                    }} tooltip="Add New Project" />)}
                </div>
                <Modal
                    isOpen={openModal}
                    setIsOpen={setOpenModal}
                    buttonText={'Copy Text'}
                >
                    <div style={{ width: "600px", padding: "10px", margin: "30px", overflow: "auto", height: "700px", scrollbarColor: "transparent transparent" }} >
                        <div style={{ scrollbarColor: "transparent #ddd" }}>
                            <CreateProject inputKeys={["description", "name", "slug"]} handleSubmit={
                                async (data: CreateProjectInput) => {
                                    const project = await createProject(data);
                                    initiateReload();
                                    openModalIndicator.delayed({ value: false });
                                    return project;
                                }} />
                        </div>
                    </div>
                </Modal>
            </>
        );
    }

    return <></>
}
