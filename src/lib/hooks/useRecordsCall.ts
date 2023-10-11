import { useEffect, useState } from 'react';
import useNoboxData from './useNoboxData';
import getRecords from '../get-records';

interface FetchRecordsArgs {
    projectId: string;
    recordSpaceSlug: string;
    initiateFreshCall?: boolean;
}

const useRecordsCall = ({
    projectId,
    recordSpaceSlug,
    initiateFreshCall
}: FetchRecordsArgs) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [recordSpaceStructure, setRecordSpaceStructure] = useState({});

    const { dataLoadingStatus: noboxDataIsLoading, allProjects } = useNoboxData({});


    useEffect(() => {
        if (!noboxDataIsLoading || initiateFreshCall) {
            getRecords({
                allProjects,
                projectId,
                recordSpaceSlug,
                freshCall: initiateFreshCall
            }).then((data) => {
                const { records, recordSpaceStructure: computedRecordSpaceStructure } = data

                if (records) {
                    setData(records);
                    setRecordSpaceStructure(computedRecordSpaceStructure);
                    setLoading(false);
                }
            })
        }
    }, [initiateFreshCall, noboxDataIsLoading])

    return {
        data, loading, recordSpaceStructure
    };
};

export default useRecordsCall;