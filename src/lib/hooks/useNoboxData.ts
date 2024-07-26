import { useEffect, useState } from 'react';
import { storageConstants } from '../constants';
import { storage } from '../utils/local-storage';
import { fetchAllProjectResources, storeData } from './utils';

interface UseNoboxDataProps {
    source?: string;
    fresh?: boolean;
    freshReloadTime?: Date;
    backgroundOpts?: {
        runInBackground: boolean;
        timeIntervalInSeconds: number;
    }
}

const useNoboxData = ({ freshReloadTime, backgroundOpts, source }: UseNoboxDataProps = {}) => {
    const [data, setData] = useState([]);
    const [sharedData, setSharedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const store = storage(storageConstants.NOBOX_DATA);
    const sharedStore = storage(storageConstants.NOBOX_SHARED_DATA);
    const tokenStore = storage(storageConstants.NOBOX_SHARED_PROJECT_TOKENS);

    const callAndSetAllProjectResources = async () => {
        const data = await fetchAllProjectResources();

        storeData({
            setData,
            store,
            data: data.getProjects,
            fresh: freshReloadTime ? true : false
        });

        storeData({
            setData: setSharedData,
            store: sharedStore,
            data: data.getSharedProjects,
            fresh: freshReloadTime ? true : false

        });
        storeData({
            store: tokenStore,
            data: data.getSharedProjectTokens,
            fresh: freshReloadTime ? true : false
        });
    };

    useEffect(() => {
        const dataFromLocalStorage = store.getObject();

        if (dataFromLocalStorage) {
            setData(dataFromLocalStorage as any);
        };

        const sharedDataFromLocalStorage = sharedStore.getObject();
        if (sharedDataFromLocalStorage) {
            setSharedData(sharedDataFromLocalStorage as any);
        };

        if (!dataFromLocalStorage && !sharedDataFromLocalStorage) {
            callAndSetAllProjectResources();
        }

        setLoading(false);
    }, [])


    useEffect(() => {
        if (freshReloadTime) {
            callAndSetAllProjectResources();
            setLoading(false);
        }

        if (backgroundOpts?.runInBackground) {
            const MINUTE_MS = backgroundOpts.timeIntervalInSeconds * 1000;

            const interval = setInterval(() => {
                callAndSetAllProjectResources();
            }, MINUTE_MS);

            return () => clearInterval(interval);
        }
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
