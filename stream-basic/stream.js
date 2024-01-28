console.log('test');
// ストリーム：Youtubeなど重たいデータは少しずつ送っていることで閲覧できるようになっている
const fs = require('fs');

const read = fs.createReadStream('./stream-basic/example.txt', {
  encoding: 'utf-8',
});

const write = fs.createWriteStream('./stream-basic/example1.txt');

read.on('data', (chunk) => {
  // 10万文字を超える文章を小さく区切って送るようになる
  console.log('----');
  console.log(chunk);
  // エンコードを指定するとtoStringはなくてもOK
  // console.log(chunk.toString());
  // write.write('新しい文章です');
});

// 書き込みのみならpipeメソッドを使って短く書くことができる
// read.pipe(write);
