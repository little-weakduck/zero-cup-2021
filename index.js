var h;

//跳转函数
function jump(a) {
  h = $(window).height();
  $("html, body").scrollTop(a * h + 6 * a);
  console.log(a * h + 6 * a);
}
//导航栏小圆点函数
function pilot() {
  if ($("html, body").scrollTop() < 0.5 * h) {
    document.getElementById("q").style.backgroundColor = "rgb(161, 171, 238)";
    document.getElementById("w").style.backgroundColor = "snow";
    document.getElementById("e").style.backgroundColor = "snow";
    document.getElementById("r").style.backgroundColor = "snow";
    document.getElementById("t").style.backgroundColor = "snow";
    document.getElementById("y").style.backgroundColor = "snow";
  } else {
    if ($("html, body").scrollTop() < 1.5 * h + 6) {
      document.getElementById("w").style.backgroundColor = "rgb(161, 171, 238)";
      document.getElementById("q").style.backgroundColor = "snow";
      document.getElementById("e").style.backgroundColor = "snow";
      document.getElementById("r").style.backgroundColor = "snow";
      document.getElementById("t").style.backgroundColor = "snow";
      document.getElementById("y").style.backgroundColor = "snow";
    } else {
      if ($("html, body").scrollTop() < 2.5 * h + 12) {
        document.getElementById("e").style.backgroundColor =
          "rgb(161, 171, 238)";
        document.getElementById("q").style.backgroundColor = "snow";
        document.getElementById("w").style.backgroundColor = "snow";
        document.getElementById("r").style.backgroundColor = "snow";
        document.getElementById("t").style.backgroundColor = "snow";
        document.getElementById("y").style.backgroundColor = "snow";
      } else {
        if ($("html, body").scrollTop() < 3.5 * h + 18) {
          document.getElementById("r").style.backgroundColor =
            "rgb(161, 171, 238)";
          document.getElementById("q").style.backgroundColor = "snow";
          document.getElementById("e").style.backgroundColor = "snow";
          document.getElementById("w").style.backgroundColor = "snow";
          document.getElementById("t").style.backgroundColor = "snow";
          document.getElementById("y").style.backgroundColor = "snow";
        } else {
          if ($("html, body").scrollTop() < 4.5 * h + 24) {
            document.getElementById("t").style.backgroundColor =
              "rgb(161, 171, 238)";
            document.getElementById("q").style.backgroundColor = "snow";
            document.getElementById("e").style.backgroundColor = "snow";
            document.getElementById("r").style.backgroundColor = "snow";
            document.getElementById("w").style.backgroundColor = "snow";
            document.getElementById("y").style.backgroundColor = "snow";
          } else {
            document.getElementById("y").style.backgroundColor =
              "rgb(161, 171, 238)";
            document.getElementById("q").style.backgroundColor = "snow";
            document.getElementById("e").style.backgroundColor = "snow";
            document.getElementById("r").style.backgroundColor = "snow";
            document.getElementById("t").style.backgroundColor = "snow";
            document.getElementById("w").style.backgroundColor = "snow";
          }
        }
      }
    }
  }
}
//监测
$(window).scroll(function () {
  h = $(window).height();
  pilot();
  animation();
});

//初始化
window.onload = pilot();

function animation() {
  if ($("html, body").scrollTop() > 4 * h + 24) {
    award.style.opacity =
      (1 - ($("html, body").scrollTop() - (4 * h + 24)) / h) * 100 + "%";

    end.style.opacity =
      (($("html, body").scrollTop() - (4 * h + 24)) / h) * 100 + "%";
  } else {
    if ($("html, body").scrollTop() > 3 * h + 18) {
      people.style.opacity =
        (1 - ($("html, body").scrollTop() - (3 * h + 18)) / h) * 100 + "%";

      award.style.opacity =
        (($("html, body").scrollTop() - (3 * h + 18)) / h) * 100 + "%";
    } else {
      if ($("html, body").scrollTop() > 2 * h + 12) {
        film.style.opacity =
          (1 - ($("html, body").scrollTop() - (2 * h + 12)) / h) * 100 + "%";

        people.style.opacity =
          (($("html, body").scrollTop() - (2 * h + 12)) / h) * 100 + "%";
      } else {
        if ($("html, body").scrollTop() > 1 * h + 6) {
          his.style.opacity =
            (1 - ($("html, body").scrollTop() - (1 * h + 6)) / h) * 100 + "%";

          film.style.opacity =
            (($("html, body").scrollTop() - (1 * h + 6)) / h) * 100 + "%";
        } else {
          first.style.opacity =
            (1 - $("html, body").scrollTop() / h) * 100 + "%";

          his.style.opacity = ($("html, body").scrollTop() / h) * 100 + "%";
        }
      }
    }
  }
}
