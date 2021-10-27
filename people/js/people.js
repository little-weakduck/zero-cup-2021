// function playIt()
// {
//    document.getElementById("peoplePic").innerHTML="<embed src='people/css/123.mp3' autostart=true loop=false volume=100 hidden=true>";
//    return true;
// }

var toyAudio = new Audio ('css/123.mp3') 

function playIt()
{
    toyAudio.loop = false;
    toyAudio.play();
}