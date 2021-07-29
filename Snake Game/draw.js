const canvas = document.querySelector("canvas");
        const context = canvas.getContext("2d");
        const scale = 20;
        const rows = canvas.width / scale;
        const columns = canvas.height / scale;
        var snake;
        var score = document.querySelector(".scorep");
        score.innerHTML =1 ;
        var time = document.querySelector(".timep");
        time.innerHTML = 5;
        timecheck = 5;
        var firstclickcontrol=0;
        (function setup() {
            barrier2 = new Barrier2();
            snake = new Snake();
            friut = new Friut();
            barrier = new Barrier();
            barrier.pickLocation();
            barrier2.pickLocation();
            friut.pickLocation();
            window.setInterval(() =>{
                for (let index = 0; index < snake.tail.length; index++) {
                    if (snake.tail[index].y === friut.y && snake.tail[index].x === friut.x) {
                        friut.pickLocation();
                    }
                }
                if (friut.x === barrier.x && friut.y === barrier.y) {
                    friut.pickLocation();
                }
                if (friut.x === barrier2.x && friut.y === barrier2.y) {
                    friut.pickLocation();
                }
                context.clearRect(0, 0, canvas.width, canvas.height);
                snake.draw();
                snake.update();
                friut.draw();
                barrier2.draw();
                barrier.draw();
                if (snake.impact(barrier) || snake.impact2(barrier2)) {

                    gameOver()
                    barrier.pickLocation();
                    barrier2.pickLocation();
                }
                if(snake.eat(friut)){
                    friut.pickLocation(); // elmaya yeni konum şeç
                    score.innerHTML++;
                    if (score.innerHTML<=10) {
                        timecheck+=3;
                        time.innerHTML=timecheck;    
                    }
                    else if (score.innerHTML>10 && score.innerHTML<=20) {
                        timecheck+=2;
                        time.innerHTML = timecheck
                    }else if (score.innerHTML>20) {
                        timecheck++;
                        time.innerHTML = timecheck;
                    }
                }
                if (time.innerHTML == 0) {
                    document.querySelector(".akıbeth1").innerHTML="TİME İS UP"
                    gameOver()
                }
            },1000/12)
        })();
        function bigcheck() {
                window.addEventListener("keydown", ((event) => {
                    var direction = event.key.replace("Arrow" , '') //yönler dizisi
                    snake.chanceDirection(direction); //chanceDirection fonksiyonunu direction değişken(dizi) parametresi ile çalıştır.
                    if (direction == "Down" || direction == "Up" || direction == "Right" || direction == "Left") {
                        bcheck == true;
                        if (bcheck) {
                            startreducecheck()
                        }
                        document.querySelector(".playtoready").style.display="none";
                    }
                }))

        }
        function startreducecheck() {
            if (snake.xSpeed == 0 && snake.ySpeed == 0) {
                themesoundfunc(2000)
            }else{
                themesoundfunc(0)
            }
            document.querySelector(".playtoready").style.display="none";
            firstclickcontrol++;
            if(firstclickcontrol==1){
                startTime(true);
            }
        }
        function startTime(kontrol) {
            if (kontrol==false) {
                firstclickcontrol=0;
                clearInterval(zaman)
            }else if(kontrol==true){
                zaman = setInterval( function reduceTime() {
                time.innerHTML--;
                timecheck--;    
                }, 1000);
            }
        }

        function gameOver() {
            document.querySelector(".playtoready").style.display = "none";
            bcheck=false;
            var tiemd = document.querySelector(".timepbef")
            tiemd.style.display = "initial";                     
            time.innerHTML=5;
            snake = new Snake();
            themesound.pause();
            gameoversound();
            var point = 0;
            point = score.innerHTML;
            startTime(false)
            document.querySelector(".sis").style.animationName="sis";
            document.querySelector(".gameoveralert").style.animationName="gameoveralert"
            document.querySelector(".gameoveralert-p").innerHTML=point;
            document.querySelector(".gameoveralert > p > button").addEventListener("click",function() {
                if (snake.xSpeed == 0 && snake.ySpeed == 0) {
                    setTimeout(() => {
                        if (snake.xSpeed == 0 && snake.ySpeed == 0) {
                        document.querySelector(".playtoready").style.display = "initial"; 
                        }
                    }, 1000);
                }else{
                    document.querySelector(".playtoready").style.display = "none"; 
                }
                bcheck=true;
                barrier.pickLocation();
                barrier2.pickLocation();
                tiemd.style.display = "none";                     
                themesoundfunc(1000)
                document.querySelector(".sis").style.animationName="sisreverse"
                document.querySelector(".gameoveralert").style.animationName="gameoveralertreverse"
                score.innerHTML=1;
                timecheck=5;
                time.innerHTML=timecheck
                friut.pickLocation();

            })
        }
        var firsttime = 0;
        var gameover = new Audio("gameover.mp3")
        function gameoversound() {
            if (muteunmute) {
                gameover.play();
            }
        } 


// canvasa sağ tıklanılmasın
canvas.oncontextmenu = function (event) {
    event.preventDefault()
    event.stopPropagation()
    return false
}

var themesound = new Audio("theme.mp3")
function themesoundfunc(themesounddelay) {
    setTimeout(() => {
        if (muteunmute) {
        themesound.play();
        }
        themesound.loop = true;
    }, themesounddelay);
}


    
