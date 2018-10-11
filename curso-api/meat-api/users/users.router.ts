import {Router} from '../common/router';
import * as restify from 'restify';
import {User} from './users.model'

class UsersRouter extends Router {

    constructor() {
        super();

        // Captures the beforeRender event of the Router
        this.on('beforeRender', document => {
            document.password = undefined; // Not the best practice, but works
        })
    }

    applyRoutes(application: restify.Server) {
        application.get('/users', (req, res, next) => {
            // User.find().then(users => {
            //     res.json(users);
            //     return next();
            // })

            User.find().then(this.render(res,next));
        });

        application.get('/users/:id', (req, res, next) => {
            User.findById(req.params.id)
                .then(this.render(res,next));
        });

        application.post('/users', (req, res, next) => {
            // New Document
            let user = new User(req.body);
            // Useless because the body has all the necessary attributes
            // user.name = req.body.name;
            // user.email = req.body.email;

            // After save, write an answer (modified by the router method)
            user.save().then(this.render(res,next));
            return next();
        });

        // PUT change all the document, not partially
        application.put('/users/:id', (req, res, next) => {
            const options = {overwrite: true};
            User.update({_id: req.params.id}, req.body, options)
                .exec()
                .then(result => {
                    if(!!result.n) {
                        return User.findById(req.params.id);
                    } else {
                        res.send(404);
                    }
                })
                .then(this.render(res,next));
        });

        // Content-type: application/merge-patch+json is required to this method
        application.patch('/users/:id', (req, res, next) => {
            const options = {new: true};
            User.findByIdAndUpdate(req.params.id, req.body, options)
            .then(this.render(res,next));
        });

        application.del('/users/:id', (req, res, next) => {
            User.deleteOne({_id: req.params.id}).exec().then((commandResult: any) => {
                if(!!commandResult.n) {
                    res.send(204);
                } else {
                    res.send(404);
                }
                return next();
            });
        });
    }
}

export const usersRouter = new UsersRouter();