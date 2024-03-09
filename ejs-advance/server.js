// npm i express
// npm i nodemon
// npm i ejs
const express = require('express');
const nodemon = require('nodemon');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
  const blogs = [
    { title: 'title1', content: 'content1' },
    { title: 'title2', content: 'content2' },
    { title: 'title3', content: 'content3' },
  ];
  res.render('index', {
    title: 'タイトル',
    blogs: blogs,
  });
  // ビューファイルはサーバーにありテンプレートタグを探してJavaScriptコードをもとにHTML形式に変換して返す（SSRとも言う）
});
// nodemon server

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'タイトル',
  });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', {
    title: 'タイトル',
  });
});

app.use((req, res) => {
  res.status(404).render('404', {
    title: 'タイトル',
  });
});
