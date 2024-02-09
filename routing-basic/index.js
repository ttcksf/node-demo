const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  let path;

  switch (req.url) {
    case '/':
      path = './views/index.html';
      // ステータスコードを割り当て
      res.statusCode = 200;
      break;
    case '/about':
      path = './views/about.html';
      // ステータスコードを割り当て
      res.statusCode = 200;
      break;
    // リダイレクトさせたいページ
    case '/about1':
      // 別のcaseを設定する
      res.setHeader('Location', '/about');
      // ステータスコードをリダイレクトに割り当て
      res.statusCode = 301;
      res.end();
      break;
    default:
      path = './views/404.html';
      // ステータスコードを割り当て(404ページでも200になってしまうため)
      res.statusCode = 404;
      break;
  }

  // fs.readFile('./views/index.html', (err, data) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('ポート3000！');
});
