import { storageConstants } from '@/lib/constants';
import { LINKS } from '@/lib/links';
import { createServerCall } from 'servercall';

export const serverCall = createServerCall({
    baseUrl: LINKS.noboxAPIRootUrl,
    logger: console,
    defaultAuthSource: () => localStorage.getItem(storageConstants.NOBOX_TOKEN) || "",
    defaultResponseDataDept: (response: any) => response?.['data'],
    successFieldDept: (response: any) => !!response.data,
    handleServerError: (args: any) => {
        const { error } = args;
        console.log(error);
        

        if (error.message === "Network Error") {
            return window.location.href = LINKS.internalPages.error.main;
        }

        const { error: dataError, message: dataMessage } = error.response.data;

        const errorMessage = Array.isArray(dataMessage)
            ? dataMessage
            : Array.isArray(dataError)
                ? dataError[0]
                : dataError;

        if (errorMessage === "Authorization error") {
            return window.location.href = LINKS.internalPages.login.github;
        }

        throw errorMessage;
    },
});