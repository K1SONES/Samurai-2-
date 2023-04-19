// リンクのホバー時に不透明度をアニメーションで変更する
$("a").hover(
  function () {
    $(this).animate({ opacity: 0.5 }, 500);
  },
  function () {
    $(this).animate({ opacity: 1.0 }, 300);
  }
);

// カルーセル
$(".carousel").slick({
  autoplay: true,
  dots: true,
  Infinite: true,
  autoplaySpeed: 5000,
  arrows: false,
});
