// httpやfsなど既存のモジュール以外で使用したいものがあるとき、第三者が作ったライブラリを使用する（express, nodemonなど）
// Node.jsで使用できるサードパーティライブラリはNPMというストアのようなパッケージマネージャからインストールすることで使用できる
// https://www.npmjs.com/

// （例1）ホットリロードに使うnodemon
// npm i nodemon
// node indexではなくnodemon serverというコマンドで実行すると変更の度に再起動する必要がなくなる
// console.log('test');
// そのままコンソールが新しく出力される
console.log('hello');

// 何をインストールしたか、バージョンは何か？などライブラリの管理をするnode_modulesとpackage.jsonが必要になってくる
// npm init(質問はEnterでデフォルト設定にできる)

// （例2）配列、数値の操作に使うlodash
// npm i lodashを実行するとpackage.jsonのdependenciesに追加される

const _ = require('lodash');
// 乱数を作る
const number = _.random(0, 10);
console.log(number);

// node_modulesにインストールしたモジュールが格納されているが、通常はnode_modulesまでをGitやメールで共有することはない
// package.jsonのdependenciesに書かれている内容を参考にして各自の環境にインストールする
// ただしインストールコマンドは「npm i」を1回実行するだけでまとめてインストールできるのがNPMのメリット
