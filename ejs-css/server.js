// npm i express
// npm i nodemon
// npm i ejs
const express = require('express');
const nodemon = require('nodemon');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

// headタグにstyleタグでCSSは書かなくて良くなる
app.use(express.static('public'));

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
});
// nodemon server

// オリジナルのミドルウェア(アバウトページをクリックしたとき)
// 原則として次の処理に行っても問題ないかは宣言しないといけない
// app.use((req, res, next) => {
//   console.log('オリジナルのmiddlewareを作成しました');
//   next();
// });

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
