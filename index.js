$(function() {

  $("#calc").click(function() {

    // 入力された日時を取得
    const y = Number($("#y").val());
    const m = Number($("#m").val());
    const d = Number($("#d").val());
    const afterdays = Number($("#afterdays").val());

    // 数字かをチェックするための変数
    var checkNum = (/[^0-9]+/);

    // 数字以外じゃないか、無効な数字を判定
    if (checkNum.test(y) || checkNum.test(m) || checkNum.test(d) || checkNum.test(afterdays)){
      $("#result").text("半角数字で入力してください。")
      return
    } else if (m > 12 || m === 0) {
      $("#result").text("無効な数字です。")
      return
    } else if (d >= 32) {
      $("#result").text("無効な数字です。")
      console.log(32);
      return
    }

    console.log(d);


    // 何日後か計算
    const date1 = new Date(y, m-1, d);
    date1.setDate(date1.getDate() + afterdays);
    
    
    // 計算結果を表示
    const year = (date1.getFullYear());
    const month = (date1.getMonth() + 1);
    const day = (date1.getDate());

    $("#result").text(`${year}年${month}月${day}日`)


  });

});