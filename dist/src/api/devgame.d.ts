export default class DevGameAPI {
    credentials: any;
    router: any;
    bundleRouter: any;
    constructor(credentials?: any);
    bundleRoutes(): any;
    routes(middleware: any): any;
    apiInviteGithub(req: any, res: any, next: any): Promise<void>;
    apiDevDeleteGame(req: any, res: any, next: any): Promise<void>;
    apiDevUpdateGameBundle(req: any, res: any, next: any): Promise<void>;
    validateSettings(s: any): boolean;
    createOrUpdateGameVersion(apikey: any, hasDB: any, hasCSS: any, screentype: any, resow: any, resoh: any, screenwidth: any): Promise<GameVersion>;
    apiDevGameTemplates(req: any, res: any, next: any): Promise<void>;
    apiDevGames(req: any, res: any, next: any): Promise<void>;
    apiDevFindGame(req: any, res: any, next: any): Promise<void>;
    apiDevUpdateGameAPIKey(req: any, res: any, next: any): Promise<void>;
    apiDevCreateOrUpdateAchievement(req: any, res: any, next: any): Promise<void>;
    apiDevUpdateGame(req: any, res: any, next: any): Promise<void>;
    cbImageMeta(req: any, file: any, cb: any): void;
    cbImageKeyOverride: (hash: any) => (req: any, file: any, cb: any) => void;
    apiDevUpdateGameImages(req: any, res: any, next: any): Promise<void>;
    apiDevCreateGame(req: any, res: any, next: any): Promise<void>;
    apiDevDeployGame(req: any, res: any, next: any): Promise<void>;
}
//# sourceMappingURL=devgame.d.ts.map