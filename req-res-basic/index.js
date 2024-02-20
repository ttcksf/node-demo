const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // http://localhost:3000/　にアクセスすると表示される
  console.log(req);
  // スラッグを変えたら変わる
  console.log(req.url);
  console.log(req.method);
  // レスポンスを送信すると初めてブラウザの画面表示が決まる
  // res.setHeader('Content-Type', 'text/plain');
  // res.write('test');
  // コンソールのネットワークでリロードするとlocalhost→ヘッダーをクリックすると確認できる

  // HTMLを表示する
  // res.setHeader('Content-Type', 'text/html');
  // res.write('<h1>test</h1>');
  // res.end();

  // fsをインポートして表示する(CSSが使えるようになる)
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
      // これでもOK
      // res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('ポート3000！');
});
