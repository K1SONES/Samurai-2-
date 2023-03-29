// // 定数の宣言・値の代入
// const shippingFee = 500;

// // コンソールへの出力;
// console.log(shippingFee);

// const number = 50;
// // もし定数numが10より大きいならば、「定数numは10より大きいです」という文字列を出力する
// if (number > 10) {
//   console.log("定数numは10より大きいです");
// }

// // 算術演算子を使った場合の戻り値を出力
// console.log(45 + 18);

// // 比較演算子を使った場合の戻り値を出力
// console.log(45 > 18);

// // 等価演算子を使った場合の戻り値を出力
// console.log("5" == 5);

// // 厳密等価演算子を使った場合の戻り値を出力
// console.log("5" === 5);

// // 変数numに0～4までのランダムな整数を代入する
// let num = Math.floor(Math.random() * 5);

// // 変数numの値を出力する
// console.log(num);

// // 変数numの値が4であれば「大当たりです」という文字列を出力する
// if (num === 4) {
//   console.log("大当たりです");
// }
// //変数numの値が3であれば「あたりです」という文字列を出力する
// else if (num === 3) {
//   console.log("あたりです");
// }
// // それ以外の時は、「はずれです」という文字列を出力する
// else {
//   console.log("はずれです");
// }

// // //変数numに0~2までのランダムな整数を代入する
// // let num = Math.floor(Math.random() * 3);

// // //変数numの値によって出力する文字列を切り替える
// // switch (num) {
// //   case 0:
// //     console.log("小吉です");
// //     break;
// //   case 1:
// //     console.log("中吉です");
// //     break;
// //   case 2:
// //     console.log("大吉です");
// //     break;
// // }

// num = Math.floor(Math.random() * 5);

// //変数numの値を出力する
// console.log(num);

// //変数numの値によって、出力する文字列を切り替える
// switch (num) {
//   case 2:
//     console.log("小吉です");
//     break;
//   case 3:
//     console.log("中吉です");
//     break;
//   case 4:
//     console.log("大吉です");
//     break;
//   default:
//     console.log("末吉です");
//     break;
// }

// 変数numに0~4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);

// 変数numの最初の値を出力する
console.log("最初の値は" + num + "です");

//変数numの値が0以外である間、変数numの値を出力し続ける
while (num !== 0) {
  //変数numに０～４までのランダムな整数を再代入する
  num = Math.floor(Math.random() * 5);

  //次の条件式で比較される変数numの現在の値を出力する
  console.log("現在の値は" + num + "です");
}

//1~10までの数値を順番に出力する
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//[配列]//

//配列の宣言と値の代入を行う
const userNames = ["侍太郎", "侍一郎", "侍二郎", "侍三郎", "侍四郎"];

//配列の値の確認
console.log(userNames);

//二番目の要素を更新する
userNames[1] = "侍花子";

// 6番目に要素を追加する
userNames[5] = "侍五郎";

//配列の値を出力する
console.log(userNames);

console.log(userNames[2]);

// オブジェクト

// オブジェクトの宣言と値の代入を行う
const personalData = { name: "侍太郎", age: 36, gender: "男性" };

// オブジェクトの値を出力する
console.log(personalData);

// 'age'というキーの値を更新する
personalData.age = 37;

// 新しくプロパティ（キーと値）を追加する
personalData.address = "東京都";

// オブジェクトの値を出力する
console.log(personalData);

// 'gender'というキーの値を出力する
console.log(personalData.gender);

// 朝のあいさつを出力する関数を定義する
const sayGoodMorning = () => {
  console.log("おはようございます！");
  console.log("昨日はよく眠れましたか？");
  console.log("今日も一日頑張りましょう！");
};

// 夜のあいさつを出力する関数を定義する
const sayGoodEvening = () => {
  console.log("こんばんは！");
  console.log("今日も一日お疲れさまでした。");
};

// 朝のあいさつを出力する関数を呼び出す
sayGoodMorning();

// 夜のあいさつを出力する関数を呼び出す
sayGoodEvening();

// 与えられた引数priceに送料を加算し、その値を出力する関数を定義する
const calculateTotal = (price) => {
  console.log(price + 500 + "円");
};
// 関数を呼び出し、引数として購入金額を渡す
calculateTotal(1200);

// 与えられた引数priceと引数shippingFeeを加算し、その値を出力する関数を定義する
const addTwoArguments = (price, shippingFee) => {
  console.log(price + shippingFee + "円");
};

// 関数を呼び出し、引数として購入金額と送料を渡す
addTwoArguments(1200, 500);

//与えられた引数numを2倍にし、その値を戻り値として返す関数を定義
const double = (num) => {
  return num * 2;
};

//// 関数の戻り値を出力する
console.log(double(30));

// 関数の中で定数を宣言し、関数の中で定数を使う
const useVariable = () => {
  const userName = "侍太郎";
  console.log(userName);
};

// 関数を呼び出す
useVariable();

// 関数の中で宣言した定数を関数の外で使う
console.log(userName);
