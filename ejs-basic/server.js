// npm i express
// npm i nodemon
// npm i ejs
const express = require('express');
const nodemon = require('nodemon');

const app = express();

// テンプレートエンジンでコンテンツを動的にする
// viewsフォルダにejsファイルを入れることになっている
app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
  // res.sendFile('./views/index.html', {
  //   root: __dirname,
  // });

  // パスや拡張子がなくても名前だけでexpressがviewsフォルダの中を探して返す
  res.render('index');
});
// nodemon server

app.get('/about', (req, res) => {
  // res.sendFile('./views/about.html', {
  //   root: __dirname,
  // });
  res.render('about');
});

app.get('/blogs/create', (req, res) => {
  res.render('create');
});

app.use((req, res) => {
  // res.sendFile('./views/404.html', {
  //   root: __dirname,
  // });
  res.status(404).render('404');
});
