import { findProject } from "@/lib/gen";
import getRecords from "@/lib/get-records";
import { storage } from "@/lib/localStorage";
import { storageConstants } from "@/lib/constants";

interface UseRecordMapArgs {
    projectId: string;
    allProjects: any;
}

export const getRecordMap = async ({ projectId, allProjects }: UseRecordMapArgs) => {
    const store = storage(storageConstants.PROJECT_RECORD_MAP);
    const foundProject = findProject({
        projects: allProjects,
        projectId
    });

    const callGetProjectRecordMap = async () => getProjectRecordMap({
        allProjects,
        projectId,
    });

    if (foundProject) {

        const { projectRecordMap } = getStoreRecordMap({
            store,
            projectId
        });

        if (projectRecordMap) {
            return {
                projectRecordMap,
                project: foundProject
            }
        };

        if (!projectRecordMap) {
            callGetProjectRecordMap().then((recordMap: any) => {
                saveRecordMapInLocalStorage({
                    recordMap,
                    projectId,
                    store
                });

                return {
                    projectRecordMap: recordMap,
                    project: foundProject
                }
            });
        }
    }

    return {
        project: foundProject,
    }
}

export const getStoreRecordMap = (args: {
    store: ReturnType<typeof storage>;
    projectId: string;
}) => {
    const { store, projectId } = args;
    const recordMapFromStore = store.getObject<Record<any, any>>() || {};
    return {
        globalRecordMap: recordMapFromStore,
        projectRecordMap: recordMapFromStore?.[projectId]
    }
}

export const getProjectRecordMap = async (args: {
    allProjects: any[];
    projectId: string;
}) => {
    const { projectId, allProjects } = args;

    const project = findProject({
        projects: allProjects,
        projectId
    });

    const { recordSpaces } = project;

    const temporaryRecordMap: Record<string, any> = {}

    await Promise.all(
        recordSpaces.map(async (recordSpace: any) => {
            const { slug: recordSpaceSlug, _id } = recordSpace;
            const { records
            } = await getRecords({
                recordSpaceSlug,
                allProjects,
                projectId,
                freshCall: true
            });
            temporaryRecordMap[recordSpaceSlug] = records
        })
    );

    return temporaryRecordMap;
}

export const saveRecordMapInLocalStorage = (args: {
    recordMap: any;
    projectId: string;
    store: ReturnType<typeof storage>;
}) => {
    const { recordMap, projectId, store } = args;
    const recordMapFromStore = store.getObject<Record<any, any>>() || {};

    if (Object.keys(recordMap).length > 0) {
        store.setObject({
            ...recordMapFromStore,
            [projectId]: recordMap
        });
    }
}


