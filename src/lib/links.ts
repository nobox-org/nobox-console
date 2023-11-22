
export interface Links {
    githubLogin: string;
    googleLogin: string;
    noboxAPIRootUrl: string;
    noboxGatewayRootUrl: string;
    internalPages: {
        home: string;
        login: {
            github: string;
        },
        error: {
            main: string
        }
    }
}

export const LINKS: Links = {
    githubLogin: `${process.env.NEXT_PUBLIC_NOBOX_API_ROOT_URL}/auth/_/github`,
    googleLogin: `${process.env.NEXT_PUBLIC_NOBOX_API_ROOT_URL}/auth/_/google`,
    noboxAPIRootUrl: `${process.env.NEXT_PUBLIC_NOBOX_API_ROOT_URL}`,
    noboxGatewayRootUrl: `${process.env.NEXT_PUBLIC_NOBOX_API_ROOT_URL}/gateway/*`,
    internalPages: {
        home: "/",
        login: {
            github: "/login"
        },
        error: {
            main: "/error"
        }
    }
}

