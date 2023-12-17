import { useEffect, useState } from 'react';
import { storageConstants } from '../constants';
import { storage } from '../utils/local-storage';
import { fetchAllProjectResources, storeData } from './utils';

interface UseNoboxDataProps {
    fresh?: boolean;
    freshReloadTime?: Date;
    backgroundOpts?: {
        runInBackground: boolean;
        timeIntervalInSeconds: number;
    }
}

const useNoboxData = ({ fresh = false, freshReloadTime, backgroundOpts }: UseNoboxDataProps = {}) => {
    const [data, setData] = useState([]);
    const [sharedData, setSharedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const store = storage(storageConstants.NOBOX_DATA);
    const sharedStore = storage(storageConstants.NOBOX_SHARED_DATA);
    const tokenStore = storage(storageConstants.NOBOX_SHARED_PROJECT_TOKENS);

    const callAndSetAllProjectResources = async ({ freshCall = false }: { freshCall?: boolean } = {}) => {
        const data = await fetchAllProjectResources();

        storeData({
            setData,
            store,
            data: data.getProjects,
            fresh: freshCall
        });

        storeData({
            setData: setSharedData,
            store: sharedStore,
            data: data.getSharedProjects,
            fresh: freshCall
        });

        storeData({
            store: tokenStore,
            data: data.getSharedProjectTokens,
            fresh: freshCall
        })

        setLoading(false);
    };


    useEffect(() => {
        callAndSetAllProjectResources({ freshCall: fresh });

        if (backgroundOpts?.runInBackground) {
            const MINUTE_MS = backgroundOpts.timeIntervalInSeconds * 1000;

            const interval = setInterval(() => {
                callAndSetAllProjectResources({ freshCall: true });
            }, MINUTE_MS);
            return () => clearInterval(interval);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [freshReloadTime])

    return {
        data,
        sharedData,
        allProjects: [
            ...data,
            ...sharedData
        ],
        loading
    };
};




export default useNoboxData;
