// npm i express
// npm i morgan
// npm i ejs
// npm i nodemon(v20からnpx nodeomon ファイル名に変更)
const express = require('express');
const morgan = require('morgan');
const app = express();
app.set('view engine', 'ejs');

// RDBとNOSQL
// https://www.mongodb.com/ja-jp/atlas/database
// プロジェクトの作成
// Deploy→Database→Build a Database→M0を選択しておく
// プロジェクトの名前を決めてチェックボックス2つは入れておく
// 開発用の2人目のユーザーネームとパスワードを作成（一人目はログインアカウント）
// 左メニューからDatabaseを選択してBrows Collectionsをクリック
// サンプル上部のCreateDatabaseをクリック
// データベース名、コレクション名を入力
// 左メニューからDatabaseを選択してConnectをクリック
// Connect to your application（Delivers）をクリック
//  URLをコピー<username>:<password>を2人目のものに差し替える(<>は削除しておき、?retryの前にDatabase名を入力する)
const dbUrl =
  'mongodb+srv://admin:ttc19930104@mongo-basic.hwnaw5l.mongodb.net/sample-db?retryWrites=true&w=majority&appName=mongo-basic';

// npm i mongoose
const mongoose = require('mongoose');
mongoose
  .connect(dbUrl)
  // .then((res) => console.log("DB接続"))
  .then((res) => app.listen('3000'))
  .catch((err) => console.log(err));

// app.listen('3000');

// ----------------------------------
// モデルを元にしたブログの新しいインスタンスを作成する
// インスタンスには、データベースに保存するためのメソッドがある
// Mongooseは保存先のコレクションを自動的に判断し、指定した情報を含むドキュメントを保存してくれる（SQL文は書かなくて良い）

const Blog = require('./models/blog');
app.get('/create', (req, res) => {
  const blog = new Blog({
    title: 'テスト４',
    content: '本文です。',
  });

  blog
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
});

app.get('/', (req, res) => {
  Blog.find()
    .then((data) => {
      // res.send(data);
      res.render('index', {
        title: 'トップページ',
        blogs: data,
      });
    })
    .catch((err) => console.log(err));
});

app.get('/about', (req, res) => {
  Blog.findById('6615ff154220721526868335')
    .then((data) => {
      res.send(data);
    })
    .catch((err) => console.log(err));
});
