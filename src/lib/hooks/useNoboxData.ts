import { useEffect, useState } from 'react';
import { storageConstants } from '../constants';
import { storage } from '../localStorage';
import { serverCall } from '@/servercall/init';
import { serverCalls } from '@/servercall/store';
import { fetchAllProjectResources, storeData } from './utils';

interface UseNoboxDataProps {
    fresh?: boolean;
    backgroundOpts?: {
        runInBackground: boolean;
        timeIntervalInSeconds: number;
    }
}

const useNoboxData = ({ fresh = false, backgroundOpts }: UseNoboxDataProps = {}) => {
    const [data, setData] = useState([]);
    const [sharedData, setSharedData] = useState([]);
    const [dataLoadingStatus, setDataLoadingStatus] = useState(true);
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

        setDataLoadingStatus(false);
    };


    useEffect(() => {
        callAndSetAllProjectResources({ freshCall: fresh });

        if (backgroundOpts?.runInBackground) {
            const MINUTE_MS = backgroundOpts.timeIntervalInSeconds * 1000;

            const interval = setInterval(() => {
                callAndSetAllProjectResources({ freshCall: true });
                console.log("get new data")
            }, MINUTE_MS);
            return () => clearInterval(interval);
        }
    }, [])

    return {
        data,
        sharedData,
        dataLoadingStatus,
        allProjects: [
            ...data,
            ...sharedData
        ],
        loading: dataLoadingStatus
    };
};




export default useNoboxData;
