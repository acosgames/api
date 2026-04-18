import { Router } from "express";
import person from 'shared/services/person.js';
import { GeneralError } from 'shared/util/errorhandler.js';
// const person = new PersonService();
export default function routes(middleware) {
    let router = new Router();
    router.post("/notifications/subscribe", middleware, async (req, res, next) => {
        try {
            const subscription = req.body;
            const user = req.user;
            if (!user) {
                throw new GeneralError("E_NOT_AUTHORIZED");
            }
            let shortid = user.shortid;
            //disable notifications
            if (!subscription) {
                let results = await person.updateUser({
                    shortid,
                    webpush: null,
                });
                res.status(200).json({ success: true });
                return;
            }
            console.log(subscription);
            let results = await person.updateUser({
                shortid,
                webpush: JSON.stringify(subscription),
            });
            res.status(200).json({ success: true });
        }
        catch (e) {
            next(e);
        }
    });
    return router;
}
;
//# sourceMappingURL=notifications.js.map