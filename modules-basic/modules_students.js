const studentsData = [
  {
    id: '0001',
    name: 'tanaka',
    age: 20,
  },
  {
    id: '0002',
    name: 'yamada',
    age: 21,
  },
  {
    id: '0003',
    name: 'nakamura',
    age: 20,
  },
];
// console.log(studentsData);

const arr = [1, 2, 3, 4, 5];
// module.exports = studentsData;
// 複数あるときはオブジェクトにするがプロパティ(管理上の名前)とキー(変数名)が同じでよければ省略して良い
// module.exports = {
//   studentsData: studentsData,
//   arr: arr,
// };
// モダンJSでも使う書き方
module.exports = { studentsData, arr };
