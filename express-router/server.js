// v20からnpx nodeomon serverに変更

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

// Routerをインポート
const router = require('./routes/routes');

const dbUrl =
  'mongodb+srv://admin:ttc19930104@mongo-basic.hwnaw5l.mongodb.net/sample-db?retryWrites=true&w=majority&appName=mongo-basic';

const mongoose = require('mongoose');
mongoose
  .connect(dbUrl)
  .then((res) => app.listen('3000'))
  .catch((err) => console.log(err));

const Blog = require('./models/blog');

// ミドルウェアとして使うことを宣言
app.use(router);
