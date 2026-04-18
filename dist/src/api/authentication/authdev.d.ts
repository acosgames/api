export default class DevAuth {
    credentials: any;
    constructor(credentials?: any);
    auth: (req: any, res: any, next: any) => Promise<void>;
    getDomain(): string;
}
//# sourceMappingURL=authdev.d.ts.map