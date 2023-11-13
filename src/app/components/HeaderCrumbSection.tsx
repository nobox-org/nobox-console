"use client";
import { usePathname } from "next/navigation";
import { Breadcrumb } from "../components/BreadCrumb";
import { findProjectSlug, getProjectIdFromPathName } from "@/lib/gen";
import { PageTypes } from "@/lib/types";

export default function HeaderCrumbSection() {
    const pathName = usePathname();

    const { projectId, pageType, recordSpaceSlug } = getProjectIdFromPathName(pathName);

    if (pageType === PageTypes.recordSpacesList) {
        const projectSlug = findProjectSlug({ projectId });
        return <Breadcrumb path={[
            "Projects",
            projectSlug,
            "Record Spaces"
        ]} />
    }

    if (pageType === PageTypes.recordsList) {
        const projectSlug = findProjectSlug({ projectId });
        return <Breadcrumb path={[
            "Projects",
            { name: projectSlug, link: `/record-spaces/${projectId}` },
            recordSpaceSlug as any,
            "Records"
        ]} />;
    }

    return <></>
}
