// npm i express
// npm i nodemon
const express = require('express');
const nodemon = require('nodemon');

const app = express();
// const http = require("http");
// const app = http.createServer()

// localhost:3000でリクエストを待つ
app.listen(3000);
// app.listen(3000, 'localhost', () => {
//   console.log('3000');
// });

// listenしたいパス、リクエストとレスポンスを受けて処理
app.get('/', (req, res) => {
  // リロードした時のネットワークタブのレスポンス
  // 自動で予測してヘッダーとステータスコードを設定してくれる
  res.send('<p>hello</p>');
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 200;
});
// nodemon server

app.get('/about', (req, res) => {
  res.send('<p>about</p>');
});
