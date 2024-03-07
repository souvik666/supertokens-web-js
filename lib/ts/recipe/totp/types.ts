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

export type PreAndPostAPIHookAction =
    | "CREATE_DEVICE"
    | "VERIFY_CODE"
    | "VERIFY_DEVICE"
    | "REMOVE_DEVICE"
    | "LIST_DEVICES";

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

export type DeviceInfo = {
    deviceName: string;
    secret: string;
    qrCodeString: string;
};

export type RecipeInterface = {
    createDevice: (input: { deviceName?: string; options?: RecipeFunctionOptions; userContext: any }) => Promise<
        | {
              status: "OK";
              issuerName: string;
              deviceName: string;
              secret: string;
              userIdentifier?: string;
              qrCodeString: string;

              fetchResponse: Response;
          }
        | {
              status: "DEVICE_ALREADY_EXISTS_ERROR";

              fetchResponse: Response;
          }
    >;
    verifyCode: (input: { totp: string; options?: RecipeFunctionOptions; userContext: any }) => Promise<
        | { status: "OK"; fetchResponse: Response }
        | {
              status: "INVALID_TOTP_ERROR";
              currentNumberOfFailedAttempts: number;
              maxNumberOfFailedAttempts: number;
              fetchResponse: Response;
          }
        | { status: "LIMIT_REACHED_ERROR"; retryAfterMs: number; fetchResponse: Response }
    >;
    verifyDevice: (input: {
        deviceName: string;
        totp: string;
        options?: RecipeFunctionOptions;
        userContext: any;
    }) => Promise<
        | { status: "OK"; wasAlreadyVerified: boolean; fetchResponse: Response }
        | {
              status: "INVALID_TOTP_ERROR";
              currentNumberOfFailedAttempts: number;
              maxNumberOfFailedAttempts: number;
              fetchResponse: Response;
          }
        | { status: "UNKNOWN_DEVICE_ERROR"; fetchResponse: Response }
        | { status: "LIMIT_REACHED_ERROR"; retryAfterMs: number; fetchResponse: Response }
    >;
    removeDevice: (input: {
        deviceName: string;
        options?: RecipeFunctionOptions;
        userContext: any;
    }) => Promise<{ status: "OK"; didDeviceExist: boolean; fetchResponse: Response }>;
    listDevices: (input: { options?: RecipeFunctionOptions; userContext: any }) => Promise<{
        status: "OK";
        devices: { name: string; period: number; skew: number; verified: boolean }[];
        fetchResponse: Response;
    }>;
};
