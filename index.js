const express = require('express');
const cors = require('cors');
var http = require('http')
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const MemoryStore = require('memorystore')(session)
var FileStore = require('session-file-store')(session);
const profiler = require('fsg-shared/util/profiler')
const { GeneralError } = require('fsg-shared/util/errorhandler');

const credutil = require('fsg-shared/util/credentials');
const credentials = credutil();
const PORT = process.env.PORT || credentials.platform.api.port;
const path = require('path');

const app = express()
var httpServer = http.createServer(app);
var fileStoreOptions = {};

app.use((req, res, next) => {
    //console.log('test');  
    next();
})

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


const SocialAuth = require('./src/api/authentication/authsocial');
const PersonAPI = require('./src/api/person');
const DevGameAPI = require('./src/api/devgame');
const ServerAPI = require('./src/api/server');
const GameAPI = require('./src/api/game');

const social = new SocialAuth();
const person = new PersonAPI();
const devgame = new DevGameAPI();
const server = new ServerAPI();
const game = new GameAPI();

app.use('/assets', express.static(path.join(__dirname, 'public')));

app.use(social.routes());

const dir = `${__dirname}/public/`;
app.get('/iframe*', (req, res, next) => {
    res.sendFile(dir + 'iframe.html');
})

// const dir = `${__dirname}/public/`;
app.get('/bundle.js', (req, res, next) => {
    res.sendFile(dir + 'bundle.js');
})




app.use(devgame.bundleRoutes());
app.use(server.routes());
app.use(game.routes());

// const dir = `${__dirname}/public/`;
// app.use(social.auth());

let socialAuthentication = social.auth();

app.use(person.routes(socialAuthentication));
app.use(devgame.routes(socialAuthentication));
app.use(game.actionRoutes(socialAuthentication));

app.use('/*', (req, res, next) => {
    if (req.path.indexOf("/api/") > -1) {
        return next();
    }
    res.sendFile(dir + 'index.html');
})

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