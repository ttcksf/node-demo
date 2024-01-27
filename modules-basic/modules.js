// Node.jsがファイルを検索して呼び出し元のコンソールログを実行してくれる
// requireは引数に指定したファイルを実行できる
const students = require('./modules_students');
// とはいえ単体で使うことはない
// console.log(students);
// また呼び出し元の変数をそのまま指定することはできない
// console.log(studentsData);
// 呼び出し元でexportされているとアクセスできる。
// 呼び出し元でconsole.logなど関数やメソッドを実行しておく必要はなくなる
// console.log(students);
// 複数あるときはオブジェクト形式になるため書き方に注意
// console.log(students.studentsData);
// console.log(students.arr);

// 分割代入でインポートしておいてもOK
const { studentsData, arr } = require('./modules_students');
console.log(studentsData);
console.log(arr);

// 自分で作らなくてもインポートできるデータもある
const pc = require('os');
// Windowsならwin,Macならdarwin
console.log(pc.platform());
// ホームディレクトリ
console.log(pc.homedir());
