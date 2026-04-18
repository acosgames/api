export default class PersonAPI {
    credentials: any;
    routerPublic: any;
    router: any;
    constructor(credentials?: any);
    routesPublic(): any;
    routes(middleware: any): any;
    apiGetCountry(req: any, res: any, next: any): Promise<void>;
    apiGetPlayer(req: any, res: any, next: any): Promise<void>;
    apiGetProfile(req: any, res: any, next: any): Promise<void>;
    apiCreateDisplayname(req: any, res: any, next: any): Promise<void>;
}
//# sourceMappingURL=person.d.ts.map