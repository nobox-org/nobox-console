import _ from 'lodash';
import { Space, SpaceWebhooks } from 'nobox-client';
import { CompatibleStructureFieldType, FindProjectArgs, PagePathNames, PageTypes } from './types';
import { storageConstants } from './constants';
import { storage } from './utils/local-storage';

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

export const findProject = ({ projects, projectId }: FindProjectArgs) => {
    const project = (projects as any[])?.find(project => project._id === projectId);
    return project;
}

export const findProjectSlug = ({ projectId }: { projectId: string }) => {
    const projectStore = storage(storageConstants.NOBOX_DATA);
    const sharedProjectStore = storage(storageConstants.NOBOX_SHARED_DATA);
    const allProjects = [...(projectStore.getObject() || []) as any[], ...(sharedProjectStore.getObject() || []) as any[]];
    const project = allProjects?.find(project => project._id === projectId);
    return project?.slug;
}

export const findRecordSpace = ({ project, recordSpaceSlug }: any) => {
    const recordSpace = project?.recordSpaces?.find(
        (recordSpace: any) => recordSpace.slug === recordSpaceSlug
    );
    return recordSpace;
};

export const createRecordSpaceStructure = (args: {
    fieldDetails: any[];
    recordSpace: {
        id: string;
        name: string;
        description: string;
        slug: string;
        webhooks: SpaceWebhooks;
    },
    projectSlug: string;
}) => {
    const { fieldDetails, recordSpace } = args;

    const recordSpaceStructure: Space<any> = {
        space: recordSpace.slug,
        description: recordSpace.description,
        structure: {},
        webhooks: recordSpace.webhooks
    };

    for (const field of fieldDetails) {
        const { name, description, type, unique, required, comment, hashed, defaultValue } = field;
        const unitStructure = _.omitBy(
            {
                required,
                unique,
                description,
                comment,
                hashed,
                type: convertStringTypeToConstructor(type),
                name,
                defaultValue
            },
            _.isNil
        );

        if (name) {
            (recordSpaceStructure.structure as any)[name] = unitStructure;
        }
    }

    return recordSpaceStructure;
}

export const getProjectIdFromPathName = (pathname: string) => {
    const pathArr = pathname.split("/");

    const [, secondPathName, thirdPathName, fourthPathName] = pathArr;

    if (secondPathName === PagePathNames.recordSpacePathName && Boolean(thirdPathName)) {
        return {
            projectId: thirdPathName,
            pageType: PageTypes.recordSpacesList
        };
    }

    if (secondPathName === PagePathNames.recordsPathName && Boolean(thirdPathName) && Boolean(fourthPathName)) {
        return {
            projectId: thirdPathName,
            recordSpaceSlug: fourthPathName,
            pageType: PageTypes.recordsList
        };
    }

    return {};
}

export function isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

export const moveKeysToEnd = <T>(array: T[], keysToMove: T[]): T[] => {
    let removedKeys: T[] = [];

    keysToMove.forEach(key => {
        const index = array.indexOf(key);
        if (index !== -1) {
            removedKeys.push(array.splice(index, 1)[0]);
        }
    });

    array.push(...removedKeys);
    return array;
};

export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}