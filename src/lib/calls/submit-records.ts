import getNoboxModel from "./get-nobox-model";

interface SubmitRecordsArgs {
    projectId: string;
    recordSpaceSlug: string;
    allProjects: string[];
    record: Record<string, string>;
}

const submitRecords = async ({
    allProjects,
    projectId,
    recordSpaceSlug,
    record
}: SubmitRecordsArgs) => {
    const { keyGroupModel, rowedModel, recordSpaceStructure } = await getNoboxModel({
        allProjects,
        projectId,
        recordSpaceSlug,
    });

    const records = keyGroupModel
        ? await keyGroupModel.setKeys(record)
        : await rowedModel?.insertOne(record);

    return {
        records: Array.isArray(records) ? records : [records],
        recordSpaceStructure
    };
}

export default submitRecords;
