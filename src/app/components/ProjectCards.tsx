"use client";
import React from "react";
import Box from "../components/Box";

interface ProjectCardProps {
    project: any;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { name, id, slug } = project;

    const handleProjectClick = () => {
        window.location.href = `/record-spaces/${id}`;
    }

    return <Box id={id} key={id} handleClick={handleProjectClick} title={name} />
}
