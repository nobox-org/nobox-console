import { useEffect } from 'react';
import { backgroundUpdate } from '../background-update-record-map';
import { getProjectRecordMap } from '../calls/get-record-map';

export interface UseRecordsBackgroundUpdateProps {
    allProjects: any[];
    projectId: string;
}

export const useRecordsBackgroundUpdate = ({
    allProjects,
    projectId
}: UseRecordsBackgroundUpdateProps) => {
    useEffect(() => {
        const TIME_INTERVAL_IN_SECONDS = 5;
        const minute_ms = TIME_INTERVAL_IN_SECONDS * 1000;

        if (allProjects.length > 0) {
            const interval = setInterval(() => {
                backgroundUpdate({
                    recordMapCall: () => getProjectRecordMap({
                        allProjects,
                        projectId,
                    }),
                    projectId
                });
            }, minute_ms);
            return () => clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProjects]);
};