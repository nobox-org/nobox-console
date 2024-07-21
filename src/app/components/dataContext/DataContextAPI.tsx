import React, { useEffect, useRef, useState } from 'react';
import DataContext from './DataContext';
import useNoboxData from '@/lib/hooks/useNoboxData';
import { storageConstants } from '@/lib/constants';

function DataContextProvider({ children }: any) {
    const isFirstLoad = useRef(true);

    const [freshReload, setFreshReload] = useState(false);
    const [freshReloadTime, setFreshReloadTime] = useState(new Date());

    const initiateReload = () => {
        setFreshReload(true);
        setFreshReloadTime(new Date());
    }

    const fresh = Boolean(isFirstLoad.current) || freshReload;

    const { loading, data: projects, sharedData: sharedProjects, allProjects } = useNoboxData({
        source: "DataContextProvider",
        fresh,
        freshReloadTime,
        backgroundOpts: {
            runInBackground: true,
            timeIntervalInSeconds: 10
        }
    });

    useEffect(() => {
        if (isFirstLoad.current) {
            localStorage.removeItem(storageConstants.NOBOX_DATA);
            isFirstLoad.current = false;
        }
    }, []);

    console.log("DataContext", { projects })

    return (
        <DataContext.Provider value={{ loading, projects, sharedProjects, initiateReload, allProjects }}>
            {children}
        </DataContext.Provider>
    );
}

export default DataContextProvider;