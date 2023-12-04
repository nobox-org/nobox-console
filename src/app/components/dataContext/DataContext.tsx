import React from 'react';

const initValue = {
    loading: true,
    projects: [],
    allProjects: [],
    sharedProjects: [],
    initiateReload: () => { }
}

const DataContext = React.createContext<typeof initValue>(initValue);

export default DataContext;