import { Config, getSchemaCreator } from "nobox-client";
import { storageConstants } from './constants';
import { findProject, findRecordSpace, convertFieldDetailsToRecordSpaceStructure } from './gen';
import { LINKS } from './links';

interface FetchRecordsArgs {
    projects: any[];
    projectSlug: string;
    recordSpaceSlug: string;
}

const fetchRecords = async ({
    projects,
    projectSlug,
    recordSpaceSlug,
}: FetchRecordsArgs) => {

    const project = findProject({
        projects,
        projectSlug
    });

    const recordSpace = findRecordSpace({
        project,
        recordSpaceSlug
    });

    const recordSpaceStructure = convertFieldDetailsToRecordSpaceStructure({
        fieldDetails: recordSpace.hydratedRecordFields,
        recordSpace,
        projectSlug
    });

    const token = localStorage.getItem(storageConstants.NOBOX_CLIENT_TOKEN);

    if (token) {
        const config: Config = {
            endpoint: LINKS.noboxAPIRootUrl,
            project: projectSlug,
            token,
        };

        const createSchema = getSchemaCreator(config);

        const model = createSchema(recordSpaceStructure);

        const records = await model.find();

        return { records, recordSpaceStructure };
    }

    console.log("fetchRecords:: No token found");

    throw new Error("An unexpected error occurred");



    return null;
};