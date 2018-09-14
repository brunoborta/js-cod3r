import * as restify from 'restify';

const server = restify.createServer( {
    name: 'meat-api',
    version: '1.0.0'
});

server.use(restify.plugins.queryParser());

server.get('/info', [
    (req, res, next) => {
        // Bloqueia qualquer requisição feita pelo IE 7
        if(req.userAgent() && req.userAgent().includes('MSIE 7.0')) {
            // res.status(400);
            // res.json({
            //     message: "Please, update your browser"
            // });
            let error: any = new Error();
            error.statusCode = 400;
            error.message = "Please, update your browser"
            return next(error);
        }
        return next();
    },
    (req, res, next) => {
        // res.contentType = 'application/json';
        // res.status(200);
        // res.setHeader('Content-Type', 'application/json');
        // res.send({
        //     message: 'Hello!'
        // })
        res.json({
            browser: req.userAgent(),
            method: req.method,
            url: req.href(),
            // url2: req.url,
            path: req.path(),
            query: req.query
        });
        return next();
    }
]);

server.listen(3000, () => {
    console.log('API is running on port 3000!');
})