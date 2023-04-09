$(function () {
  const title = $("#title").text();
  const list = $(".message").text();
  console.log(title);
  console.log(list);
});
// class属性値の先頭が「sample」の要素だけを抽出する
const text = $('li[class^="sample"]').text();
console.log(text);

$(function () {
  //ボタンがクリックされたら
  $("button").on("click", function () {
    console.log("ボタンがクリックされました");
    console.log("ボタンがクリックされました");
    console.log("ボタンがクリックされました");
    setTimeout(() => {
      //非同期処理()
      console.log("ボタンがクリックされました!");
    }, 1000);
  });
});
