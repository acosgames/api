const express = require('express');
const cors = require('cors');
const app = express()
var http = require('http').createServer(app);
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MemoryStore = require('memorystore')(session)

const profiler = require('forkoff-shared/util/Profiler')
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




http.listen(process.env.PORT || port, function () {
    var host = http.address().address
    var port = http.address().port
    console.log('App listening at http://%s:%s', host, port)
});