const express = require('express');
const cors = require('cors');
var http = require('http')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const webpush = require('web-push')

// const MemoryStore = require('memorystore')(session)
// var FileStore = require('session-file-store')(session);
const profiler = require('shared/util/profiler')
const { GeneralError } = require('shared/util/errorhandler');


const { getVersion } = require('./src/api/version');

const clientVersion = getVersion() || 0;

const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV == 'production';

const credutil = require('shared/util/credentials');
const credentials = credutil();
const PORT = process.env.PORT || credentials.platform.api.port;
const path = require('path');

const app = express()
var httpServer = http.createServer(app);

const { renderHTML, renderSITEMAP, renderRobotsTxt } = require('./src/api/seo');
// var fileStoreOptions = {};


// app.use(cors({
//     origin: [
//         'http://localhost:3000', 'http://localhost:8080', 'http://localhost:8000', '*'
//     ],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type', 'Authorization', 'X-API-KEY'],
//     credentials: true
// }));

// app.use(session({
//     store: new FileStore(fileStoreOptions),
//     // store: new MemoryStore({
//     //     checkPeriod: 86400000 // prune expired entries every 24h
//     // }),
//     secret: 'alksdjflkasjdflkasjasdfasdfsa1234',
//     resave: false,
//     saveUninitialized: false,
//     cookie: { secure: false }
// }))
// app.use((req,res,next) => {
//     app.use((req,res,next) => {


// })

app.use(cookieParser('q*npasdfAm(7_A#"AvV', { 'httpOnly': true }));
app.use(express.json());

webpush.setVapidDetails(credentials.webpush.contact, credentials.webpush.publickey, credentials.webpush.privatekey)

if (isProduction) {
    app.use(async function (req, res, next) {
        try {
            res.setHeader('v', "" + clientVersion);
            res.setHeader('charset', 'utf-8')
        }
        catch (e) {
            console.error(e);
        }
        next();
    });
}
else {
    app.use(async function (req, res, next) {
        try {
            res.setHeader('charset', 'utf-8')
        }
        catch (e) {
            console.error(e);
        }
        next();
    });
}


const SocialAuth = require('./src/api/authentication/authsocial');
const PersonAPI = require('./src/api/person');
const DevGameAPI = require('./src/api/devgame');
const ServerAPI = require('./src/api/server');
const GameAPI = require('./src/api/game');
const NotificationsAPI = require('./src/api/notifications');

const social = new SocialAuth();
const person = new PersonAPI();
const devgame = new DevGameAPI();
const server = new ServerAPI();
const game = new GameAPI();

app.get('/version', async (req, res, next) => {
    try {
        res.send("" + clientVersion);
        return;
    }
    catch (e) {
        console.error(e);
    }
    res.send(0);
})


app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use('/.well-known', express.static(path.join(__dirname, 'public/.well-known'), { dotfiles: 'allow' }));


app.use(social.routes());

const dir = `${__dirname}/public/`;

if (isProduction) {
    app.get('/iframe*', (req, res, next) => {
        res.sendFile(dir + 'iframe.html');
    })

    app.get(`/custom-sw.${clientVersion}.js*`, (req, res, next) => {
        res.setHeader('Content-Encoding', 'gzip')
        res.setHeader('Content-Type', 'application/javascript')
        res.sendFile(dir + `custom-sw.${clientVersion}.js`);
    })
}
else {
    app.get('/iframe*', (req, res, next) => {
        res.sendFile(dir + 'iframe-localhost.html');
    })

    app.get('/custom-sw.js*', (req, res, next) => {
        res.sendFile(dir + 'custom-sw.js');
    })
}

// const dir = `${__dirname}/public/`;
app.get('/bundle.js', (req, res, next) => {
    res.sendFile(dir + 'bundle.js');
})

app.get('/favicon.ico', (req, res, next) => {
    res.sendFile(dir + 'favicon.ico');
})

app.get('/acos-logo.png', (req, res, next) => {
    res.sendFile(dir + '/acos-logo.png');
})




app.use(devgame.bundleRoutes());
app.use(server.routes());
app.use(game.routes());
app.use(person.routesPublic());

// const dir = `${__dirname}/public/`;
// app.use(social.auth());

let socialAuthentication = social.auth();


app.use(NotificationsAPI(socialAuthentication));
app.use(person.routes(socialAuthentication));
app.use(devgame.routes(socialAuthentication));
app.use(game.actionRoutes(socialAuthentication));

app.use('/sitemap.txt', (req, res, next) => {
    renderSITEMAP(req, res);
})

app.use('/robots.txt', (req, res, next) => {
    renderRobotsTxt(req, res);
})

if (isProduction) {
    app.use('/*', (req, res, next) => {
        if (req.path.indexOf("/api/") > -1)
            return next();
        // res.setHeader('Content-Encoding', 'gzip')
        res.setHeader('Content-Type', 'text/html')
        // res.sendFile(dir + 'index.html');
        renderHTML(req, res);
    })
}
else {
    app.use('/*', (req, res, next) => {
        if (req.path.indexOf("/api/") > -1)
            return next();
        // renderHTML(req, res);
        res.sendFile(dir + 'index-localhost.html');
    })
}




app.use((err, req, res, next) => {
    console.log(err);
    if (err instanceof GeneralError) {
        err.send(res);
        return;
    }
    res.status(400).json({ ecode: 'E_INVALID_API' });
})

app.use((req, res, next) => {
    res.status(400).json({ ecode: 'E_INVALID_API' });
})

httpServer.listen(PORT, function () {
    var host = httpServer.address().address
    var port = httpServer.address().port
    console.log('App listening at http://%s:%s', host, port)
});


process.on('SIGINT', function () {
    console.log('SIGINT');
    process.exit();
});