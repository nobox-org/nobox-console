import { storageConstants } from "../constants";
import { storage } from "../localStorage";

export const getProjectToken = (projectId: string) => {

    const sharedProjectTokenStore = storage(storageConstants.NOBOX_SHARED_PROJECT_TOKENS);

    const sharedProjectTokens = sharedProjectTokenStore.getObject<{ projectId: string, projectToken: string }[]>();

    const sharedProjectToken = sharedProjectTokens && sharedProjectTokens.find((sharedProjectToken) => {
        return sharedProjectToken.projectId === projectId
    });

    return sharedProjectToken?.projectToken || localStorage.getItem(storageConstants.NOBOX_CLIENT_TOKEN);
}