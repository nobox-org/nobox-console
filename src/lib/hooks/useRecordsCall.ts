import { useContext, useEffect, useState } from 'react';
import getRecords from '../calls/get-records';
import DataContext from '@/app/components/dataContext/DataContext';

interface FetchRecordsArgs {
    projectId: string;
    recordSpaceSlug: string;
    initiateFreshCall?: boolean;
    uniqueId?: string;
    setRecords: (data: any[]) => void;
}

const useRecordsCall = ({
    projectId,
    recordSpaceSlug,
    initiateFreshCall,
    uniqueId,
    setRecords
}: FetchRecordsArgs) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [recordSpaceStructure, setRecordSpaceStructure] = useState({});

    const { loading: noboxDataIsLoading, allProjects } = useContext(DataContext);

    const getAndSetRecords = async () => {
        const { records, recordSpaceStructure: computedRecordSpaceStructure } = await getRecords({
            allProjects,
            projectId,
            recordSpaceSlug,
            freshCall: initiateFreshCall
        });

        if (records) {
            setData(records);
            setRecords(records);
            setRecordSpaceStructure(computedRecordSpaceStructure);
            setLoading(false);
        }
    }

    window.addEventListener('RecordUpdate', async () => {
        console.log("Change to local storage!");
        getAndSetRecords();
    })

    useEffect(() => {
        if (!noboxDataIsLoading || initiateFreshCall) {
            getAndSetRecords();
        }
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [initiateFreshCall, noboxDataIsLoading, uniqueId]
    )

    return {
        data, loading, recordSpaceStructure
    };
};

export default useRecordsCall;