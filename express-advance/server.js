// npm i express
// npm i nodemon
const express = require('express');
const nodemon = require('nodemon');

const app = express();

app.listen(3000);

app.get('/', (req, res) => {
  // res.send('<p>hello</p>');
  res.sendFile('./views/index.html', {
    root: __dirname,
  });
});
// nodemon server

app.get('/about', (req, res) => {
  // res.send('<p>about</p>');
  res.sendFile('./views/about.html', {
    // 現在のディレクトリを基準として相対パスであると指定（デフォルトはルートを起点にしてしまうため）
    root: __dirname,
  });
});

// リダイレクトの設定
app.get('/aboutt', (req, res) => {
  // ロケーションとステータスコードは自動で設定される
  res.redirect('/about');
});

// 404の設定（上から下に向かって一致しなかった全てパスが対象なので上部分に書いてしますと正しいアクセスも404に流れてしまう）
app.use((req, res) => {
  res.sendFile('./views/404.html', {
    root: __dirname,
  });
});
