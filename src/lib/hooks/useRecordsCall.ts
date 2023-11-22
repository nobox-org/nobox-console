import { useEffect, useState } from 'react';
import useNoboxData from './useNoboxData';
import getRecords from '../calls/get-records';

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

    const { loading: noboxDataIsLoading, allProjects } = useNoboxData({});

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initiateFreshCall, noboxDataIsLoading])

    return {
        data, loading, recordSpaceStructure
    };
};

export default useRecordsCall;