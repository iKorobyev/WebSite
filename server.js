// const jsonServer = require('json-server')
// const auth = require('json-server-auth')
// const { createProxyMiddleware } = require('http-proxy-middleware')
//
// const app = jsonServer.create()
// const router = jsonServer.router('./db.json')
//
// const PORT = process.env.PORT || 3000;
//
// // /!\ Bind the router db to the app
// app.db = router.db
//
// // You must apply the auth middleware before the router
// app.use(auth)
// app.use(router)
// app.use('/api', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }))
//
// app.listen(PORT, () => {
//   console.log('Server is running');
// });

const jsonServer = require('json-server');
const auth = require('json-server-auth')
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const { createProxyMiddleware } = require('http-proxy-middleware')
const middlewares = jsonServer.defaults({
  static: './build',
});

const PORT = process.env.PORT || 3000;

server.db = router.db

server.use(middlewares);
server.use(auth);
server.use(router);
server.use('/', createProxyMiddleware({ target: `http://localhost:3000`, changeOrigin: true }))

server.listen(PORT, () => {
  console.log('Server is running');
});