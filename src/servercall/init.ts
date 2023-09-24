import { storageConstants } from '@/lib/constants';
import { LINKS } from '@/lib/links';
import { createServerCall } from 'servercall';

export const serverCall = createServerCall({
    baseUrl: LINKS.noboxAPIRootUrl,
    logger: console,
    defaultAuthSource: () => localStorage.getItem(storageConstants.NOBOX_CLIENT_TOKEN) || "",
    defaultResponseDataDept: (response: any) => response?.['data'],
    successFieldDept: (response: any) => !!response.data,
    handleServerError: (args: any) => {
        if (args.error.response.data.error[0] === "Authorization error") {
            return window.location.href = LINKS.internalPages.login.github;

        }

        throw args;
    }
});