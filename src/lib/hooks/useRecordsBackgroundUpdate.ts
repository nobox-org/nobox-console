import { useEffect } from 'react';
import { getProjectRecordMap, saveRecordMapInLocalStorage } from '../calls/get-record-map';
import { storage } from '../utils/local-storage';
import { storageConstants } from '../constants';
import { fetchAndStoreRecords } from '../utils';

export interface UseRecordsBackgroundUpdateProps {
    allProjects: any[];
    projectId: string;
}

export const useRecordsBackgroundUpdate = ({
    allProjects,
    projectId,
}: UseRecordsBackgroundUpdateProps) => {
    useEffect(() => {
        const TIME_INTERVAL_IN_SECONDS = 5;
        const minute_ms = TIME_INTERVAL_IN_SECONDS * 1000;

        if (allProjects.length > 0) {
            const interval = setInterval(() => {
                fetchAndStoreRecords({
                    allProjects,
                    projectId
                });
            }, minute_ms);
            return () => clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProjects]);
};