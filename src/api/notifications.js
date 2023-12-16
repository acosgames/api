const { Router } = require("express");


const PersonService = require('shared/services/person');
const { GeneralError } = require("shared/util/errorhandler");
const person = new PersonService();

module.exports = function routes(middleware) {

    let router = new Router();

    router.post('/notifications/subscribe', middleware, async (req, res, next) => {
        try {
            const subscription = req.body
            const user = req.user;

            if (!user) {
                throw new GeneralError('E_NOT_AUTHORIZED');
            }

            let shortid = user.shortid;
            //disable notifications
            if (!subscription) {
                let results = await person.updateUser({ shortid, webpush: null });
                res.status(200).json({ 'success': true })
            }

            console.log(subscription)

            let results = await person.updateUser({ shortid, webpush: JSON.stringify(subscription) });

            res.status(200).json({ 'success': true })
        }
        catch (e) {
            next(e);
        }

    });

    return router;
}

