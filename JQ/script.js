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

// topに戻るボタン
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#back-btn").addClass("top-btn");
    } else {
      $("#back-btn").removeClass("top-btn");
    }
  });
});
// スクロール時にセクションをフェードイン
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("section").addClass("top-btn");
    } else {
      $("section").removeClass("top-btn");
    }
  });
});
