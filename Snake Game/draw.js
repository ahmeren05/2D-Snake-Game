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
            snake = new Snake();
            friut = new Friut();
            friut.pickLocation();
            window.setInterval(() =>{
                context.clearRect(0, 0, canvas.width, canvas.height);
                snake.draw();
                snake.update();
                friut.draw();
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
                    gameOver()
                }
            },1000/12)
        })();
        function bigcheck() {
            window.addEventListener("keydown", ((event) => {
            const direction = event.key.replace("Arrow" , '') //yönler dizisi
            snake.chanceDirection(direction); //chanceDirection fonksiyonunu direction değişken(dizi) parametresi ile çalıştır.
            if (direction == "Down" || direction == "Up" || direction == "Right" || direction == "Left") {
                startreducecheck()
            }
        }))
        }
        function startreducecheck() {
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
            var point = 0;
            point = score.innerHTML;
            snake = new Snake();
            startTime(false)
            document.querySelector(".sis").style.animationName="sis";
            document.querySelector(".gameoveralert").style.animationName="gameoveralert"
            document.querySelector(".gameoveralert-p").innerHTML=point;
            document.querySelector(".gameoveralert > p > button").addEventListener("click",function() {
                document.querySelector(".sis").style.animationName="sisreverse"
                document.querySelector(".gameoveralert").style.animationName="gameoveralertreverse"
                score.innerHTML=1;
                timecheck=5;
                time.innerHTML=timecheck
                friut.pickLocation();
            })
        }