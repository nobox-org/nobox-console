
export interface Links {
    githubLogin: string;
    noboxAPIRootUrl: string;
    noboxGatewayRootUrl: string;
    internalPages: {
        home: string;
        login: {
            github: string;
        }
    }
}

export const LINKS: Links = {
    githubLogin: `${process.env.NEXT_PUBLIC_NOBOX_API_ROOT_URL}/auth/_/github`,
    noboxAPIRootUrl: `${process.env.NEXT_PUBLIC_NOBOX_API_ROOT_URL}`,
    noboxGatewayRootUrl: `${process.env.NEXT_PUBLIC_NOBOX_API_ROOT_URL}/gateway/*`,
    internalPages: {
        home: "/",
        login: {
            github: "/login/github"
        }
    }
}

