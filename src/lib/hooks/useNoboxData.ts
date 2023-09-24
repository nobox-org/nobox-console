import { useEffect, useState } from 'react';
import { storageConstants } from '../constants';
import { storage } from '../localStorage';
import { serverCall } from '@/servercall/init';
import { serverCalls } from '@/servercall/store';

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
    const [sharedDataLoadingStatus, setSharedDataLoadingStatus] = useState(true);

    const store = storage(storageConstants.NOBOX_DATA);
    const sharedStore = storage(storageConstants.NOBOX_SHARED_DATA);
    const tokenStore = storage(storageConstants.NOBOX_SHARED_PROJECT_TOKENS);

    const callAll = ({ freshCall = false }: { freshCall?: boolean } = {}) => Promise.all([
        getAndSaveData({
            setData,
            setLoading: setDataLoadingStatus,
            store,
            dataSourceCall: () => fetchProjects(),
            fresh: freshCall
        }),
        getAndSaveData({
            setData: setSharedData,
            setLoading: setSharedDataLoadingStatus,
            store: sharedStore,
            dataSourceCall: () => fetchProjects({ shared: true }),
            fresh: freshCall
        }),
        getAndSaveData({
            setData: () => { },
            setLoading: () => { },
            store: tokenStore,
            dataSourceCall: () => fetchSharedProjectTokens(),
            fresh: freshCall
        })
    ]);

    useEffect(() => {
        callAll({ freshCall: fresh });

        console.log({ a: "frshCall"})

        if (backgroundOpts?.runInBackground) {
            const MINUTE_MS = backgroundOpts.timeIntervalInSeconds * 1000;

            const interval = setInterval(() => {
                callAll({ freshCall: true })
                console.log("get new data")
            }, MINUTE_MS);
            return () => clearInterval(interval);
        }
    }, [])

    return {
        data,
        sharedData,
        dataLoadingStatus,
        sharedDataLoadingStatus,
        allProjects: [
            ...data,
            ...sharedData
        ],
        loading: dataLoadingStatus && sharedDataLoadingStatus
    };
};


const getAndSaveData = async (opts: {
    setData: any;
    setLoading: any;
    store: ReturnType<typeof storage>;
    dataSourceCall: typeof fetchProjects;
    fresh?: boolean
}) => {
    const { setData, store, setLoading, dataSourceCall, fresh = false } = opts;
    const storeData = store.getObject();
    const callAndStoreData = async () => callAndStore({
        dataSourceCall,
        store
    });

    let fetchedData;

    if ((!fresh && !storeData) || fresh) {
        fetchedData = await callAndStoreData();
    }

    if (!fresh && storeData) {
        fetchedData = storeData;
        callAndStoreData();
    };

    setData(fetchedData);
    setLoading(false);
}

const callAndStore = async (args: {
    dataSourceCall: typeof fetchProjects;
    store: ReturnType<typeof storage>;
}) => {
    const { dataSourceCall, store } = args;
    const data = await dataSourceCall();
    store.setObject(data)
    return data;
}

const fetchProjects = async (opts: {
    shared?: boolean
} = {}) => {

    const { shared = false } = opts;
    try {
        const { dataReturned: data } = await serverCall({
            serverCallProps: {
                call: shared ? serverCalls.getGatewaySharedProjects : serverCalls.getGatewayProjects,
            },
            authorized: true,
        });

        return data;
    } catch (error) {
        console.error(`Error fetching projects::`, error);
        throw error;
    }
};

const fetchSharedProjectTokens = async () => {
    try {
        const { dataReturned: data } = await serverCall({
            serverCallProps: {
                call: serverCalls.getGatewaySharedProjectTokens
            },
            authorized: true,
        });

        return data;
    } catch (error) {
        console.error(`Error fetching projects::`, error);
        throw error;
    }
};




export default useNoboxData;
