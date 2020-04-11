import next from 'next';
import express from 'express';
import path from 'path';
import routes from './routes';
import devProxy from './proxy';

const port = parseInt(process.env.PORT || '8080', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  app.setAssetPrefix(process.env.STATIC_PATH);
  server.use(express.static(path.join(__dirname, '../static')));

  console.log(process.env.PROXY_MODE);

  if (process.env.PROXY_MODE === 'local') {
    // eslint-disable-next-line global-require
    const proxyMiddleware = require('http-proxy-middleware');
    Object.keys(devProxy).forEach((context) => {
      server.use(proxyMiddleware(context, devProxy[context]));
    });
  }

  server.get('*', (req, res) => handler(req, res));

  server.listen(port);

  console.log(
    `> Server listening at ${
      process.env.NODE_ENV === 'production'
        ? 'http://95.163.91.239:'
        : 'http://localhost:'
    }${port} as ${
      dev ? 'development' : process.env.NODE_ENV
    }`
  );
});
