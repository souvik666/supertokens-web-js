"use strict";var supertokensPasswordless;(self.webpackChunksupertokens_web_js=self.webpackChunksupertokens_web_js||[]).push([[87],{7611:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SSR_ERROR=t.DEFAULT_API_BASE_PATH=void 0,t.DEFAULT_API_BASE_PATH="/auth",t.SSR_ERROR="\nIf you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook."},2173:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(942);t.default=r.STGeneralError},7992:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function n(e,t){void 0===t&&(t=!1),e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");var r=new URL(e);return t?r.hostname.startsWith("localhost")||(o=r.hostname,/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(o))?"http://"+r.host:"https://"+r.host:r.protocol+"//"+r.host}catch(e){}var o;if(e.startsWith("/"))throw new Error("Please provide a valid domain name");if(0===e.indexOf(".")&&(e=e.substr(1)),(-1!==e.indexOf(".")||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://")){e="https://"+e;try{return new URL(e),n(e,!0)}catch(e){}}throw new Error("Please provide a valid domain name")}t.default=function(e){var t=this;this.getAsStringDangerous=function(){return t.value},this.value=n(e)}},1260:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function n(e){e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");return"/"===(e=new URL(e).pathname).charAt(e.length-1)?e.substr(0,e.length-1):e}catch(e){}if((function(e){if(-1===e.indexOf(".")||e.startsWith("/"))return!1;try{return-1!==new URL(e).hostname.indexOf(".")}catch(e){}try{return-1!==new URL("http://"+e).hostname.indexOf(".")}catch(e){}return!1}(e)||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://"))return n(e="http://"+e);"/"!==e.charAt(0)&&(e="/"+e);try{return new URL("http://example.com"+e),n("http://example.com"+e)}catch(e){throw new Error("Please provide a valid URL path")}}t.default=function e(t){var r=this;this.startsWith=function(e){return r.value.startsWith(e.value)},this.appendPath=function(t){return new e(r.value+t.value)},this.getAsStringDangerous=function(){return r.value},this.value=n(t)}},634:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var s=n(1260),u=n(255),a=n(2173),c=function(){function e(e,t){var n=this;this.get=function(e,t,s,u,a){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e,s),r({method:"GET"},t),u,a)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.post=function(e,t,s,u){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:if(void 0===t.body)throw new Error("Post request must have a body");return[4,this.fetch(this.getFullUrl(e),r({method:"POST"},t),s,u)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.delete=function(e,t,s,u){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e),r({method:"DELETE"},t),s,u)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.put=function(e,t,s,u){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e),r({method:"PUT"},t),s,u)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.fetch=function(e,t,s,a){return o(n,void 0,void 0,(function(){var n,o,c,l,f,p;return i(this,(function(i){switch(i.label){case 0:return n=void 0===t?{}:t.headers,[4,this.callPreAPIHook({preAPIHook:s,url:e,requestInit:r(r({},t),{headers:r(r({},n),{"fdi-version":u.supported_fdi.join(","),"Content-Type":"application/json",rid:this.recipeId})})})];case 1:return o=i.sent(),c=o.requestInit,l=o.url,[4,fetch(l,c)];case 2:if((f=i.sent()).status>=300)throw f;return void 0===a?[3,4]:(p=f.clone(),[4,a({requestInit:c,url:e,fetchResponse:p})]);case 3:i.sent(),i.label=4;case 4:return[2,f]}}))}))},this.callPreAPIHook=function(e){return o(n,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return void 0===e.preAPIHook?[2,{url:e.url,requestInit:e.requestInit}]:[4,e.preAPIHook({url:e.url,requestInit:e.requestInit})];case 1:return[2,t.sent()]}}))}))},this.getFullUrl=function(e,t){var r=new s.default(e),o="".concat(n.appInfo.apiDomain.getAsStringDangerous()).concat(n.appInfo.apiBasePath.getAsStringDangerous()).concat(r.getAsStringDangerous());return void 0===t?o:o+"?"+new URLSearchParams(t)},this.getResponseJsonOrThrowGeneralError=function(e){return o(n,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return[4,e.clone().json()];case 1:if("GENERAL_ERROR"===(t=r.sent()).status)throw n=void 0===t.message?"No Error Message Provided":t.message,new a.default(n);return[2,t]}}))}))},this.recipeId=e,this.appInfo=t}var t;return t=e,e.preparePreAPIHook=function(e){var n=e.recipePreAPIHook,s=e.action,u=e.options,a=e.userContext;return function(e){return o(void 0,void 0,void 0,(function(){var o;return i(t,(function(t){switch(t.label){case 0:return[4,n(r(r({},e),{action:s,userContext:a}))];case 1:return o=t.sent(),void 0===u||void 0===u.preAPIHook?[2,o]:[2,u.preAPIHook({url:o.url,requestInit:o.requestInit,userContext:a})]}}))}))}},e.preparePostAPIHook=function(e){var n=e.recipePostAPIHook,s=e.action,u=e.userContext;return function(e){return o(void 0,void 0,void 0,(function(){return i(t,(function(t){switch(t.label){case 0:return[4,n(r(r({},e),{userContext:u,action:s}))];case 1:return t.sent(),[2]}}))}))}},e}();t.default=c},7725:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}a((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(1996),a=n(6322),c=function(e){function t(t){var n=e.call(this,t)||this;return n.signOut=function(e){return i(n,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,a.default.getInstanceOrThrow().signOut({userContext:e.userContext})];case 1:return[2,t.sent()]}}))}))},n}return o(t,e),t}(u.default);t.default=c},5053:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseAuthRecipe=void 0;var r=n(6069);t.normaliseAuthRecipe=function(e){return(0,r.normaliseRecipeModuleConfig)(e)}},6427:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY=void 0,t.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY="supertokens-passwordless-loginAttemptInfo"},6525:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.clearLoginAttemptInfo=t.setLoginAttemptInfo=t.getLoginAttemptInfo=t.getPreAuthSessionIdFromURL=t.getLinkCodeFromURL=t.signOut=t.doesPhoneNumberExist=t.doesEmailExist=t.consumeCode=t.resendCode=t.createCode=t.init=void 0;var s=n(8122),u=n(2856),a=n(4921),c=function(){function e(){}return e.init=function(e){return u.default.init(e)},e.createCode=function(e){return o(this,void 0,void 0,(function(){var t;return i(this,(function(n){return t=u.default.getInstanceOrThrow(),[2,a.createCode(r(r({},e),{recipeImplementation:t.recipeImplementation}))]}))}))},e.resendCode=function(e){return o(this,void 0,void 0,(function(){var t;return i(this,(function(n){return t=u.default.getInstanceOrThrow(),[2,a.resendCode(r(r({},e),{recipeImplementation:t.recipeImplementation}))]}))}))},e.consumeCode=function(e){return o(this,void 0,void 0,(function(){var t;return i(this,(function(n){return t=u.default.getInstanceOrThrow(),[2,a.consumeCode(r(r({},e),{recipeImplementation:t.recipeImplementation}))]}))}))},e.getLinkCodeFromURL=function(e){return u.default.getInstanceOrThrow().recipeImplementation.getLinkCodeFromURL(r(r({},e),{userContext:(0,s.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e.getPreAuthSessionIdFromURL=function(e){return u.default.getInstanceOrThrow().recipeImplementation.getPreAuthSessionIdFromURL(r(r({},e),{userContext:(0,s.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e.doesEmailExist=function(e){return u.default.getInstanceOrThrow().recipeImplementation.doesEmailExist(r(r({},e),{userContext:(0,s.getNormalisedUserContext)(e.userContext)}))},e.doesPhoneNumberExist=function(e){return u.default.getInstanceOrThrow().recipeImplementation.doesPhoneNumberExist(r(r({},e),{userContext:(0,s.getNormalisedUserContext)(e.userContext)}))},e.getLoginAttemptInfo=function(e){return u.default.getInstanceOrThrow().recipeImplementation.getLoginAttemptInfo(r(r({},e),{userContext:(0,s.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e.setLoginAttemptInfo=function(e){return u.default.getInstanceOrThrow().recipeImplementation.setLoginAttemptInfo(r(r({},e),{userContext:(0,s.getNormalisedUserContext)(e.userContext)}))},e.clearLoginAttemptInfo=function(e){return u.default.getInstanceOrThrow().recipeImplementation.clearLoginAttemptInfo(r(r({},e),{userContext:(0,s.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e.signOut=function(e){return u.default.getInstanceOrThrow().signOut({userContext:(0,s.getNormalisedUserContext)(null==e?void 0:e.userContext)})},e}();t.default=c;var l=c.init;t.init=l;var f=c.createCode;t.createCode=f;var p=c.resendCode;t.resendCode=p;var d=c.consumeCode;t.consumeCode=d;var h=c.doesEmailExist;t.doesEmailExist=h;var v=c.doesPhoneNumberExist;t.doesPhoneNumberExist=v;var I=c.signOut;t.signOut=I;var m=c.getLinkCodeFromURL;t.getLinkCodeFromURL=m;var g=c.getPreAuthSessionIdFromURL;t.getPreAuthSessionIdFromURL=g;var w=c.getLoginAttemptInfo;t.getLoginAttemptInfo=w;var y=c.setLoginAttemptInfo;t.setLoginAttemptInfo=y;var b=c.clearLoginAttemptInfo;t.clearLoginAttemptInfo=b},2856:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Recipe=void 0;var s=n(6333),u=n(8122),a=n(7725),c=n(4921),l=n(8891),f=function(e){function t(t){var n=e.call(this,(0,c.normaliseUserInput)(t))||this,r=new s.default((0,l.default)({recipeId:n.config.recipeId,appInfo:n.config.appInfo,preAPIHook:n.config.preAPIHook,postAPIHook:n.config.postAPIHook}));return n.recipeImplementation=r.override(n.config.override.functions).build(),n}return o(t,e),t.init=function(e){return function(n){return t.instance=new t(i(i({},e),{recipeId:t.RECIPE_ID,appInfo:n})),t.instance}},t.getInstanceOrThrow=function(){if(void 0===t.instance){var e="No instance of Passwordless found. Make sure to call the Passwordless.init method.";throw e=(0,u.checkForSSRErrorAndAppendIfNeeded)(e),Error(e)}return t.instance},t.reset=function(){(0,u.isTest)()&&(t.instance=void 0)},t.RECIPE_ID="passwordless",t}(a.default);t.Recipe=f,t.default=f},8891:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getRecipeImplementation=void 0;var s=n(9092),u=n(634),a=n(8122),c=n(6427);function l(e){var t=new u.default(e.recipeId,e.appInfo);return{createCode:function(n){return o(this,void 0,void 0,(function(){var o,s,a,c;return i(this,(function(i){switch(i.label){case 0:return"email"in n&&(o={email:n.email}),"phoneNumber"in n&&(o={phoneNumber:n.phoneNumber}),[4,t.post("/signinup/code",{body:JSON.stringify(o)},u.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"PASSWORDLESS_CREATE_CODE",userContext:n.userContext,options:n.options}),u.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"PASSWORDLESS_CREATE_CODE",userContext:n.userContext}))];case 1:return s=i.sent(),a=s.jsonBody,c=s.fetchResponse,[2,r(r({},a),{fetchResponse:c})]}}))}))},resendCode:function(n){return o(this,void 0,void 0,(function(){var r,o,s,a;return i(this,(function(i){switch(i.label){case 0:return r={deviceId:n.deviceId,preAuthSessionId:n.preAuthSessionId},[4,t.post("/signinup/code/resend",{body:JSON.stringify(r)},u.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"PASSWORDLESS_RESEND_CODE",userContext:n.userContext,options:n.options}),u.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"PASSWORDLESS_RESEND_CODE",userContext:n.userContext}))];case 1:return o=i.sent(),s=o.jsonBody,a=o.fetchResponse,[2,{status:s.status,fetchResponse:a}]}}))}))},consumeCode:function(n){return o(this,void 0,void 0,(function(){var o,s,a,c;return i(this,(function(i){switch(i.label){case 0:return o="userInputCode"in n?{userInputCode:n.userInputCode,deviceId:n.deviceId,preAuthSessionId:n.preAuthSessionId}:{linkCode:n.linkCode,preAuthSessionId:n.preAuthSessionId},[4,t.post("/signinup/code/consume",{body:JSON.stringify(o)},u.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"PASSWORDLESS_CONSUME_CODE",userContext:n.userContext,options:n.options}),u.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"PASSWORDLESS_CONSUME_CODE",userContext:n.userContext}))];case 1:return s=i.sent(),a=s.jsonBody,c=s.fetchResponse,[2,r(r({},a),{fetchResponse:c})]}}))}))},getLinkCodeFromURL:function(){return(0,a.getHashFromLocation)()},getPreAuthSessionIdFromURL:function(){var e=(0,a.getQueryParams)("preAuthSessionId");return void 0===e?"":e},doesEmailExist:function(n){return o(this,void 0,void 0,(function(){var r,o,s;return i(this,(function(i){switch(i.label){case 0:return[4,t.get("/signup/email/exists",{},{email:n.email},u.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"EMAIL_EXISTS",userContext:n.userContext,options:n.options}),u.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"EMAIL_EXISTS",userContext:n.userContext}))];case 1:return r=i.sent(),o=r.jsonBody,s=r.fetchResponse,[2,{status:o.status,doesExist:o.exists,fetchResponse:s}]}}))}))},doesPhoneNumberExist:function(n){return o(this,void 0,void 0,(function(){var r,o,s;return i(this,(function(i){switch(i.label){case 0:return[4,t.get("/signup/phoneNumber/exists",{},{phoneNumber:n.phoneNumber},u.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"PHONE_NUMBER_EXISTS",userContext:n.userContext,options:n.options}),u.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"PHONE_NUMBER_EXISTS",userContext:n.userContext}))];case 1:return r=i.sent(),o=r.jsonBody,s=r.fetchResponse,[2,{status:o.status,doesExist:o.exists,fetchResponse:s}]}}))}))},getLoginAttemptInfo:function(){return o(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return[4,s.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.getItem(c.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY)];case 1:if(null===(e=t.sent()))return[2,void 0];try{return[2,JSON.parse(e)]}catch(e){return[2,void 0]}return[2]}}))}))},setLoginAttemptInfo:function(e){return o(this,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return[4,s.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.setItem(c.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY,JSON.stringify(r({version:1},e.attemptInfo)))];case 1:return t.sent(),[2]}}))}))},clearLoginAttemptInfo:function(){return o(this,void 0,void 0,(function(){return i(this,(function(e){return s.WindowHandlerReference.getReferenceOrThrow().windowHandler.localStorage.removeItem(c.PASSWORDLESS_LOGIN_ATTEMPT_INFO_STORAGE_KEY),[2]}))}))}}}t.default=l,t.getRecipeImplementation=l},4921:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}a((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.consumeCode=t.resendCode=t.createCode=t.normaliseUserInput=void 0;var s=n(8122),u=n(5053);t.normaliseUserInput=function(e){var t=r({functions:function(e){return e}},e.override);return r(r({},(0,u.normaliseAuthRecipe)(e)),{override:t})},t.createCode=function(e){return o(this,void 0,void 0,(function(){var t,n;return i(this,(function(o){switch(o.label){case 0:return t=(0,s.getNormalisedUserContext)(e.userContext),[4,e.recipeImplementation.createCode(r(r({},e),{userContext:t}))];case 1:return n=o.sent(),[4,e.recipeImplementation.setLoginAttemptInfo({attemptInfo:{deviceId:n.deviceId,preAuthSessionId:n.preAuthSessionId,flowType:n.flowType},userContext:t})];case 2:return o.sent(),[2,n]}}))}))},t.resendCode=function(e){return o(this,void 0,void 0,(function(){var t,n;return i(this,(function(o){switch(o.label){case 0:return t=(0,s.getNormalisedUserContext)(e.userContext),[4,e.recipeImplementation.getLoginAttemptInfo({userContext:t})];case 1:return n=o.sent(),[2,e.recipeImplementation.resendCode(r(r({},e),{userContext:t,deviceId:void 0===n?"":n.deviceId,preAuthSessionId:void 0===n?"":n.preAuthSessionId}))]}}))}))},t.consumeCode=function(e){return o(this,void 0,void 0,(function(){var t,n,o,u,a;return i(this,(function(i){switch(i.label){case 0:return t=(0,s.getNormalisedUserContext)(e.userContext),"userInputCode"in e?[4,e.recipeImplementation.getLoginAttemptInfo({userContext:t})]:[3,2];case 1:return o=i.sent(),n={userInputCode:e.userInputCode,deviceId:void 0===o?"":o.deviceId,preAuthSessionId:void 0===o?"":o.preAuthSessionId},[3,3];case 2:u=e.recipeImplementation.getLinkCodeFromURL({userContext:e.userContext}),a=e.recipeImplementation.getPreAuthSessionIdFromURL({userContext:e.userContext}),n={linkCode:u,preAuthSessionId:a},i.label=3;case 3:return[2,e.recipeImplementation.consumeCode(r({userContext:t,options:e.options},n))]}}))}))}},1996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){this.config=e}},6069:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}a((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseRecipeModuleConfig=void 0,t.normaliseRecipeModuleConfig=function(e){var t=this,o=e.preAPIHook;void 0===o&&(o=function(e){return n(t,void 0,void 0,(function(){return r(this,(function(t){return[2,e]}))}))});var i=e.postAPIHook;return void 0===i&&(i=function(){return n(t,void 0,void 0,(function(){return r(this,(function(e){return[2]}))}))}),{recipeId:e.recipeId,appInfo:e.appInfo,preAPIHook:o,postAPIHook:i}}},6322:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},s=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{a(r.next(e))}catch(e){i(e)}}function u(e){try{a(r.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,u)}a((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.Recipe=void 0;var a=n(1996),c=n(1757),l=n(8122),f=function(e){function t(t){var n=e.call(this,t)||this;return n.getUserId=function(e){return c.default.getUserId({userContext:e.userContext})},n.getAccessTokenPayloadSecurely=function(e){return s(n,void 0,void 0,(function(){return u(this,(function(t){return[2,c.default.getAccessTokenPayloadSecurely({userContext:e.userContext})]}))}))},n.doesSessionExist=function(e){return c.default.doesSessionExist({userContext:e.userContext})},n.signOut=function(e){return c.default.signOut({userContext:e.userContext})},n.attemptRefreshingSession=function(){return s(n,void 0,void 0,(function(){return u(this,(function(e){return[2,c.default.attemptRefreshingSession()]}))}))},n.validateClaims=function(e){return c.default.validateClaims(e.overrideGlobalClaimValidators,e.userContext)},c.default.init(i(i({},t),{preAPIHook:function(e){return s(n,void 0,void 0,(function(){var n;return u(this,(function(r){return n=i(i({},e),{requestInit:i(i({},e.requestInit),{headers:i(i({},e.requestInit.headers),{rid:t.recipeId})})}),void 0===t.preAPIHook?[2,n]:[2,t.preAPIHook(e)]}))}))},apiDomain:t.appInfo.apiDomain.getAsStringDangerous(),apiBasePath:t.appInfo.apiBasePath.getAsStringDangerous()})),n}return o(t,e),t.init=function(e){return function(n,r){return t.instance=new t(i(i({},e),{appInfo:n,recipeId:t.RECIPE_ID,enableDebugLogs:r})),t.instance}},t.prototype.getClaimValue=function(e){return c.default.getClaimValue(e)},t.prototype.getInvalidClaimsFromResponse=function(e){return c.default.getInvalidClaimsFromResponse(e)},t.addAxiosInterceptors=function(e,t){return c.default.addAxiosInterceptors(e,t)},t.getInstanceOrThrow=function(){if(void 0===t.instance){var e="No instance of Session found. Make sure to call the Session.init method.";throw e=(0,l.checkForSSRErrorAndAppendIfNeeded)(e),Error(e)}return t.instance},t.reset=function(){(0,l.isTest)()&&(t.instance=void 0)},t.RECIPE_ID="session",t}(a.default);t.Recipe=f,t.default=f},8122:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getHashFromLocation=t.getNormalisedUserContext=t.checkForSSRErrorAndAppendIfNeeded=t.getQueryParams=t.isTest=t.normaliseInputAppInfoOrThrowError=t.appendQueryParamsToURL=void 0;var r=n(9092),o=n(7611),i=n(7992),s=n(1260);t.appendQueryParamsToURL=function(e,t){if(void 0===t)return e;try{var n=new URL(e);return Object.entries(t).forEach((function(e){var t=e[0],r=e[1];n.searchParams.set(t,r)})),n.href}catch(n){var r=e.startsWith("/")?"http:localhost":"http://localhost/",o=new URL("".concat(r).concat(e));return Object.entries(t).forEach((function(e){var t=e[0],n=e[1];o.searchParams.set(t,n)})),"".concat(o.pathname).concat(o.search)}},t.normaliseInputAppInfoOrThrowError=function(e){if(void 0===e)throw new Error("Please provide the appInfo object when calling supertokens.init");if(void 0===e.apiDomain)throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");if(void 0===e.appName)throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");var t,n,r=new s.default("");return void 0!==e.apiGatewayPath&&(r=new s.default(e.apiGatewayPath)),{appName:e.appName,apiDomain:new i.default(e.apiDomain),apiBasePath:r.appendPath((t=o.DEFAULT_API_BASE_PATH,n=e.apiBasePath,void 0!==n?new s.default(n):new s.default(t)))}},t.isTest=function(){try{return"testing"===process.env.TEST_MODE}catch(e){return!1}},t.getQueryParams=function(e){var t=new URLSearchParams(r.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()).get(e);if(null!==t)return t},t.checkForSSRErrorAndAppendIfNeeded=function(e){return"undefined"==typeof window&&(e+=o.SSR_ERROR),e},t.getNormalisedUserContext=function(e){return void 0===e?{}:e},t.getHashFromLocation=function(){return r.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1)}},255:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.supported_fdi=t.package_version=void 0,t.package_version="0.2.0",t.supported_fdi=["1.15"]},942:(e,t,n)=>{function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}t.__esModule=!0;let o=n(6398);void 0!==o.default?r(o):r({default:o,...o})},9092:(e,t,n)=>{t.__esModule=!0,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(7860))}},e=>{var t=(6525,e(e.s=6525));supertokensPasswordless=t}]);