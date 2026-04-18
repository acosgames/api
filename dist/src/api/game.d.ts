export default class GameAPI {
    credentials: any;
    router: any;
    actionRouter: any;
    constructor(credentials?: any);
    routes(middleware: any): any;
    actionRoutes(middleware: any): any;
    apiFindGamePerson(req: any, res: any, next: any): Promise<void>;
    apiClaimAchievement(req: any, res: any, next: any): Promise<void>;
    apiReportGame(req: any, res: any, next: any): Promise<void>;
    apiRateGame(req: any, res: any, next: any): Promise<void>;
    apiFindGames(req: any, res: any, next: any): Promise<void>;
    apiFindGameReplays(req: any, res: any, next: any): Promise<void>;
    apiFindGame(req: any, res: any, next: any): Promise<void>;
}
//# sourceMappingURL=game.d.ts.map