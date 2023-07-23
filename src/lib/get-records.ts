import { Config, getRowedSchemaCreator } from "nobox-client";
import { getKeyGroupSchemaCreator } from 'nobox-client/lib/create-schema/create-key-group-schema';
import { storageConstants } from './constants';
import { storage } from './localStorage';
import { findProject, findRecordSpace, convertFieldDetailsToRecordSpaceStructure } from './gen';
import { getProjectToken } from './get-project-token';
import { LINKS } from './links';

interface GetRecordsArgs {
    projectId: string;
    recordSpaceSlug: string;
    allProjects: string[]
}

const getRecords = async ({
    allProjects,
    projectId,
    recordSpaceSlug,
}: GetRecordsArgs) => {
    const project = findProject({
        projects: allProjects,
        projectId
    });

    const projectSlug = project.slug;

    const recordSpace = findRecordSpace({
        project,
        recordSpaceSlug
    });

    const recordSpaceType = recordSpace.type;

    const recordSpaceStructure = convertFieldDetailsToRecordSpaceStructure({
        fieldDetails: recordSpace.hydratedRecordFields,
        recordSpace,
        projectSlug: project.slug
    });


    const token = getProjectToken(project._id)

    if (token) {
        const config: Config = {
            endpoint: LINKS.noboxAPIRootUrl,
            project: projectSlug,
            token,
        };

        if (recordSpaceType === "key-value") {

            const createSchema = getKeyGroupSchemaCreator(config);

            const model = createSchema(recordSpaceStructure);

            const records = await model.getKeys();

            return {
                records: [records],
                recordSpaceStructure
            };
        }



        const createSchema = getRowedSchemaCreator(config);

        const model = createSchema(recordSpaceStructure);

        const records = await model.find();

        return {
            records: records,
            recordSpaceStructure
        };
    }

    throw "Token Not set"
};

export default getRecords;