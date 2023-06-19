import _ from 'lodash';
import { Space } from 'nobox-client';

interface FindProjectArgs {
    projects: any[];
    projectSlug: string;
}

export type CompatibleStructureFieldType = "TEXT" | "NUMBER" | "BOOLEAN" | "ARRAY";

const convertStringTypeToConstructor = (type: CompatibleStructureFieldType) => {
    switch (type) {
        case "TEXT":
            return String;
        case "NUMBER":
            return Number;
        case "BOOLEAN":
            return Boolean;
        case "ARRAY":
            return Array;
        default:
            return String;
    }
}


export const findProject = ({ projects, projectSlug }: FindProjectArgs) => {
    const project = (projects as any[])?.find(project => project.slug === projectSlug);
    return project;
}


export const findRecordSpace = ({ project, recordSpaceSlug }: any) => {
    const recordSpace = project?.recordSpaces?.find((recordSpace: any) => recordSpace.slug === recordSpaceSlug);
    return recordSpace;
};

export const convertFieldDetailsToRecordSpaceStructure = (args: {
    fieldDetails: any[];
    recordSpace: {
        id: string;
        name: string;
        description: string;
        slug: string;
    },
    projectSlug: string;

}) => {
    const { fieldDetails, recordSpace, projectSlug } = args;

    const recordSpaceStructure: Space<any> = {
        space: recordSpace.slug,
        description: recordSpace.description,
        structure: {}
    };

    for (const field of fieldDetails) {
        const { name, description, type, unique, required, comment, hashed, defaultValue } = field;
        const unitStructure = _.omitBy({
            required,
            unique,
            description,
            comment,
            hashed,
            type: convertStringTypeToConstructor(type),
            name,
            defaultValue
        }, _.isNil);

        if (name) {
            (recordSpaceStructure.structure as any)[name] = unitStructure;
        }

    }

    console.log({ recordSpaceStructure })

    return recordSpaceStructure;
}