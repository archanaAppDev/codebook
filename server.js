const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data/db.json'));

server.db = router.db;

const routes = jsonServer.rewriter(require('./data/routes.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(routes);
server.use(auth);
server.use(router);

const port = 8000;
server.listen(port, () => {
    console.log(`JSON Server with authentication is running on port ${port}`);
});