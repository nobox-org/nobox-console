import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { storageConstants } from '../constants';
import { LINKS } from '../links';

const useTokenHandler = () => {
    const [token, setToken] = useState("");
    const router = useRouter()

    const searchParams = useSearchParams();

    useEffect(() => {
        if (!token) {
            const tokenInUrl = searchParams.get("token");

            if (tokenInUrl) {
                localStorage.setItem(storageConstants.NOBOX_CLIENT_TOKEN, tokenInUrl);
                router.push(LINKS.internalPages.home)
                setToken(tokenInUrl);
            }

            if (!tokenInUrl) {
                const noboxClientToken = localStorage.getItem(storageConstants.NOBOX_CLIENT_TOKEN);

                if (noboxClientToken) {
                    setToken(noboxClientToken);
                }

                if (!noboxClientToken) {
                    router.push(LINKS.internalPages.login.github)
                }
            }
        }
    }, []);


    return { token };
};

export default useTokenHandler;

