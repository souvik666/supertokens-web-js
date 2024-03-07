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
import {
    NormalisedInputType as AuthRecipeNormalisedInputType,
    InputType as AuthRecipeInputType,
} from "../authRecipe/types";
import {
    RecipePostAPIHookContext,
    RecipePreAPIHookContext,
    UserInput as RecipeModuleUserInput,
    RecipeFunctionOptions,
} from "../recipeModule/types";
import OverrideableBuilder from "supertokens-js-override";

export type PreAndPostAPIHookAction = "GET_MFA_INFO";

export type PreAPIHookContext = RecipePreAPIHookContext<PreAndPostAPIHookAction>;
export type PostAPIHookContext = RecipePostAPIHookContext<PreAndPostAPIHookAction>;

export type UserInput = {
    override?: {
        functions?: (
            originalImplementation: RecipeInterface,
            builder: OverrideableBuilder<RecipeInterface>
        ) => RecipeInterface;
    };
} & RecipeModuleUserInput<PreAndPostAPIHookAction>;

export type InputType = AuthRecipeInputType<PreAndPostAPIHookAction> & UserInput;

export type NormalisedInputType = AuthRecipeNormalisedInputType<PreAndPostAPIHookAction> & {
    override: {
        functions: (
            originalImplementation: RecipeInterface,
            builder: OverrideableBuilder<RecipeInterface>
        ) => RecipeInterface;
    };
};

export type MFAFactorInfo = {
    alreadySetup: string[];
    allowedToSetup: string[];
    next: string[];
};

export type RecipeInterface = {
    resyncSessionAndFetchMFAInfo: (input: { options?: RecipeFunctionOptions; userContext: any }) => Promise<{
        status: "OK";
        factors: MFAFactorInfo;
        emails: Record<string, string[] | undefined>;
        phoneNumbers: Record<string, string[] | undefined>;
        fetchResponse: Response;
    }>;
};

export type MFARequirement = string;

export type MFARequirementList = (
    | {
          oneOf: MFARequirement[];
      }
    | {
          allOfInAnyOrder: MFARequirement[];
      }
    | MFARequirement
)[];

export type MFAClaimValue = {
    c: Record<string, number | undefined>;
    v: boolean;
};
