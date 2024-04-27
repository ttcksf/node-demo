// v20からnpx nodeomon ファイル名に変更

const express = require('express');
const morgan = require('morgan');
const app = express();
app.set('view engine', 'ejs');
// URLエンコードされたデータを取得し、リクエストオブジェクト内に使用可能なオブジェクトに変換
// POSTリクエストハンドラー内で「request.body」にアクセスできるようになる
app.use(express.urlencoded({ extended: true }));

const dbUrl =
  'mongodb+srv://admin:ttc19930104@mongo-basic.hwnaw5l.mongodb.net/sample-db?retryWrites=true&w=majority&appName=mongo-basic';

const mongoose = require('mongoose');
mongoose
  .connect(dbUrl)
  .then((res) => app.listen('3000'))
  .catch((err) => console.log(err));

const Blog = require('./models/blog');

app.get('/create', (req, res) => {
  res.render('create', { title: 'ブログ投稿' });
});

app.post('/', (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);

  blog
    .save()
    .then((data) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
});

app.get('/', (req, res) => {
  Blog.find()
    .then((data) => {
      res.render('index', {
        title: 'トップページ',
        blogs: data,
      });
    })
    .catch((err) => console.log(err));
});

// -----------------------------------------

app.get('/about/:id', (req, res) => {
  console.log(req.params.id);
  // paramsのプロパティはURLのスラッグ名になる
  const blogId = req.params.id;
  // console.log(blogId);
  Blog.findById(blogId)
    .then((data) => {
      res.render('about', { blog: data, title: 'ブログ詳細' });
    })
    .catch((err) => console.log(err));
});

// -------------------------------------
app.delete('/about/:id', (req, res) => {
  const blogId = req.params.id;
  Blog.findByIdAndDelete(blogId)
    .then(() => {
      // リダイレクトできない代わりにJSON形式でリダイレクトするパスをブラウザに返信しておく
      res.json({ redirect: '/' });
    })
    .catch((err) => console.log(err));
});
