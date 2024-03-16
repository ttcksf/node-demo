// npm i express
// npm i nodemon
// npm i ejs

// ミドルウェアはリクエストが来てブラウザにレスポンスが返されるまでの間にサーバー上で動作する関数やコード
const express = require('express');
const nodemon = require('nodemon');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);
// nodemon server

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

// オリジナルのミドルウェア(アバウトページをクリックしたとき)
// 原則として次の処理に行っても問題ないかは宣言しないといけない
// app.use((req, res, next) => {
//   console.log('オリジナルのmiddlewareを作成しました');
//   next();
// });

// 自分で作っても良いしライブラリとして提供されるミドルウェアを使っても良い
// npm i morgan(const morgan = require('morgan'))
// 現在のログを出してくれるライブラリ
app.use(morgan('dev'));
// headタグのlinkタグでCSSを書いても読み込まれない
// expressはejs以外の外部ファイルを読み込むstaticというミドルウェアを持っていて引数に保存されているフォルダ名を指定する
// localhost:3000/style.cssとしてブラウザに表示もできる
// headタグにstyleタグでCSSは書かなくて良くなる
app.use(express.static('public'));

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
