const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
  console.log('Server is running');
});

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  // add other server routes to path array
  app.use(proxy(['/api' ], { target: 'http://localhost:3000' }));
}