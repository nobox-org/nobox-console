import { ServerCallVerbs, ServerCallsType } from "servercall";

export type ServerCallsKeyType =
    | "get"
    | "getHealth"
    | "get"
    | "post"
    | "getSearch"
    | "getSingle"
    | "postSingle"
    | "postUpdateById"
    | "postUpdate"
    | "getGetTokenOwner"
    | "postSetKeyValues"
    | "getGetKeyValues"
    | "postFunction"
    | "getAuthGoogle"
    | "getAuthGoogleCallback"
    | "getAuthGithub"
    | "getAuthGithubCallback"
    | "getAuthForeverToken"
    | "getAuthAuthCheck"
    | "getGatewayProjects"
    | "getGatewaySharedProjects"
    | "getGatewaySharedProjectTokens"
    | "getGatewayBulkProjectResources"
    | "getGatewayRecordsByRecordspaceId"
    | "postGatewayProjectsAddUser"
    | "postGatewayProjectsRemoveUser"
    | "getGatewayProjectsUsers"
    | "postProject";


export const serverCalls: ServerCallsType<ServerCallsKeyType> = {
    get: {
        path: (args: { recordSpaceSlug: string; projectSlug: string }) =>
            `/${args.projectSlug}/${args.recordSpaceSlug}`,
        name: "get",
        verb: ServerCallVerbs.Get,
    },
    getHealth: {
        path: "/health",
        name: "getHealth",
        verb: ServerCallVerbs.Get,
    },
    post: {
        path: "/{projectSlug}/{recordSpaceSlug}",
        name: "post",
        verb: ServerCallVerbs.Post,
    },
    getSearch: {
        path: (args: { recordSpaceSlug: string; projectSlug: string }) =>
            `/${args.projectSlug}/${args.recordSpaceSlug}/search`,
        name: "getSearch",
        verb: ServerCallVerbs.Get,
    },
    getSingle: {
        path: "/{projectSlug}/{recordSpaceSlug}/_single_",
        name: "getSingle",
        verb: ServerCallVerbs.Get,
    },
    postSingle: {
        path: "/{projectSlug}/{recordSpaceSlug}/_single_",
        name: "postSingle",
        verb: ServerCallVerbs.Post,
    },
    postUpdateById: {
        path: "/{projectSlug}/{recordSpaceSlug}/update-by-id",
        name: "postUpdateById",
        verb: ServerCallVerbs.Post,
    },
    postUpdate: {
        path: "/{projectSlug}/{recordSpaceSlug}/update",
        name: "postUpdate",
        verb: ServerCallVerbs.Post,
    },
    getGetTokenOwner: {
        path: "/{projectSlug}/{recordSpaceSlug}/get-token-owner",
        name: "getGetTokenOwner",
        verb: ServerCallVerbs.Get,
    },
    postSetKeyValues: {
        path: "/{projectSlug}/{recordSpaceSlug}/set-key-values",
        name: "postSetKeyValues",
        verb: ServerCallVerbs.Post,
    },
    getGetKeyValues: {
        path: "/{projectSlug}/{recordSpaceSlug}/get-key-values",
        name: "getGetKeyValues",
        verb: ServerCallVerbs.Get,
    },
    postFunction: {
        path: "/{projectSlug}/function/{functionName}",
        name: "postFunction",
        verb: ServerCallVerbs.Post,
    },
    getAuthGoogle: {
        path: "/auth/_/google",
        name: "getAuthGoogle",
        verb: ServerCallVerbs.Get,
    },
    getAuthGoogleCallback: {
        path: "/auth/_/google/callback",
        name: "getAuthGoogleCallback",
        verb: ServerCallVerbs.Get,
    },
    getAuthGithub: {
        path: "/auth/_/github",
        name: "getAuthGithub",
        verb: ServerCallVerbs.Get,
    },
    getAuthGithubCallback: {
        path: "/auth/_/github/callback",
        name: "getAuthGithubCallback",
        verb: ServerCallVerbs.Get,
    },
    getAuthForeverToken: {
        path: (args: { token: string }) =>
            `/auth/_/forever_token/${args.token}`,
        name: "getAuthForeverToken",
        verb: ServerCallVerbs.Get,
    },
    getAuthAuthCheck: {
        path: (args: { token: string }) => `/auth/_/auth_check/${args.token}`,
        name: "getAuthAuthCheck",
        verb: ServerCallVerbs.Get,
    },
    getGatewayProjects: {
        path: "/gateway/*/projects",
        name: "getGatewayProjects",
        verb: ServerCallVerbs.Get,
    },
    getGatewaySharedProjects: {
        path: "/gateway/*/shared-projects",
        name: "getGatewaySharedProjects",
        verb: ServerCallVerbs.Get,
    },
    getGatewaySharedProjectTokens: {
        path: "/gateway/*/shared-project-tokens",
        name: "getGatewaySharedProjectTokens",
        verb: ServerCallVerbs.Get,
    },
    getGatewayBulkProjectResources: {
        path: "/gateway/*/bulk-project-resources",
        name: "getGatewayBulkProjectResources",
        verb: ServerCallVerbs.Get,
    },
    getGatewayRecordsByRecordspaceId: {
        path: "/gateway/*/records-by-recordspace_id",
        name: "getGatewayRecordsByRecordspaceId",
        verb: ServerCallVerbs.Get,
    },
    postGatewayProjectsAddUser: {
        path: "/gateway/*/projects/add-user",
        name: "postGatewayProjectsAddUser",
        verb: ServerCallVerbs.Post,
    },
    postGatewayProjectsRemoveUser: {
        path: "/gateway/*/projects/remove-user",
        name: "postGatewayProjectsRemoveUser",
        verb: ServerCallVerbs.Post,
    },
    getGatewayProjectsUsers: {
        path: (args: { projectId: string }) =>
            `/gateway/*/projects/users/${args.projectId}`,
        name: "getGatewayProjectsUsers",
        verb: ServerCallVerbs.Get,
    },
    postProject: {
        path: "/gateway/*/project",
        name: "postProject",
        verb: ServerCallVerbs.Post,
    },
};
