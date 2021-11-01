//导入音频
var toyAudio = new Audio("./css/toyStory.mp3");
var monsterAudio = new Audio("./css/monster.mp3");
var seaAudio = new Audio("./css/sea.mp3");
var carAudio = new Audio("./css/car.mp3");
var cocoAudio = new Audio("./css/coco.mp3");
var IncrediblesAudio = new Audio("./css/Incredibles.mp3");
//播放
function playToy() {
  toyAudio.play();
}
function playMonster() {
  monsterAudio.play();
}
function playSea() {
  seaAudio.play();
}
function playCar() {
  carAudio.play();
}
function playCoco() {
  cocoAudio.play();
}
function playIncredibles() {
  IncrediblesAudio.play();
}
//显示人物介绍
$(document).ready(function () {
  $(".toy").click(function () {
    $(".toyDe").show("slow");
  });
});
$(document).ready(function () {
  $(".monster").click(function () {
    $(".monsterDe").show("slow");
  });
});
$(document).ready(function () {
  $(".sea").click(function () {
    $(".seaDe").show("slow");
  });
});
$(document).ready(function () {
  $(".car").click(function () {
    $(".carDe").show("slow");
  });
});
$(document).ready(function () {
  $(".coco").click(function () {
    $(".cocoDe").show("slow");
  });
});
$(document).ready(function () {
  $(".Incredibles").click(function () {
    $(".IncrediblesDe").show("slow");
  });
});
//隐藏人物介绍
$(document).ready(function () {
  $(".peopleClose").click(function () {
    $(".toyDe").hide("slow");
    $(".monsterDe").hide("slow");
    $(".seaDe").hide("slow");
    $(".carDe").hide("slow");
    $(".cocoDe").hide("slow");
    $(".IncrediblesDe").hide("slow");
  });
});
