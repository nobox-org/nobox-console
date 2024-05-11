import { useEffect, useState } from 'react';
import useNoboxData from './useNoboxData';
import getRecords from '../calls/get-records';

interface FetchRecordsArgs {
    projectId: string;
    recordSpaceSlug: string;
    initiateFreshCall?: boolean;
    uniqueId?: string;
}

const useRecordsCall = ({
    projectId,
    recordSpaceSlug,
    initiateFreshCall,
    uniqueId
}: FetchRecordsArgs) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [recordSpaceStructure, setRecordSpaceStructure] = useState({});

    const { loading: noboxDataIsLoading, allProjects } = useNoboxData({});

    useEffect(() => {
        if (!noboxDataIsLoading || initiateFreshCall) {
            console.log({ d: initiateFreshCall })
            getRecords({
                allProjects,
                projectId,
                recordSpaceSlug,
                freshCall: initiateFreshCall
            }).then((data) => {
                const { records, recordSpaceStructure: computedRecordSpaceStructure } = data

                console.log({ records })

                if (records) {
                    setData(records);
                    setRecordSpaceStructure(computedRecordSpaceStructure);
                    setLoading(false);
                }
            })
        }
    }, [initiateFreshCall, noboxDataIsLoading, uniqueId])

    return {
        data, loading, recordSpaceStructure
    };
};

export default useRecordsCall;