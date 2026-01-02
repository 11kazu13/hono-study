const { Hono } = require('hono');
const { serve } = require('@hono/node-server');
const { logger } = require('hono/logger');
const { html } = require('hono/html');

const app = new Hono();
app.use(logger());

app.get('/', (c) => {
  const name = c.req.query('name') ?? 'ゲスト';
  return c.html(`
    <!doctype html>
    <html>
      <head>
        <title>Home</title>
      </head>
      <body>
        <h1>Hello Hono!</h1>
        <p>${name}さん、ようこそ。</p>
        <p>これはHonoのサンプルアプリケーションです。</p>
      </body>
    </html>
    `);
});

const port = 3000;
console.log(`サーバーを${port}番ポートで起動中！`);

serve({
  fetch: app.fetch,
  port,
});
