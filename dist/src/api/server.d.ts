export default class ServerAPI {
    credentials: any;
    router: any;
    constructor(credentials?: any);
    routes(middleware?: any): any;
    apiFindServerByType(req: any, res: any, next: any): Promise<void>;
    apiServerRegister(req: any, res: any, next: any): Promise<void>;
}
//# sourceMappingURL=server.d.ts.map