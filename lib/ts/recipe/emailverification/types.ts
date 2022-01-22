import { NormalisedRecipeConfig, RecipeConfig, RecipeFunctionOptions } from "../recipeModule/types";
import OverrideableBuilder from "supertokens-js-override";

export type PreAPIHookContext = {
    action: "VERIFY_EMAIL" | "SEND_VERIFY_EMAIL" | "IS_EMAIL_VERIFIED";
    requestInit: RequestInit;
    url: string;
};

export type InputType = RecipeConfig<PreAPIHookContext> & {
    mode?: "OFF" | "REQUIRED";
    disableDefaultImplementation?: boolean;
    signOut(): Promise<void>;
    override?: {
        functions?: (
            originalImplementation: RecipeInterface,
            builder?: OverrideableBuilder<RecipeInterface>
        ) => RecipeInterface;
    };
};

export type NormalisedInputType = NormalisedRecipeConfig<PreAPIHookContext> & {
    mode: "OFF" | "REQUIRED";
    disableDefaultImplementation: boolean;
    signOut(): Promise<void>;
    override: {
        functions: (
            originalImplementation: RecipeInterface,
            builder?: OverrideableBuilder<RecipeInterface>
        ) => RecipeInterface;
    };
};

export type RecipeInterface = {
    verifyEmail: (input: { token?: string; config: NormalisedInputType; options?: RecipeFunctionOptions }) => Promise<{
        status: "OK" | "CUSTOM_RESPONSE" | "EMAIL_VERIFICATION_INVALID_TOKEN_ERROR";
        fetchResponse?: Response;
    }>;

    sendVerificationEmail: (input: { config: NormalisedInputType; options?: RecipeFunctionOptions }) => Promise<{
        status: "EMAIL_ALREADY_VERIFIED_ERROR" | "OK" | "CUSTOM_RESPONSE";
        fetchResponse: Response;
    }>;

    isEmailVerified: (input: { config: NormalisedInputType; options?: RecipeFunctionOptions }) => Promise<
        | {
              status: "OK";
              isVerified: boolean;
              fetchResponse: Response;
          }
        | {
              status: "CUSTOM_RESPONSE";
              fetchResponse: Response;
          }
    >;
};
