var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "");
var APP_DIR = path.resolve(__dirname, "");
var version = JSON.stringify(require("./package.json").version);

var config = {
    /**
     * The key of the object should be what you want the variable to be named after
     * the user imports it as a script.
     *
     * The `import` property tells webpack what file to use as the starting point
     * The `filename` property is the name of the bundle file
     *
     * For example the user
     */
    entry: {
        supertokens: {
            import: APP_DIR + "/lib/build/bundleEntry.js",
            filename: "supertokens.js",
        },
        supertokensSession: {
            import: APP_DIR + "/lib/build/recipe/session/index.js",
            filename: "session.js",
        },
        supertokensEmailVerification: {
            import: APP_DIR + "/lib/build/recipe/emailverification/index.js",
            filename: "emailverification.js",
        },
        supertokensEmailPassword: {
            import: APP_DIR + "/lib/build/recipe/emailpassword/index.js",
            filename: "emailpassword.js",
        },
        supertokensThirdParty: {
            import: APP_DIR + "/lib/build/recipe/thirdparty/index.js",
            filename: "thirdparty.js",
        },
        supertokensThirdPartyEmailPassword: {
            import: APP_DIR + "/lib/build/recipe/thirdpartyemailpassword/index.js",
            filename: "thirdpartyemailpassword.js",
        },
        supertokensPasswordless: {
            import: APP_DIR + "/lib/build/recipe/passwordless/index.js",
            filename: "passwordless.js",
        },
        supertokensThirdPartyPasswordless: {
            import: APP_DIR + "/lib/build/recipe/thirdpartypasswordless/index.js",
            filename: "thirdpartypasswordless.js",
        },
    },
    output: {
        path: BUILD_DIR + "/bundle",
        library: "[name]",
    },
};

module.exports = config;
