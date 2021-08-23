const credutil = require('fsg-shared/util/credentials');
const { Router } = require('express');

const ServerRemoteService = require('fsg-shared/services/instanceremote');
const remote = new ServerRemoteService();


module.exports = class ServerAPI {
    constructor(credentials) {
        this.credentials = credentials || credutil();

        this.router = new Router();
    }


    routes() {
        this.router.post('/api/v1/server/register', this.apiServerRegister);
        this.router.get('/api/v1/server/:zone/:type', this.apiFindServerByType);

        return this.router;
    }

    async apiFindServerByType(req, res, next) {
        let params = null;
        try {

            let apikey = req.header('X-PLATFORM-API-KEY');
            if (!apikey) {
                res.json({ ecode: 'E_NOTAUTHORIZED' });
                return;
            }

            let zone = req.params.zone || 0;
            let type = req.params.type;
            if (!type) {
                throw new GeneralError("E_INVALID_SERVERTYPE");
            }

            let servers = await remote.findServersByType(zone, type);
            if (!servers) {
                throw new GeneralError('E_SERVER_INVALID');
            }
            res.json(servers);
            return;
        }
        catch (e) {
            next(e);
        }
    }

    async apiServerRegister(req, res, next) {
        let params = null;
        try {
            let apikey = req.header('X-PLATFORM-API-KEY');
            if (!apikey) {
                res.json({ ecode: 'E_NOTAUTHORIZED' });
                return;
            }

            params = req.body;

            //build the public ip address with port
            var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

            if (ip.indexOf("::ffff:") > -1) {
                ip = ip.split('::ffff:').pop();
            }
            let port = params.public_addr;
            if ((typeof port == 'string') && port.indexOf(":") > -1) {
                port = port.split(':').pop();
            }
            params.public_addr = ip + ':' + port;

            let server = await remote.register(params);
            if (!server) {
                throw new GeneralError('E_SERVER_INVALID');
            }
            res.json(server);
            return;
        }
        catch (e) {
            next(e);
        }
    }

}