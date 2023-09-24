import {
    Config,
    getRowedSchemaCreator,
    getKeyGroupSchemaCreator,
} from "nobox-client";
import { findProject, findRecordSpace, createRecordSpaceStructure } from './gen';
import { getProjectToken } from './get-project-token';
import { LINKS } from './links';

interface GetNoboxModelArgs {
    projectId: string;
    recordSpaceSlug: string;
    allProjects: string[];
}

const getNoboxModel = async ({
    allProjects,
    projectId,
    recordSpaceSlug,
}: GetNoboxModelArgs) => {
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
    const recordSpaceStructure = createRecordSpaceStructure({
        fieldDetails: recordSpace.hydratedRecordFields,
        recordSpace,
        projectSlug: project.slug
    });


    const token = getProjectToken(project._id);

    if (token) {
        const config: Config = {
            endpoint: LINKS.noboxAPIRootUrl,
            project: projectSlug,
            token,
            autoCreate: false,
        };

        return {
            keyGroupModel: recordSpaceType === "key-value" ? getKeyGroupSchemaCreator(config)(recordSpaceStructure) : undefined,
            rowedModel: recordSpaceType !== "key-value" ? getRowedSchemaCreator(config)(recordSpaceStructure) : undefined,
            recordSpaceType,
            recordSpaceStructure
        }
    }
    throw new Error("getNoboxModel::Token Not set");
};

export default getNoboxModel;
