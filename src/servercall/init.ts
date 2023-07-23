import { storageConstants } from '@/lib/constants';
import { createServerCall } from 'servercall';

export const serverCall = createServerCall({
    baseUrl: 'http://localhost:8000',
    logger: console,
    defaultAuthSource: () => localStorage.getItem(storageConstants.NOBOX_CLIENT_TOKEN) || "",
    defaultResponseDataDept: (response: any) => response?.['data'],
    successFieldDept: (response: any) => !!response.data,
});