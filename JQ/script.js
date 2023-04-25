// リンクのホバー時に不透明度をアニメーションで変更する
$(".home, .fade").hover(
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

// topに戻るボタン;
$(function () {
  $("#back-btn").on("click", () => {
    $("body,html").animate({ scrollTop: 0 }, 1000);
    return false;
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#back-btn").fadeIn();
    } else {
      $("#back-btn").fadeOut();
    }
  });

  // スクロール時にセクションをフェードイン

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("section").addClass("section-fadein");
    } else {
      $("section").removeClass("section-fadein");
    }
  });
  //リンクにスクロール
  $("a[href^='#']").click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - 50;
    $("body,html").animate({ scrollTop: position }, 1000, "swing");
    return false;
  });
});
