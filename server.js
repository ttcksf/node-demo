// モジュールのエクスポート、インポート
const express = require('express');
const mongoose = require('mongoose');
const nodemon = require('nodemon');
const app = express();

app.set('view engine', 'ejs');
// 取得、投稿、更新、削除
app.get('/', (req, res) => {
  const data = [
    {
      title: 'タイトル',
      desc: '初投稿です。',
    },
    {
      title: '2回目',
      desc: '2回目の投稿です。',
    },
    {
      title: '3回目',
      desc: '3回目の投稿です。',
    },
  ];

  res.render('index', { text: data });
});

// http://localhost:5000
app.listen('5000');
