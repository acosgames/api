export default class LeaderboardAPI {
    credentials: any;
    router: any;
    actionRouter: any;
    constructor(credentials?: any);
    routes(middleware: any): any;
    actionRoutes(middleware: any): any;
    apiFindLeaderboard(req: any, res: any, next: any): Promise<void>;
    apiFindGameRankNational(req: any, res: any, next: any): Promise<void>;
    apiFindGameRankDivision(req: any, res: any, next: any): Promise<void>;
    apiFindGameRankGlobal(req: any, res: any, next: any): Promise<void>;
    apiFindGameLeaderboardHighscore(req: any, res: any, next: any): Promise<void>;
}
//# sourceMappingURL=leaderboard.d.ts.map