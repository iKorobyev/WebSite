const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

const PORT = process.env.PORT || 3000;

// /!\ Bind the router db to the app
app.db = router.db

// You must apply the auth middleware before the router
app.use(auth)
app.use(router)

app.listen(PORT, () => {
  console.log('Server is running');
});

const proxy = require('http-proxy-middleware')

module.exports = function(app) {
  // add other server routes to path array
  app.use(proxy(['/api' ], { target: 'http://localhost:3000' }));
}