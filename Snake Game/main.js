var imgs = document.querySelectorAll("img");
for (let index = 0; index < imgs.length; index++) {
    imgs[index].oncontextmenu = function (event) {
        event.preventDefault()
        event.stopPropagation()
        return false
    }
}
var imgs = document.querySelectorAll('img');
var i;
for (i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('dragstart', (e) => e.preventDefault())
}


var startbutton = document.querySelector(".startbutton")
startbutton.addEventListener("click",function() {
document.querySelector(".howtoplay").style.animationName="howtoplay";
startbutton.style.animationName="howtoplay"
document.querySelector("img").style.animationName="phoneimg"
document.querySelector(".score").style.animationName="canvasinfo"
document.querySelector(".buttons").style.animationName="canvas"
document.querySelector(".time").style.animationName="canvasinfo"
document.querySelector("canvas").style.animationName="canvas"
document.querySelector("article > h1").style.animationName="article1h1"
bigcheck();
})