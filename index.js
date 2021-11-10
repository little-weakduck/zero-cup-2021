function jumpHistory() {
  window.location.hash = "#history";
}

function jumpFrist() {
  window.location.hash = "#first";
}

function jumpFilm() {
  window.location.hash = "#film";
}

function jumpPeople() {
  window.location.hash = "#people";
}

function jumpAward() {
  window.location.hash = "#award";
}

function jumpEnd() {
  window.location.hash = "#end";
}

var h = window.innerHeight;

function pilot() {
  if ($("html, body").scrollTop() < 0.5 * h) {
    document.getElementById("q").style.backgroundColor = "rgb(161, 171, 238)";
    document.getElementById("w").style.backgroundColor = "snow";
    document.getElementById("e").style.backgroundColor = "snow";
    document.getElementById("r").style.backgroundColor = "snow";
    document.getElementById("t").style.backgroundColor = "snow";
    document.getElementById("y").style.backgroundColor = "snow";
  } else {
    if ($("html, body").scrollTop() < 1.5 * h) {
      document.getElementById("w").style.backgroundColor = "rgb(161, 171, 238)";
      document.getElementById("q").style.backgroundColor = "snow";
      document.getElementById("e").style.backgroundColor = "snow";
      document.getElementById("r").style.backgroundColor = "snow";
      document.getElementById("t").style.backgroundColor = "snow";
      document.getElementById("y").style.backgroundColor = "snow";
    } else {
      if ($("html, body").scrollTop() < 2.5 * h) {
        document.getElementById("e").style.backgroundColor =
          "rgb(161, 171, 238)";
        document.getElementById("q").style.backgroundColor = "snow";
        document.getElementById("w").style.backgroundColor = "snow";
        document.getElementById("r").style.backgroundColor = "snow";
        document.getElementById("t").style.backgroundColor = "snow";
        document.getElementById("y").style.backgroundColor = "snow";
      } else {
        if ($("html, body").scrollTop() < 3.5 * h) {
          document.getElementById("r").style.backgroundColor =
            "rgb(161, 171, 238)";
          document.getElementById("q").style.backgroundColor = "snow";
          document.getElementById("e").style.backgroundColor = "snow";
          document.getElementById("w").style.backgroundColor = "snow";
          document.getElementById("t").style.backgroundColor = "snow";
          document.getElementById("y").style.backgroundColor = "snow";
        } else {
          if ($("html, body").scrollTop() < 4.5 * h) {
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

$(window).scroll(function () {
  pilot();
});

window.onload = pilot();
