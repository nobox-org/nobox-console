import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { storageConstants } from '../constants';
import { LINKS } from '../links';

const useTokenHandler = () => {
    const [token, setToken] = useState("");

    const searchParams = useSearchParams();

    useEffect(() => {
        if (!token) {
            const tokenInUrl = searchParams.get("token");

            if (tokenInUrl) {
                localStorage.setItem(storageConstants.NOBOX_CLIENT_TOKEN, tokenInUrl);
                window.location.href = LINKS.internalPages.home
                setToken(tokenInUrl);
            }

            if (!tokenInUrl) {

                const noboxClientToken = localStorage.getItem(storageConstants.NOBOX_CLIENT_TOKEN);

                if (noboxClientToken) {
                    setToken(noboxClientToken);
                }

                if (!noboxClientToken) {
                    window.location.href = LINKS.internalPages.login.github
                }
            }
        }
    }, []);


    return { token };
};

export default useTokenHandler;

