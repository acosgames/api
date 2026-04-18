declare function S3UploadGameBundles(req: any, res: any, cb: any): Promise<unknown>;
declare function uploadByStreamGzip(Bucket: any, Key: any, data: any): Promise<unknown>;
declare function deletePreviews(game: any): Promise<any[]>;
declare function S3UploadGameImage(req: any, res: any, cb: any): Promise<unknown>;
export { S3UploadGameBundles, S3UploadGameImage, deletePreviews, uploadByStreamGzip, };
//# sourceMappingURL=ACOSStorage.d.ts.map