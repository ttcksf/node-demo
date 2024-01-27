console.log('test');

const fs = require('fs');
// ターミナルで実行するディレクトリを起点にパスを指定
fs.readFile('./file-basic/example.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  // バッファーになって表示される
  // console.log(data);
  console.log(data.toString());
});
// ファイル操作は非同期処理になっていることを注意

// 上書き
// fs.writeFile('./file-basic/example.txt', '更新しました', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('written');
// });
// 新規作成
// fs.writeFile('./file-basic/example1.txt', '更新しました', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log('written');
// });
// 2回目からはエラーになるので削除
if (fs.existsSync('./file-basic/example.txt')) {
  fs.unlink('./file-basic/example1.txt', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('deleted');
  });
}
// ディレクトリの作成、削除も同じ
if (fs.existsSync('./file-basic/assets')) {
  fs.rmdir('./file-basic/assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('removed');
  });
} else {
  fs.mkdir('./file-basic/assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('created');
  });
}
