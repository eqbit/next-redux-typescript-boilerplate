const nextRoutes = require('next-routes');

const routes = (module.exports = nextRoutes());

routes.add('home', '/');
routes.add('detail', '/detail');

export default routes;
