import { NormalisedAppInfo, PostAPIHookFunction, PreAPIHookFunction } from "./types";
export default class Querier {
    recipeId: string;
    appInfo: NormalisedAppInfo;
    constructor(recipeId: string, appInfo: NormalisedAppInfo);
    get: <T>(
        path: string,
        config: RequestInit,
        queryParams?: Record<string, string> | undefined,
        preAPIHook?: PreAPIHookFunction | undefined,
        postAPIHook?: PostAPIHookFunction | undefined
    ) => Promise<{
        json: T;
        fetchResponse: Response;
    }>;
    post: <T>(
        path: string,
        config: RequestInit,
        preAPIHook?: PreAPIHookFunction | undefined,
        postAPIHook?: PostAPIHookFunction | undefined
    ) => Promise<{
        json: T;
        fetchResponse: Response;
    }>;
    delete: <T>(
        path: string,
        config: RequestInit,
        preAPIHook?: PreAPIHookFunction | undefined,
        postAPIHook?: PostAPIHookFunction | undefined
    ) => Promise<{
        json: T;
        fetchResponse: Response;
    }>;
    put: <T>(
        path: string,
        config: RequestInit,
        preAPIHook?: PreAPIHookFunction | undefined,
        postAPIHook?: PostAPIHookFunction | undefined
    ) => Promise<{
        json: T;
        fetchResponse: Response;
    }>;
    fetch: (
        url: string,
        config: RequestInit,
        preAPIHook?: PreAPIHookFunction | undefined,
        postAPIHook?: PostAPIHookFunction | undefined
    ) => Promise<Response>;
    callPreAPIHook: (context: { preAPIHook?: PreAPIHookFunction; requestInit: RequestInit; url: string }) => Promise<{
        url: string;
        requestInit: RequestInit;
    }>;
    getFullUrl: (pathStr: string, queryParams?: Record<string, string> | undefined) => string;
}
