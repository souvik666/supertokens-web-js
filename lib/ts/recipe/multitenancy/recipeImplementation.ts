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

import Querier from "../../querier";
import { RecipeInterface } from "./types";
import { RecipeImplementationInput } from "../recipeModule/types";
import { PreAndPostAPIHookAction } from "./types";

export default function getRecipeImplementation(
    recipeImplInput: RecipeImplementationInput<PreAndPostAPIHookAction>
): RecipeInterface {
    const querier = new Querier(recipeImplInput.recipeId, recipeImplInput.appInfo);

    return {
        getTenantId() {
            return undefined; // This defaults to the "public" tenant
        },

        getLoginMethods: async function ({ tenantId, options, userContext }) {
            const queryParams: Record<string, string> = {};

            if (recipeImplInput.clientType !== undefined) {
                queryParams.clientType = recipeImplInput.clientType;
            }

            const { jsonBody, fetchResponse } = await querier.get<{
                status: "OK";
                emailPassword: {
                    enabled: boolean;
                };
                passwordless: {
                    enabled: boolean;
                };
                thirdParty: {
                    enabled: boolean;
                    providers: {
                        id: string;
                        name: string;
                    }[];
                };
                firstFactors?: string[];
            }>(
                tenantId,
                "/loginmethods",
                {},
                queryParams,
                Querier.preparePreAPIHook({
                    recipePreAPIHook: recipeImplInput.preAPIHook,
                    action: "GET_LOGIN_METHODS",
                    options: options,
                    userContext: userContext,
                }),
                Querier.preparePostAPIHook({
                    recipePostAPIHook: recipeImplInput.postAPIHook,
                    action: "GET_LOGIN_METHODS",
                    userContext: userContext,
                })
            );
            let firstFactors: string[];
            if (jsonBody.firstFactors === undefined) {
                firstFactors = [];
                if (jsonBody.emailPassword.enabled) {
                    firstFactors.push("emailpassword");
                }
                if (jsonBody.thirdParty.enabled) {
                    firstFactors.push("thirdparty");
                }
                if (jsonBody.passwordless.enabled) {
                    firstFactors.push("otp-email");
                    firstFactors.push("otp-phone");
                    firstFactors.push("link-email");
                    firstFactors.push("link-phone");
                }
            } else {
                firstFactors = jsonBody.firstFactors;
            }

            return {
                status: "OK",
                thirdParty: {
                    providers: jsonBody.thirdParty.providers,
                },
                firstFactors,
                fetchResponse,
            };
        },
    };
}

export { getRecipeImplementation };
