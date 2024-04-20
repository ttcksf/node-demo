const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// スキーマはコレクション内に保存するドキュメントの構造を定義するもの
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
// モデルはスキーマとDB内のコレクションとのやり取りするメソッドの提供など窓口になる
// modelメソッドの第一引数はコレクション名の単数系に相当するものにする
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
