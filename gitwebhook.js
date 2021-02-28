var http = require('http')
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/webhook', secret: 'XyNmjfdmVpNw7RRt' })
const SmeeClient = require('smee-client')

const PersonService = require('forkoff-shared/services/person');
const person = new PersonService();
const gh = require('forkoff-shared/services/github');
var port = process.env.PORT || 9000;
const FSG = process.env.FSG;


if (FSG != 'prod' && FSG != 'production') {

    const smee = new SmeeClient({
        source: 'https://smee.io/8QuTFTiTnF8fmjYw',
        target: 'http://localhost:9000/webhook',
        logger: console
    })

    const events = smee.start()

    // // Stop forwarding events
    // events.close()
}
//https://github.com/orgs/fivesecondgames/invitation

http.createServer(function (req, res) {
    handler(req, res, function (err) {
        res.statusCode = 404
        //res.end('no such location')
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

handler.on('organization', async function (event) {
    console.log('Received an organization event', event.payload);


    switch (event.payload.action) {
        case 'member_added': {


            try {
                let user = { github_id: event.payload.membership.user.id };
                let existing = await person.findUser(user);
                if (existing) {

                    user = { id: existing.id, isdev: 1 };
                    let updateResult = await person.updateUser(user);
                    console.log(updateResult);
                    let teamResult = await person.createGithubUserTeam(user);
                    console.log(teamResult);
                }
            }
            catch (e) {
                console.error(e);
            }
            break;
        }
        case 'member_removed': {
            try {
                let user = { github_id: event.payload.membership.user.id };
                let existing = await person.findUser(user);
                if (existing) {

                    user = { id: existing.id, isdev: 0 };
                    let result = await person.updateUser(user);
                }
            }
            catch (e) {
                console.error(e);
            }
            break;
        }
    }
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