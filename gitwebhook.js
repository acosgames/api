var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/webhook', secret: 'XyNmjfdmVpNw7RRt' })
var port = process.env.PORT || 9000;

http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 404
        res.end('no such location')
    })
}).listen(port)

handler.on('error', function (err) {
    console.error('Error:', err.message)
})

handler.on('push', function (event) {
    console.log('Received a push event for %s to %s',
        event.payload.repository.name,
        event.payload.ref)
})

handler.on('issues', function (event) {
    console.log('Received an issue event for %s action=%s: #%d %s',
        event.payload.repository.name,
        event.payload.action,
        event.payload.issue.number,
        event.payload.issue.title)
})

handler.on('organization', function (event) {
    console.log('Received an organization event', event.payload);
})

handler.on('team', function (event) {
    console.log('Received an team event', event.payload);
})

handler.on('team_add', function (event) {
    console.log('Received an team_add event', event.payload);
})


handler.on('push', function (event) {
    console.log('Received an push event', event.payload);
})


handler.on('member', function (event) {
    console.log('Received an member event', event.payload);
})

handler.on('membership', function (event) {
    console.log('Received an membership event', event.payload);
})