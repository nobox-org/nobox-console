import { useEffect, useState } from 'react';
import useNoboxData from './useNoboxData';
import getRecords from '../get-records';

interface FetchRecordsArgs {
    projectId: string;
    recordSpaceSlug: string;
}

const useRecordsCall = ({
    projectId,
    recordSpaceSlug,
}: FetchRecordsArgs) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [recordSpaceStructure, setRecordSpaceStructure] = useState({});

    const { sharedDataLoadingStatus, dataLoadingStatus, allProjects } = useNoboxData();

    const noboxDataIsLoading = sharedDataLoadingStatus && dataLoadingStatus;

    useEffect(() => {

        if (!noboxDataIsLoading) {
            getRecords({
                allProjects,
                projectId,
                recordSpaceSlug
            }).then((data) => {
                const { records, recordSpaceStructure: computedRecordSpaceStructure } = data
                if (records) {
                    setData(records);
                    setRecordSpaceStructure(computedRecordSpaceStructure);
                    setLoading(false);
                }
            })

        }
    }, [noboxDataIsLoading])

    return { data, loading, recordSpaceStructure };
};

export default useRecordsCall;