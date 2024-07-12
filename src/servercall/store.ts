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
    | "getAuthConnectionToken"
    | "getAuthRefreshConnectionToken"
    | "getAuthAuthCheck"
    | "postAuthRegister"
    | "postAuthLogin"
    | "getGatewayProjects"
    | "getGatewaySharedProjects"
    | "getGatewaySharedProjectTokens"
    | "getGatewayBulkProjectResources"
    | "getGatewayRecordsByRecordspaceId"
    | "postGatewayProjectsAddUser"
    | "getGatewayViews"
    | "postGatewayViews"
    | "getGatewayViews"
    | "postGatewayViews"
    | "getGatewayLogs"
    | "postGatewayProjectsRemoveUser"
    | "getGatewayProjectsUsers"
    | "postGatewayProject"
    | "postGatewayNotifyMail"
    | "postGatewayNotifySms"
    | "postGatewayNotifyWhatsapp"
    | "postGatewayNotifyWhatsappReply"
    | "getGatewayNotifyWhatsappCallback"
    | "postSetInferredStructure"
    | "postGetInferredStructure"
    | "postSetStructure"
    | "postUtilsGetEmbedding";

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
    getAuthConnectionToken: {
        path: "/auth/_/connection_token",
        name: "getAuthConnectionToken",
        verb: ServerCallVerbs.Get,
    },
    getAuthRefreshConnectionToken: {
        path: "/auth/_/refresh_connection_token",
        name: "getAuthRefreshConnectionToken",
        verb: ServerCallVerbs.Get,
    },
    getAuthAuthCheck: {
        path: (args: { token: string }) => `/auth/_/auth_check/${args.token}`,
        name: "getAuthAuthCheck",
        verb: ServerCallVerbs.Get,
    },
    postAuthRegister: {
        path: "/auth/_/register",
        name: "postAuthRegister",
        verb: ServerCallVerbs.Post,
    },
    postAuthLogin: {
        path: "/auth/_/login",
        name: "postAuthLogin",
        verb: ServerCallVerbs.Post,
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
    getGatewayViews: {
        path: "/gateway/*/views/{id}",
        name: "getGatewayViews",
        verb: ServerCallVerbs.Get,
    },
    postGatewayViews: {
        path: "/gateway/*/views/{id}",
        name: "postGatewayViews",
        verb: ServerCallVerbs.Post,
    },
    getGatewayLogs: {
        path: "/gateway/*/logs",
        name: "getGatewayLogs",
        verb: ServerCallVerbs.Get,
    },
    postGatewayProjectsRemoveUser: {
        path: "/gateway/*/projects/remove-user",
        name: "postGatewayProjectsRemoveUser",
        verb: ServerCallVerbs.Post,
    },
    getGatewayProjectsUsers: {
        path: ({ projectId }: { projectId: string }) =>
            `/gateway/*/projects/users/${projectId}`,
        name: "getGatewayProjectsUsers",
        verb: ServerCallVerbs.Get,
    },
    postGatewayProject: {
        path: "/gateway/*/project",
        name: "postGatewayProject",
        verb: ServerCallVerbs.Post,
    },
    postGatewayNotifyMail: {
        path: "/gateway/*/notify/mail",
        name: "postGatewayNotifyMail",
        verb: ServerCallVerbs.Post,
    },
    postGatewayNotifySms: {
        path: "/gateway/*/notify/sms",
        name: "postGatewayNotifySms",
        verb: ServerCallVerbs.Post,
    },
    postGatewayNotifyWhatsapp: {
        path: "/gateway/*/notify/whatsapp",
        name: "postGatewayNotifyWhatsapp",
        verb: ServerCallVerbs.Post,
    },
    postGatewayNotifyWhatsappReply: {
        path: "/gateway/*/notify/whatsapp/reply",
        name: "postGatewayNotifyWhatsappReply",
        verb: ServerCallVerbs.Post,
    },
    getGatewayNotifyWhatsappCallback: {
        path: "/gateway/*/notify/whatsapp/callback",
        name: "getGatewayNotifyWhatsappCallback",
        verb: ServerCallVerbs.Get,
    },
    postSetInferredStructure: {
        path: (args: { recordSpaceSlug: string; projectSlug: string }) =>
            `/${args.projectSlug}/${args.recordSpaceSlug}/set-inferred-structure`,
        name: "postSetInferredStructure",
        verb: ServerCallVerbs.Post,
    },
    postGetInferredStructure: {
        path: (args: { recordSpaceSlug: string; projectSlug: string }) =>
            `/${args.projectSlug}/${args.recordSpaceSlug}/get-inferred-structure`,
        name: "postGetInferredStructure",
        verb: ServerCallVerbs.Post,
    },
    postSetStructure: {
        path: (args: { recordSpaceSlug: string; projectSlug: string }) =>
            `/${args.projectSlug}/${args.recordSpaceSlug}/set-structure`,
        name: "postSetStructure",
        verb: ServerCallVerbs.Post,
    },
    postUtilsGetEmbedding: {
        path: "/utils/*/get-embedding",
        name: "postUtilsGetEmbedding",
        verb: ServerCallVerbs.Post,
    },
};
