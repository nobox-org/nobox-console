import { useEffect, useState } from 'react';
import { storageConstants } from '../constants';
import { Config, getSchemaCreator } from "nobox-client";
import { LINKS } from '../links';
import useNoboxData from './useNoboxData';
import { convertFieldDetailsToRecordSpaceStructure, findProject, findRecordSpace } from '../gen';
import { set } from 'lodash';

interface FetchRecordsArgs {
    projectSlug: string;
    recordSpaceSlug: string;
}

const useRecordsCall = ({
    projectSlug,
    recordSpaceSlug,
}: FetchRecordsArgs) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [recordSpaceStructure, setRecordSpaceStructure] = useState({});

    const { loading: noboxDataIsLoading, data: projects } = useNoboxData();

    useEffect(() => {

        if (!noboxDataIsLoading) {

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

                model.find().then((records: any) => {
                    setData(records);
                    setRecordSpaceStructure(recordSpaceStructure);
                    setLoading(false);
                })
                return;
            }

        }
    }, [noboxDataIsLoading])

    return { data, loading, recordSpaceStructure };
};

export default useRecordsCall;