import Koa, { Context } from 'koa';
import Router from 'koa-router';
import next from 'next';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  console.log('Hello');
  const server = new Koa();
  const router = new Router();

  router.get('/a', async (ctx: Context) => {
    await app.render(ctx.req, ctx.res, '/a', ctx.query);
  });
  router.all('*', async (ctx: Context) => {
    await handle(ctx.req, ctx.res);
  });
  server.use(async (ctx: Context, next) => {
    ctx.res.statusCode = 200;
    await next();
  });
  server.use(router.routes());
  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
