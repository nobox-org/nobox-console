
export const getRecordSpace = (args: {
    project: any;
    recordSpaceSlug: string;
    projectId: string;
}) => {
    const { recordSpaceSlug, project, projectId } = args;
    const selectedProject = project.filter((x: any) => x._id === projectId)[0];
    const recordSpace = selectedProject?.recordSpaces.filter((x: any) => x.slug === recordSpaceSlug)[0];
    return { recordSpace, views: recordSpace?.views };
}

export const convertType = (structureType: string) => {
    return structureType === "TEXT"
        ? "text"
        : structureType === "BOOLEAN"
            ? "checkbox"
            : structureType === "ARRAY"
                ? "array"
                : structureType === "OBJECT"
                    ? "object"
                    : structureType === "NUMBER"
                        ? "number"
                        : "number";
}

export const getHeadings = (structure: any) => {
    return structure.map((field: any) => {
        const structureType = field.type;
        const type = convertType(structureType);
        return {
            name: field.name,
            type,
            required: field.required,
            label: field.name,
        };
    });
};
