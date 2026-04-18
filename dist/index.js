import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import webpush from "web-push";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { GeneralError } from 'shared/util/errorhandler.js';
import { getVersion } from "./src/api/version.js";
const clientVersion = getVersion() || 0;
const NODE_ENV = process.env.NODE_ENV;
const isProduction = NODE_ENV == "production";
import credutil from 'shared/util/credentials.js';
const credentials = credutil();
const PORT = process.env.PORT || credentials.platform.api.port;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
var httpServer = http.createServer(app);
import { renderHTML, renderSITEMAP, renderRobotsTxt } from "./src/api/seo.js";
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
// const webpack = require('webpack');
// const webpackConfig = require('./webpack/dev.config');
// const compiler = webpack(webpackConfig);
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require("webpack-hot-middleware");
// const webpackPublicPath = path.resolve(process.cwd(), 'public/');
// console.log("webpackPublicPath", webpackPublicPath);
// app.use(webpackDevMiddleware(compiler, {
//     publicPath: '/public',
//     writeToDisk: false,
//     stats: { colors: true }
// }));
// app.use(webpackHotMiddleware(compiler));
app.use(cookieParser('q*npasdfAm(7_A#"AvV', { httpOnly: true }));
app.use(express.json());
webpush.setVapidDetails(credentials.webpush.contact, credentials.webpush.publickey, credentials.webpush.privatekey);
if (isProduction) {
    app.use(async function (req, res, next) {
        try {
            res.setHeader("v", "" + clientVersion);
            res.setHeader("charset", "utf-8");
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
            res.setHeader("charset", "utf-8");
        }
        catch (e) {
            console.error(e);
        }
        next();
    });
}
import SocialAuth from "./src/api/authentication/authsocial.js";
import PersonAPI from "./src/api/person.js";
import DevGameAPI from "./src/api/devgame.js";
import ServerAPI from "./src/api/server.js";
import GameAPI from "./src/api/game.js";
import NotificationsAPI from "./src/api/notifications.js";
import LeaderboardAPI from "./src/api/leaderboard.js";
const social = new SocialAuth();
const person = new PersonAPI();
const devgame = new DevGameAPI();
const server = new ServerAPI();
const game = new GameAPI();
const leaderboard = new LeaderboardAPI();
app.get("/version", async (req, res, next) => {
    try {
        res.send("" + clientVersion);
        return;
    }
    catch (e) {
        console.error(e);
    }
    res.send(0);
});
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/assets", express.static(path.join(__dirname, "public")));
app.use("/privacypolicy", express.static(path.join(__dirname, "public/privacypolicy.html")));
app.use("/.well-known", express.static(path.join(__dirname, "public/.well-known"), {
    dotfiles: "allow",
}));
//VITE - manifest, css, jsx files
const distFiles = path.join(__dirname, "./public");
app.use("/manifest.json", (req, res) => {
    res.sendFile(path.join(distFiles, ".vite/manifest.json"));
});
app.use(social.routes());
const dir = path.join(__dirname, "../public/");
if (isProduction) {
    app.get("/iframe*", (req, res, next) => {
        res.sendFile(path.join(dir, "iframe.html"));
    });
    app.get(`/custom-sw.js*`, (req, res, next) => {
        res.setHeader("Content-Encoding", "gzip");
        res.setHeader("Content-Type", "application/javascript");
        res.sendFile(path.join(dir, `custom-sw.${clientVersion}.js`));
    });
    if (process.env.DEBUG) {
        const manifestPath = path.join(distFiles, ".vite/manifest.json");
        const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
        let manifestCSS = manifest["index.html"].css;
        let cssLinks = manifestCSS.map((css) => `<link rel="stylesheet" href="/${css}" />`);
        let cssLinksString = cssLinks.join("\n");
        let mainJSFile = '/' + manifest["index.html"].file;
        for (var css of manifestCSS) {
            app.get(`/${css}`, (req, res, next) => {
                res.setHeader("Content-Type", "text/css");
                res.sendFile(path.join(dir, css));
            });
        }
        app.get(mainJSFile, (req, res, next) => {
            res.setHeader("Content-Type", "application/javascript");
            res.sendFile(path.join(dir, manifest["index.html"].file));
        });
    }
    // app.get(`/custom-sw.${clientVersion}.js*`, (req, res, next) => {
    //     res.setHeader('Content-Encoding', 'gzip')
    //     res.setHeader('Content-Type', 'application/javascript')
    //     res.sendFile(dir + `custom-sw.${clientVersion}.js`);
    // })
}
else {
    app.get("/iframe*", (req, res, next) => {
        res.sendFile(path.join(dir, "iframe.html"));
    });
    app.get("/custom-sw.js*", (req, res, next) => {
        res.sendFile(path.join(dir, "custom-sw.js"));
    });
}
// const dir = `${__dirname}/public/`;
// app.get('/bundle.js', (req, res, next) => {
//     res.sendFile(dir + 'bundle.js');
// })
// app.get('/main.js', (req, res, next) => {
//     res.sendFile(dir + 'main.js');
// })
// app.get('/client.js', (req, res, next) => {
//     res.sendFile(dir + 'client.js');
// })
// app.get('/hot.js', (req, res, next) => {
//     res.sendFile(dir + 'hot.js');
// })
app.get("/favicon.ico", (req, res, next) => {
    res.sendFile(path.join(dir, "favicon.ico"));
});
app.get("/stats.html", (req, res, next) => {
    res.sendFile(path.join(dir, "stats.html"));
});
app.get("/play-favicon.ico", (req, res, next) => {
    res.sendFile(path.join(dir, "play-favicon.ico"));
});
app.get("/acos-logo.png", (req, res, next) => {
    res.sendFile(path.join(dir, "acos-logo.png"));
});
app.get("/acos-logo-large.png", (req, res, next) => {
    res.sendFile(path.join(dir, "acos-logo-large.png"));
});
app.get("/acos-logo-combined.png", (req, res, next) => {
    res.sendFile(path.join(dir, "acos-logo-combined.png"));
});
app.get("/acos-logo-2025.webp", (req, res, next) => {
    res.sendFile(path.join(dir, "acos-logo-2025.webp"));
});
let socialAuthenticationIfAvailable = social.authIfAvailable();
app.use(devgame.bundleRoutes());
app.use(server.routes());
app.use(game.routes(socialAuthenticationIfAvailable));
app.use(leaderboard.routes(socialAuthenticationIfAvailable));
app.use(person.routesPublic());
// const dir = `${__dirname}/public/`;
// app.use(social.auth());
let socialAuthentication = social.auth();
app.use(NotificationsAPI(socialAuthentication));
app.use(person.routes(socialAuthentication));
app.use(devgame.routes(socialAuthentication));
app.use(game.actionRoutes(socialAuthentication));
app.use(leaderboard.actionRoutes(socialAuthentication));
app.use("/sitemap.txt", (req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    renderSITEMAP(req, res);
});
app.use("./well-known//microsoft-identity-association.json", (req, res, next) => {
    res.json({
        associatedApplications: [
            {
                applicationId: "dc1dc7b1-7e6d-4b1b-8325-c69f153dc45d",
            },
        ],
    });
});
app.use("/robots.txt", (req, res, next) => {
    res.setHeader("Content-Type", "text/plain");
    renderRobotsTxt(req, res);
});
if (isProduction) {
    app.use("/*", (req, res, next) => {
        if (req.path.indexOf("/api/") > -1)
            return next();
        // res.setHeader('Content-Encoding', 'gzip')
        res.setHeader("Content-Type", "text/html");
        // res.sendFile(dir + 'index.html');
        renderHTML(req, res);
    });
}
else {
    app.use("/*", (req, res, next) => {
        if (req.path.indexOf("/api/") > -1)
            return next();
        // renderHTML(req, res);
        try {
            res.sendFile(path.join(dir, "index-localhost.html"));
        }
        catch (e) {
            console.error(e);
        }
    });
}
app.use((err, req, res, next) => {
    console.log(err);
    if (err instanceof GeneralError) {
        err.send(res);
        return;
    }
    res.status(400).json({ ecode: "E_INVALID_API" });
});
app.use((req, res, next) => {
    res.status(400).json({ ecode: "E_INVALID_API" });
});
httpServer.listen(PORT, function () {
    let address = httpServer.address();
    var host = address.address;
    var port = address.port;
    console.log("App listening at http://%s:%s", host, port);
});
process.on("SIGINT", function () {
    console.log("SIGINT");
    process.exit();
});
//# sourceMappingURL=index.js.map