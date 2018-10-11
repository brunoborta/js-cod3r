import * as restify from 'restify';
import { environment } from '../common/environment';
import * as mongoose from 'mongoose';
import {Router} from '../common/router';
import {mergePatchBodyParser} from './merge-patch.parser'

export class Server {

    application: restify.Server

    initializeDb(): Promise<any> {
        // (<any>mongoose).Promise = global.Promise;
        // This line was added to avoid a deprecation warning in the console regarding collection.ensureIndex
        mongoose.set('useCreateIndex', true);
        return mongoose.connect(environment.db.url, {
            useNewUrlParser: true
        });
    }

    initRoutes(routers: Router[] = []): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer( {
                    name: 'meat-api',
                    version: '1.0.0'
                });

                this.application.use(restify.plugins.queryParser());

                // So we can send all the request body to the class on POSTs
                this.application.use(restify.plugins.bodyParser());
                this.application.use(mergePatchBodyParser);

                /**
                 * Routes
                 */
                for(let router of routers) {
                    router.applyRoutes(this.application);
                }

                this.application.listen(environment.server.port, () => {
                    resolve(this.application);
                })

            } catch(error) {
                reject(error);
            }
        });
    }

    bootstrap(routers: Router[] = []): Promise<Server> {
        return this.initializeDb().then(() => 
               this.initRoutes(routers).then(() => this)) ;
    }
}