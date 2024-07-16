"use client";
import React from "react";
import Box from "../components/Box";

interface ProjectCardProps {
    project: any;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { name, id, slug, description } = project;

    return <Box
        link={`/record-spaces/${id}`}
        id={id}
        key={id}
        title={name}
        tooltip={description}
        bottomTitle={`[slug: ${slug}]`} 
    />
}
