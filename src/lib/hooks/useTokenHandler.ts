import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { storageConstants } from '../constants';
import { LINKS } from '../links';
import { serverCall } from '@/servercall/init';
import { serverCalls } from '@/servercall/store';

const useTokenHandler = () => {
    const [token, setToken] = useState("");

    const searchParams = useSearchParams();

    useEffect(() => {
        if (!token) {
            const tokenInUrl = searchParams.get("token");

            if (tokenInUrl) {

                localStorage.setItem(storageConstants.NOBOX_TOKEN, tokenInUrl);

                serverCall({
                    serverCallProps: {
                        call: serverCalls.getAuthForeverToken,
                    },
                    pathArgs: {
                        token: tokenInUrl
                    }
                }).then((response) => {
                    const { success, dataReturned: { token } } = response;
                    if (success) {
                        localStorage.setItem(storageConstants.NOBOX_CLIENT_TOKEN, token);
                        window.location.href = LINKS.internalPages.home
                        setToken(tokenInUrl);
                    }
                });

            }

            if (!tokenInUrl) {

                const noboxClientToken = localStorage.getItem(storageConstants.NOBOX_CLIENT_TOKEN);

                if (noboxClientToken) {
                    serverCall({
                        serverCallProps: {
                            call: serverCalls.getAuthAuthCheck,
                        },
                        pathArgs: {
                            token: noboxClientToken
                        }
                    }).then((response) => {
                        if (response.dataReturned.invalid) {
                            window.location.href = LINKS.internalPages.login.github
                        }
                    });

                    setToken(noboxClientToken);
                }

                if (!noboxClientToken) {
                    window.location.href = LINKS.internalPages.login.github
                }
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return { token };
};

export default useTokenHandler;

