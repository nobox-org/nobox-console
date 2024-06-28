import { storageConstants } from "@/lib/constants";
import { LINKS } from "@/lib/links";
import { useQuery } from "@tanstack/react-query"
import axios from "axios";


export const useGetBulkData = (projectId: string, recordSpaceSlug: string) => {
    const url = `${LINKS.noboxAPIRootUrl}/gateway/*/bulk-project-resources?tag=newHook`;
    const { data, isLoading } = useQuery({
        queryFn: async () => await axios.get(url, {
            headers: {
                Authorization: `Beare ${localStorage.getItem(storageConstants.NOBOX_TOKEN)}`,
            }
        }).then(async (res) => {
            const data = res.data.getProjects;
            const project = data?.filter((x: any) => x.id === projectId)[0] ?? null;
            const recordSpace = project?.recordSpaces.filter((x: any) => x.slug === recordSpaceSlug)[0] ?? null;
            let thisView: any;
            if (recordSpace && recordSpace?.views.length) {
                thisView = recordSpace.views[0];
            } else {
                recordSpace['headings'] = getHeadings(recordSpace.hydratedRecordFields);
            }

            return { ...res.data, project, recordSpace, thisView }
        }),
        queryKey: ['views'],
        staleTime: 12000000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
    return {
        data: data,
        isLoading,
    };
}

export const getProjectData = (data: any[], projectId: string, recordSpaceSlug: string) => {
    const project = data?.filter((x: any) => x.id === projectId)[0] ?? null;
    const recordSpace = project?.recordSpaces.filter((x: any) => x.slug === recordSpaceSlug)[0] ?? null;

    return {
        project,
        recordSpace,
    }
}

const getHeadings = (structure: any) => {
    return structure.map((field: any) => {
        const structureType = field.type;
        const type =
            structureType === "TEXT"
                ? "text"
                : structureType === "BOOLEAN"
                    ? "checkbox"
                    : structureType === "ARRAY"
                        ? "array"
                        : structureType === "OBJECT"
                            ? "object"
                            : structureType === "EDITOR"
                                ? "editor"
                                : structureType === "NUMBER"
                                    ? "number"
                                    : "number";
        return {
            name: field.name,
            type,
            required: field.required,
            label: field.name,
        };
    });
};


