import { serverCall } from "@/servercall/init";
import { serverCalls } from "@/servercall/store";
import { storage } from "../utils/local-storage";

export interface CreateProjectInput {
    description?: string;

    name: string;

    slug: string;
}


export const storeData = async (opts: {
    setData?: any;
    store: ReturnType<typeof storage>;
    data: any;
    fresh?: boolean
}) => {
    const { setData, store, data, fresh = false } = opts;

    const storedData = store.getObject();

    const storeData = () => {
        store.setObject(data)
        return data;
    }

    let fetchedData;

    if ((!fresh && !storedData) || fresh) {
        fetchedData = storeData();
    }

    if (!fresh && storedData) {
        fetchedData = storeData();
        storeData();
    };

    if (setData) {
        setData(fetchedData);
    }
}


export const getAndSaveData = async (opts: {
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

export const callAndStore = async (args: {
    dataSourceCall: typeof fetchProjects;
    store: ReturnType<typeof storage>;
}) => {
    const { dataSourceCall, store } = args;
    const data = await dataSourceCall();
    store.setObject(data)
    return data;
}

export const fetchProjects = async (opts: {
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

export const fetchSharedProjectTokens = async () => {
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

export const fetchAllProjectResources = async () => {
    try {
        const { dataReturned: data } = await serverCall({
            serverCallProps: {
                call: serverCalls.getGatewayBulkProjectResources
            },
            authorized: true,
        });

        console.log(
            "kolp"
        )
        return data;
    } catch (error) {
        console.error(`get fetch all project resources::`, error);
        throw error;
    }
};

export const createProject = async (createProjectInput: CreateProjectInput) => {
    try {
        const { dataReturned: data } = await serverCall({
            serverCallProps: {
                data: createProjectInput,
                call: serverCalls.postGatewayProject,
            },
            authorized: true
        });

        return { data };
    } catch (error) {
        console.error(`Error creating project::`, error);
        return { error };
    }
};

