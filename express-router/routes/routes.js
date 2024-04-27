const express = require('express');
const Blog = require('../models/blog');
// 全てのルートを取得できる
const router = express.Router();

router.get('/create', (req, res) => {
  res.render('create', { title: 'ブログ投稿' });
});

router.post('/', (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((data) => {
      res.redirect('/');
    })
    .catch((err) => console.log(err));
});

router.get('/', (req, res) => {
  Blog.find()
    .then((data) => {
      res.render('index', {
        title: 'トップページ',
        blogs: data,
      });
    })
    .catch((err) => console.log(err));
});

router.get('/about/:id', (req, res) => {
  console.log(req.params.id);
  const blogId = req.params.id;
  Blog.findById(blogId)
    .then((data) => {
      res.render('about', { blog: data, title: 'ブログ詳細' });
    })
    .catch((err) => console.log(err));
});

router.delete('/about/:id', (req, res) => {
  const blogId = req.params.id;
  Blog.findByIdAndDelete(blogId)
    .then(() => {
      res.json({ redirect: '/' });
    })
    .catch((err) => console.log(err));
});

// プロジェクトはapp.jsを起点に動作するためエクスポートする
module.exports = router;
