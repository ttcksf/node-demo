// 通常のJavaScriptはWindowオブジェクトが元になっている
// console.log('test');

// ブラウザの検証ツールや静的なサイトではwindowは省略して使用されている
// setTimeout(() => {
//   console.log('test');
// }, 3000);

// この書き方はNodeではできない
// window.setTimeout(() => {
//   console.log('test');
// }, 3000);

// Nodeではグローバルオブジェクトというものが元になる（windowではない）
// console.log(global);
// これなら実行できるが同じく省略することが多い;
// global.setTimeout(() => {
//   console.log('test');
// }, 3000);

// NodeからDOMを取得することもできないので注意
// console.log(document.querySelector(body));

// その他のNodeならではの機能
// ディレクトリのパス
console.log(__dirname);
// ファイルのパス
console.log(__filename);
