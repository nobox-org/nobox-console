import { useEffect, useState } from 'react';
import { storageConstants } from '../constants';
import { storage } from '../localStorage';
import { serverCall } from '@/servercall/init';
import { serverCalls } from '@/servercall/store';


const useNoboxData = () => {
    const [data, setData] = useState([]);
    const [sharedData, setSharedData] = useState([]);
    const [dataLoadingStatus, setDataLoadingStatus] = useState(true);
    const [sharedDataLoadingStatus, setSharedDataLoadingStatus] = useState(true);

    const store = storage(storageConstants.NOBOX_DATA);
    const sharedStore = storage(storageConstants.NOBOX_SHARED_DATA);
    const tokenStore = storage(storageConstants.NOBOX_SHARED_PROJECT_TOKENS);

    useEffect(() => {
        Promise.all([
            getAndSaveData({
                setData,
                setLoading: setDataLoadingStatus,
                store,
                dataSourceCall: () => fetchProjects()
            }),
            getAndSaveData({
                setData: setSharedData,
                setLoading: setSharedDataLoadingStatus,
                store: sharedStore,
                dataSourceCall: () => fetchProjects({ shared: true })
            }),
            getAndSaveData({
                setData: () => { },
                setLoading: () => { },
                store: tokenStore,
                dataSourceCall: () => fetchSharedProjectTokens()
            })
        ]);


    }, []);

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


const getAndSaveData = (opts: {
    setData: any;
    setLoading: any;
    store: ReturnType<typeof storage>;
    dataSourceCall: typeof fetchProjects;
}) => {
    const { setData, store, setLoading, dataSourceCall } = opts;

    const dataFromStore = store.getObject();

    if (dataFromStore) {
        setData(dataFromStore);
        setLoading(false);
    }

    dataSourceCall().then((data: any) => {
        console.log({ data })
        store.setObject(data)
        if (!dataFromStore) { setData(data) }
    });

    setLoading(false);
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
