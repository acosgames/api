const express = require('express');
const cors = require('cors');
var http = require('http')
const cookieParser = require('cookie-parser');
const session = require('express-session');
// const MemoryStore = require('memorystore')(session)
var FileStore = require('session-file-store')(session);
const profiler = require('fsg-shared/util/Profiler')
const { GeneralError } = require('fsg-shared/util/errorhandler');



var port = process.env.PORT || 8080;

const app = express()
var httpServer = http.createServer(app);
var fileStoreOptions = {};

app.use((req, res, next) => {
    console.log('test');
    next();
})

app.use(cors({
    origin: [
        'http://localhost:3000', 'http://localhost:8080', 'http://localhost:8000', '*'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-API-KEY'],
    credentials: true
}));

app.use(session({
    store: new FileStore(fileStoreOptions),
    // store: new MemoryStore({
    //     checkPeriod: 86400000 // prune expired entries every 24h
    // }),
    secret: 'alksdjflkasjdflkasjasdfasdfsa1234',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))
// app.use((req,res,next) => {
//     app.use((req,res,next) => {


// })

app.use(cookieParser());
app.use(express.json());

const SocialAuth = require('./src/api/authentication/socialauth');
const PersonAPI = require('./src/api/person');
const DevGameAPI = require('./src/api/devgame');
const social = new SocialAuth();
const person = new PersonAPI();
const devgame = new DevGameAPI();

app.use(social.routes());
app.use(social.auth());

app.use(person.routes());
app.use(devgame.routes());
const dir = `${__dirname}/public/`;
app.get('/iframe', (req, res, next) => {
    res.sendFile(dir + 'iframe.html');
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

httpServer.listen(process.env.PORT || port, function () {
    var host = httpServer.address().address
    var port = httpServer.address().port
    console.log('App listening at http://%s:%s', host, port)
});