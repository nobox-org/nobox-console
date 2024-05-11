import getNoboxModel from "./get-nobox-model";

interface DeleteRecordsArgs {
    projectId: string;
    recordSpaceSlug: string;
    allProjects: string[];
    recordId: string;
}

const deleteRecords = async ({
    allProjects,
    projectId,
    recordSpaceSlug,
    recordId
}: DeleteRecordsArgs) => {
    const { keyGroupModel, rowedModel, recordSpaceStructure } = await getNoboxModel({
        allProjects,
        projectId,
        recordSpaceSlug,
    });

    if (rowedModel) {
        await rowedModel?.deleteOneById(recordId);
    }

}

export default deleteRecords;
