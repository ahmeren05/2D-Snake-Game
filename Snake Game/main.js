var engeller = ["dik", "yan"]
var hangiengel = Math.floor(Math.random() * engeller.length+1);
var bcheck = true;
var reducecheck = false


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
    if (snake.xSpeed == 0 && snake.ySpeed == 0) {
        setTimeout(() => {
            if (snake.xSpeed == 0 && snake.ySpeed == 0) {
            document.querySelector(".playtoready").style.display = "initial"; 
            }
        }, 2000);
    }
    
    if (snake.xSpeed == 0 && snake.ySpeed == 0) {
        themesoundfunc(2000)
    }else{
        themesoundfunc(0)
    }

document.querySelector(".howtoplay").style.animationName="howtoplay";
startbutton.style.animationName="howtoplay"
document.querySelector("img").style.animationName="phoneimg"
document.querySelector(".score").style.animationName="canvasinfo"
document.querySelector(".buttons").style.animationName="canvas"
document.querySelector(".time").style.animationName="canvasinfo"
document.querySelector("canvas").style.animationName="canvas"
document.querySelector("article > h1").style.animationName="article1h1"
bigcheck();
var whooshaudio = new Audio("whoosh.mp3")
if (muteunmute) {
whooshaudio.play()
}
})



var tryagain = document.querySelector(".gameoveralert > p > button")
var Buttonhoversound = new Audio("buttonhoversound.mp3")
function buttonhoversound(button) {
    button.addEventListener("mouseover",function () {
        if (muteunmute) {
        Buttonhoversound.play()
        }
    })
}
buttonhoversound(startbutton);
buttonhoversound(tryagain)
var Buttonclicksound = new Audio("buttonclicksound.mp3")
function buttonclicksound(button) {
    button.addEventListener("click",function () {
        if (muteunmute) {
        Buttonclicksound.play()
        }
    })
}
buttonclicksound(startbutton);
buttonclicksound(tryagain)

var body = document.querySelector("body")
body.click();


var muteunmute = true;
$(document).on('click', '.toggle-sound', function(e) {
    $(this).toggleClass('sound-mute');
    if (muteunmute == true) {
        muteunmute=false;
        themesound.pause();
    }else{
        if (themesoundcheck) {
            themesound.play();
        }
        muteunmute=true
    }
});


