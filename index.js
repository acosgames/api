const express = require('express');
const cors = require('cors');
var http = require('http')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MemoryStore = require('memorystore')(session)
const profiler = require('forkoff-shared/util/Profiler')

var port = process.env.PORT || 8080;

const app = express()
var httpServer = http.createServer(app);

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
    store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
    }),
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

const social = new SocialAuth();
const person = new PersonAPI();


app.use(social.routes());
app.use(social.auth());

app.use(person.routes());


httpServer.listen(process.env.PORT || port, function () {
    var host = httpServer.address().address
    var port = httpServer.address().port
    console.log('App listening at http://%s:%s', host, port)
});