/* Copyright (c) 2022, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
import RecipeModule from "../recipeModule";
import SuperTokensWebsite, { ClaimValidationError, SessionClaimValidator, SessionClaim } from "supertokens-website";
import { InputType, UserInput } from "./types";
import { checkForSSRErrorAndAppendIfNeeded, isTest } from "../../utils";
import { CreateRecipeFunction, NormalisedAppInfo } from "../../types";
import { EMAILVERIFICATION_CLAIM_ID } from "../emailverification/constants";

const priorityValidatorIds = [EMAILVERIFICATION_CLAIM_ID];

export default class Recipe extends RecipeModule<unknown, any> {
    static instance?: Recipe;
    static RECIPE_ID = "session";

    constructor(config: InputType) {
        super(config);

        SuperTokensWebsite.init({
            ...config,
            override: {
                functions: (originalImpl, builder) => {
                    builder!.override((oI) => ({
                        ...oI,
                        getGlobalClaimValidators: function (input) {
                            const res = oI.getGlobalClaimValidators(input);

                            return [
                                ...res.filter((x) => priorityValidatorIds.includes(x.id)),
                                ...res.filter((x) => !priorityValidatorIds.includes(x.id)),
                            ];
                        },
                    }));
                    if (config.override?.functions) {
                        builder!.override(config.override.functions);
                    }
                    return originalImpl;
                },
            },
            preAPIHook: async (context) => {
                const headers = new Headers(context.requestInit.headers);
                headers.set("rid", config.recipeId);
                const response = {
                    ...context,
                    requestInit: {
                        ...context.requestInit,
                        headers,
                    },
                };
                if (config.preAPIHook === undefined) {
                    return response;
                } else {
                    return config.preAPIHook(context);
                }
            },
            apiDomain: config.appInfo.apiDomain.getAsStringDangerous(),
            apiBasePath: config.appInfo.apiBasePath.getAsStringDangerous(),
        });
    }

    static init(config?: UserInput): CreateRecipeFunction<unknown> {
        return (appInfo: NormalisedAppInfo, _: string | undefined, enableDebugLogs: boolean) => {
            Recipe.instance = new Recipe({
                ...config,
                appInfo,
                recipeId: Recipe.RECIPE_ID,
                enableDebugLogs,
            });

            return Recipe.instance;
        };
    }

    getUserId = (input: { userContext: any }): Promise<string> => {
        return SuperTokensWebsite.getUserId({
            userContext: input.userContext,
        });
    };

    getAccessToken = async (input: { userContext: any }): Promise<string | undefined> => {
        return SuperTokensWebsite.getAccessToken({
            userContext: input.userContext,
        });
    };

    getAccessTokenPayloadSecurely = async (input: { userContext: any }): Promise<any> => {
        return SuperTokensWebsite.getAccessTokenPayloadSecurely({
            userContext: input.userContext,
        });
    };

    doesSessionExist = (input: { userContext: any }): Promise<boolean> => {
        return SuperTokensWebsite.doesSessionExist({
            userContext: input.userContext,
        });
    };

    signOut = (input: { userContext: any }): Promise<void> => {
        return SuperTokensWebsite.signOut({
            userContext: input.userContext,
        });
    };

    attemptRefreshingSession = async (): Promise<boolean> => {
        return SuperTokensWebsite.attemptRefreshingSession();
    };

    getClaimValue<T>(input: { claim: SessionClaim<T>; userContext: any }): Promise<T | undefined> {
        return SuperTokensWebsite.getClaimValue(input);
    }

    validateClaims = (input: {
        overrideGlobalClaimValidators?: (
            globalClaimValidators: SessionClaimValidator[],
            userContext: any
        ) => SessionClaimValidator[];
        userContext: any;
    }): Promise<ClaimValidationError[]> | ClaimValidationError[] => {
        return SuperTokensWebsite.validateClaims(input.overrideGlobalClaimValidators, input.userContext);
    };

    // The strange typing is to avoid adding a dependency to axios
    getInvalidClaimsFromResponse(input: {
        response: { data: any } | Response;
        userContext: any;
    }): Promise<ClaimValidationError[]> {
        return SuperTokensWebsite.getInvalidClaimsFromResponse(input);
    }

    static addAxiosInterceptors(axiosInstance: any, userContext: any): void {
        return SuperTokensWebsite.addAxiosInterceptors(axiosInstance, userContext);
    }

    static getInstanceOrThrow(): Recipe {
        if (Recipe.instance === undefined) {
            let error =
                "No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList.";
            error = checkForSSRErrorAndAppendIfNeeded(error);

            throw Error(error);
        }

        return Recipe.instance;
    }

    static reset(): void {
        if (!isTest()) {
            return;
        }
        Recipe.instance = undefined;
        return;
    }
}

export { Recipe };
