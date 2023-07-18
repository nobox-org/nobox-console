import { useEffect, useState } from 'react';
import axios from 'axios';
import { storageConstants } from '../constants';
import { LINKS } from '../links';
import { storage } from '../localStorage';

const useNoboxData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const store = storage(storageConstants.NOBOX_DATA);
    const projectsDataFromLocalStore = store.getObject() as any;

    const fetchProjects = async (token: string, opts: {
        backgroundRun?: boolean
    } = {
            backgroundRun: true
        }) => {
        try {
            const response = await axios.get(`${LINKS.noboxGatewayRootUrl}/projects`, {
                headers: {
                    'accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            const data = response.data;

            if (data) {
                store.setObject(data)
                !opts?.backgroundRun && setData(response.data);
                !opts?.backgroundRun && setLoading(false);
                return;
            }

            console.log("An unexpected error occured:: useNoboxData")
            throw new Error("An unexpceted error occured.");
        } catch (error) {
            console.error(`Error fetching noboxData::`, error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem(storageConstants.NOBOX_CLIENT_TOKEN);

        if (token) {
            if (projectsDataFromLocalStore) {
                setData(projectsDataFromLocalStore);
                fetchProjects(token);
                setLoading(false);
                return;
            }

            console.log("Fetching projects:: useNoboxData");

            fetchProjects(token, { backgroundRun: false });

            setLoading(false);
        }

    }, []);

    return { data, loading };
};

export default useNoboxData;
