// 定数の宣言・値の代入
const shippingFee = 500;

// コンソールへの出力;
console.log(shippingFee);

const number = 50;
// もし定数numが10より大きいならば、「定数numは10より大きいです」という文字列を出力する
if (number > 10) {
  console.log("定数numは10より大きいです");
}

// 算術演算子を使った場合の戻り値を出力
console.log(45 + 18);

// 比較演算子を使った場合の戻り値を出力
console.log(45 > 18);

// 等価演算子を使った場合の戻り値を出力
console.log("5" == 5);

// 厳密等価演算子を使った場合の戻り値を出力
console.log("5" === 5);

// 変数numに0～4までのランダムな整数を代入する
let num = Math.floor(Math.random() * 5);

// 変数numの値を出力する
console.log(num);

// 変数numの値が4であれば「大当たりです」という文字列を出力する
if (num === 4) {
  console.log("大当たりです");
}
//変数numの値が3であれば「あたりです」という文字列を出力する
else if (num === 3) {
  console.log("あたりです");
}
// それ以外の時は、「はずれです」という文字列を出力する
else {
  console.log("はずれです");
}
