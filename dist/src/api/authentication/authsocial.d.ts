import GoogleAuth from "./google.js";
import MicrosoftAuth from "./microsoft.js";
import GithubAuth from "./github.js";
import FacebookAuth from "./facebook.js";
export default class SocialAuth {
    credentials: any;
    google: GoogleAuth;
    microsoft: MicrosoftAuth;
    github: GithubAuth;
    facebook: FacebookAuth;
    router: any;
    constructor(credentials?: any);
    initialize(): void;
    authIfAvailable(): (req: any, res: any, next: any) => Promise<void>;
    auth(): (req: any, res: any, next: any) => Promise<void>;
    logout(req: any, res: any): Promise<void>;
    routes(): any;
    apiCreateTempUser(req: any, res: any, next: any): Promise<void>;
    redirectSocial(req: any, res: any): Promise<void>;
}
//# sourceMappingURL=authsocial.d.ts.map