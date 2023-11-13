"use client";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import '../styles/custom-toast.css'
import Box from "@/app/components/Box";

export const RecordSpaceCard = ({ recordSpace, projectId, records }: { recordSpace: any, projectId: string, records: any[] }) => {
    const { name, id, slug: recordSpaceSlug, description, createdAt } = recordSpace;

    const link = `/records/${projectId}/${recordSpaceSlug}`;
    return (
        <Box
            id={id}
            key={id}
            link={link}
            title={name}
            subTitle={description}
            bottomTitle={!records ? "loading..." : `${records.length} records`}
        />
    )
}
