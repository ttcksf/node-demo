// npm i express
// npm i morgan
// npm i nodemon(v20からnpx nodeomon ファイル名に変更)
const express = require('express');
const morgan = require('morgan');
const app = express();

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
//  URLをコピー<username>:<password>を2人目のものに差し替える(<>は削除しておく)
const dbUrl =
  'mongodb+srv://admin:ttc19930104@mongo-basic.hwnaw5l.mongodb.net/?retryWrites=true&w=majority&appName=mongo-basic';

// npm i mongoose
const mongoose = require('mongoose');
mongoose
  .connect(dbUrl)
  // .then((res) => console.log("DB接続"))
  .then((res) => app.listen('3000'))
  .catch((err) => console.log(err));

// app.listen('3000');
