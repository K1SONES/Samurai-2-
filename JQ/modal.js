const modal = $("#js-modal");
const overlay = $("#js-overlay");
const close = $("#js-close");
const open = $("img");

open.on("click", function () {
  //ボタンをクリックしたら
  $("#targetImg").attr("src", $(this)[0].scr);
  modal.addClass("open"); // modalクラスにopenクラス付与
  overlay.addClass("open"); // overlayクラスにopenクラス付与
});
close.on("click", function () {
  //×ボタンをクリックしたら
  modal.removeClass("open"); // overlayクラスからopenクラスを外す
  overlay.removeClass("open"); // overlayクラスからopenクラスを外す
});
