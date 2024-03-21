const express = require('express');
const nodemon = require('nodemon');
const morgan = require('morgan');

const app = express();

// ユーザーの動作をログに残すミドルウェアのライブラリ
app.use(morgan('dev'));

// 静的ファイル(CSS、画像、動画)を読み込むExpressのミドルウェア
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', {
    root: __dirname,
  });
});

// useメソッドでミドルウェアを作る
// app.use((req, res) => {
//   console.log('ミドルウェアです');
// });

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', {
    root: __dirname,
  });
});

app.use((req, res) => {
  res.sendFile('./views/404.html', {
    root: __dirname,
  });
});

app.listen(3000);
