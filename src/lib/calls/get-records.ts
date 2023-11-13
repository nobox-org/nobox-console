import { storageConstants } from "../constants";
import getNoboxModel from "./get-nobox-model";
import { storage } from "../localStorage";

interface GetRecordsArgs {
    projectId: string;
    recordSpaceSlug: string;
    allProjects: string[];
    freshCall?: boolean;
}

const getRecords = async ({
    allProjects,
    projectId,
    recordSpaceSlug,
    freshCall = false
}: GetRecordsArgs) => {
    const { keyGroupModel, rowedModel, recordSpaceStructure } = await getNoboxModel({
        allProjects,
        projectId,
        recordSpaceSlug,
    });

    const store = storage(storageConstants.PROJECT_RECORD_MAP);

    const recordsMapFromStore = store.getObject<Record<any, any>>() || {};

    const recordsFromStore = recordsMapFromStore?.[projectId]?.[recordSpaceSlug];

    const badRecordStoreData = !(recordsFromStore?.[0]);

    const records = freshCall || !recordsFromStore || badRecordStoreData ?
        (keyGroupModel ? await keyGroupModel?.getKeys() : await rowedModel?.find())
        : recordsFromStore;

    return {
        records: Array.isArray(records) ? records : [records],
        recordSpaceStructure
    };

};

export default getRecords;