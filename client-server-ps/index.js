// 静的ファイルにJSファイルを読み込ませて実行（クライアント）
// node indexで実行する（サーバー）
// console.log('test');
// サーバー側でのエラーかクライアント側でのエラーかを見分ける
// サーバーのログはコンソールには出ないし、クライアントのログはサーバーのターミナルには出ない
// const test = 'test';
// test = 123;
// console.log(test);

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 事前にJSファイルやスクリプトを読み込ませても良い
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('ポート3000！');
});
