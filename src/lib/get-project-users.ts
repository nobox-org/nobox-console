import { serverCall } from '@/servercall/init';
import { serverCalls } from '@/servercall/store';

interface GetProjectUsersArgs {
    projectId: string
}

export const getProjectUsers = async ({
    projectId,
}: GetProjectUsersArgs) => {

    const response = await serverCall({
        serverCallProps: {
            call: serverCalls.getGatewayProjectsUsers,
        },
        pathArgs: { projectId },
        authorized: true,
    });

    return response;
};