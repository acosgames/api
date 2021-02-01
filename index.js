const express = require('express');
const cors = require('cors');
const app = express()
var http = require('http').createServer(app);
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MemoryStore = require('memorystore')(session)

const profiler = require('../forkoff-shared/util/Profiler')
var port = process.env.PORT || 8080;

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
    secret: 'MYSECRETKEYHAHAHAH',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(cookieParser());
app.use(express.json());

// // initialises the Issuer and the Client
// app.use(auth.initialize);
// // Deals with the user session
// app.use(auth.session);
// // Adds the OAuth / OpenId necessary routes.
// app.use(auth.routes());

const MySQL = require('forkoff-shared/services/mysql.js');
const mysql = new MySQL();

const SocialAuth = require('./src/api/authentication/socialauth');
const social = new SocialAuth();

app.use(social.routes());
app.get("/", async (req, res) => {

    let response = {};
    try {
        let db = await mysql.begin('get all peeps');
        response = await db.sql('SELECT * FROM person');
        mysql.end('get all peeps');

        let db2 = await mysql.db();
        response = await db2.sql('SELECT * FROM person');
    }
    catch (e) {
        console.error(e);
    }

    // use the pre configured view engine
    // to render the index.mustache file
    res.json(response);
});

// app.get("/private", auth.requireAuth, (req, res) => {
//     // This is the main high level hook for the user
//     // session, we will be building this later
//     if (!req.session || !req.session.tokenSet) {

//         return
//     }
//     const claims = req.session.tokenSet.claims();

//     // render private.mustache and interpolate
//     // the following data
//     res.render("private", {
//         email: claims.email,
//         picture: claims.picture,
//         name: claims.name,
//     });
// });

http.listen(process.env.PORT || port, function () {
    var host = http.address().address
    var port = http.address().port
    console.log('App listening at http://%s:%s', host, port)
});