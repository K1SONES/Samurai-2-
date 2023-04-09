// $(function () {
//   const title = $("#title").text();
//   const list = $(".message").text();
//   console.log(title);
//   console.log(list);
// });
// // class属性値の先頭が「sample」の要素だけを抽出する
// const text = $('li[class^="sample"]').text();
// console.log(text);

// $(function () {
//   //ボタンがクリックされたら
//   $("button").on("click", function () {
//     console.log("ボタンがクリックされました");
//     console.log("ボタンがクリックされました");
//     console.log("ボタンがクリックされました");
//     setTimeout(() => {
//       //非同期処理()
//       console.log("ボタンがクリックされました!");
//     }, 1000);
//   });
// });

$("div").on({
  click: () => {
    // 背景を赤
    $("div").css("background-color", "red");
    // テキストを「click」
    $("div").text("click");
  },
  dblclick: () => {
    // 背景を緑
    $("div").css("background-color", "green");
    // テキストを「dblclick」
    $("div").text("dblclick");
  },
  mouseenter: () => {
    // 背景を青
    $("div").css("background-color", "blue");
    // テキストを「mouseenter」
    $("div").text("mouseenter");
  },
  mouseout: () => {
    // 背景をグレー
    $("div").css("background-color", "gray");
    // テキストを「mouseout」
    $("div").text("mouseout");
  },
});
$(document).on("click keydown", (e) => {
  // クリックされた場合
  if (e.type === "click") {
    $("div").text("クリックされました！");
  }
  // キーが押された場合
  if (e.type === "keydown") {
    $("div").text("キーが押されました！");
  }
});
