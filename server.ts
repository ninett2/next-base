// import Koa, { Context } from 'koa';
// import Router from 'koa-router';
import express from 'express';
import next from 'next';
import nextI18NextMiddleware from 'next-i18next/middleware';
import nextI18next from './src/commons/i18n';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  console.log('Hello');
  // const server = new Koa();
  // const router = new Router();
  const server = express();
  server.use(nextI18NextMiddleware(nextI18next));

  // server.get('/a', (req, res) => {
  //   return app.render(req, res, '/a', req.query);
  // });
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
