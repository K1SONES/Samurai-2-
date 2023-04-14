$(function () {
  const p = $("p").text();
  console.log(p);
});

$(function () {
  $("p").text("JQueryを勉強しよう");
});
$(function () {
  //変数の初期化
  let num = 0;

  // id属性がappendの要素がクリックされたら要素を追加
  $("#append").on("click", function () {
    // numを1ずつ増やす
    num++;
    $("ul").append("<li>appendで追加" + num + "</li>");
  });
  // id属性がremoveの要素がクリックされたら末尾要素を削除
  $("#remove").on("click", function () {
    num--;
    $("li:last").remove();

    // 要素がなくなったら変数を0にする
    if (num < 0) {
      num = 0;
    }
  });
  // id属性がshowの要素がクリックされたら要素を表示
  $("#show").on("click", function () {
    $("ul").show();
  });

  // id属性がhideの要素がクリックされたら要素を非表示
  $("#hide").on("click", function () {
    $("ul").hide();
  });
});
$(function () {
  // id属性がcheckの要素がクリックされたら
  $("#check").on("click", function () {
    // 名前(テキストボックス)を取得する
    console.log("名前:" + $('[name="username"]').val());

    // 性別(ラジオボタン)を取得する
    console.log("性別:" + $('[name="gender"]:checked').val());

    // 血液型(セレクトボックス)を取得する
    console.log("血液型:" + $('[name="blood"]').val());

    // 趣味(チェックボックス)を取得する
    $('[name="hobby"]:checked').each(function () {
      //$(this)は1つずつの選択された要素を意味する
      console.log("趣味:" + $(this).val());
    });
  });
  // 名前が入力されたら
  $('[name="username"]').on("input", function () {
    let input = $(this).val();

    // 入力文字があればボタンを押せる、なければボタンを押せなくする
    if (input) {
      $("#check").prop("disabled", false);
    } else {
      $("#check").prop("disabled", true);
    }
  });

  // 1. 趣味のチェックボックスが変更されたら
  $('[name="hobby"]').on("change", function () {
    // 2.、3. チェックの数が3より大きかったら
    if ($('[name="hobby"]:checked').length > 3) {
      // 4. チェックを付けようとしたものだけチェックを外す
      $(this).prop("checked", false);

      // 5. 注意を促すメッセージを表示する
      alert("3つまでしか選択できません");
    }
  });
});
