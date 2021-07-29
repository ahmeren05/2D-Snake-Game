function Snake (){
    this.x = 100; //x koordinatındaki konumu, ölçünün katı olmak zorunda
    this.y = 100; //y koordinatındaki konumu, ölçünün katı olmak zorunda
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    var skin = new Image();
    var head = new Image();
    skin.src="body.png";
    head.src="head.png"
    this.draw = function() {
        context.fillStyle = "black";
        for (let i = 0; i < this.tail.length; i++) {
            context.drawImage(skin,this.tail[i].x, this.tail[i].y, scale, scale)
        }
        context.drawImage(head,this.x, this.y, scale, scale);
    }
    this.update = function() {
        for (let i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i+1];                   
        }

        this.tail[this.total - 1] = {x: this.x, y: this.y};


        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if(this.x > canvas.width - 1* scale){
            this.x=0;
        }
        if(this.x < 0){
            this.x=canvas.width - 1 * scale;
        }
        if(this.y > canvas.height - 1 * scale){
            this.y=0;
        }
        if(this.y < 0){
            this.y=canvas.height - 1 * scale;
        }
    }
    this.chanceDirection = function (direction) {
        if (bcheck) {
        switch(direction){ //4 tane olayımız var
            case 'Up'://yukarı oka basıldığında
            if (this.ySpeed != scale * 1 ) {
                if (this.ySpeed != -scale * 1) {
                    if (muteunmute) {
                    directionsoundplay()
                    }
                }
                this.xSpeed = 0; // x ekseninde hareket olmayacak.
                this.ySpeed = -scale * 1; // y ekseni eksi ölçü kadar hareket edecek.
            }

            break;
            case 'Down'://aşağı oka basıldığında
            if (this.ySpeed != -scale * 1) {
                if (this.ySpeed != scale * 1) {
                    if (muteunmute) {
                        directionsoundplay()
                        }
                }
                this.xSpeed = 0; // x ekseninde hareket olmayacak.
                this.ySpeed = scale * 1; // y ekseni artı ölçü kadar hareket edecek.
            }
            break
            case 'Left'://sol oka basıldığında
            if (this.xSpeed != scale * 1) {
                if (this.xSpeed != -scale * 1) {
                    if (muteunmute) {
                        directionsoundplay()
                        }
                }
                this.ySpeed = 0; // y ekseninde hareket olmayacak.
                this.xSpeed = -scale * 1; // x ekseni eksi ölçü kadar hareket edecek.
            }
            break
            case 'Right'://yukarı oka basıldığında

            if (this.xSpeed != -scale * 1) {
                if (this.xSpeed != scale * 1) {
                    if (muteunmute) {
                        directionsoundplay()
                        }
                }
                this.ySpeed = 0; // y ekseninde hareket olmayacak.
                this.xSpeed = scale * 1; // x ekseni artı ölçü kadar hareket edecek.
            }
            break
        }
    }
    }
    var rightbutton = document.querySelector(".rightbutton")
    var leftbutton = document.querySelector(".leftbutton")
    var topbutton = document.querySelector(".topbutton")
    var downbutton = document.querySelector(".downbutton")
    rightbutton.addEventListener("click", function () {
        if (snake.xSpeed != -scale * 1) {
            if (snake.xSpeed != scale * 1) {
                if (muteunmute) {
                    directionsoundplay()
                    }
            }
            snake.ySpeed = 0; // y ekseninde hareket olmayacak.
            snake.xSpeed = scale * 1; // x ekseni artı ölçü kadar hareket edecek.
        }
        startreducecheck()
    })
    leftbutton.addEventListener("click", function () {
        if (snake.xSpeed != scale * 1) {
            if (snake.xSpeed != -scale * 1) {
                if (muteunmute) {
                    directionsoundplay()
                    }
            }
            snake.ySpeed = 0; // y ekseninde hareket olmayacak.
            snake.xSpeed = -scale * 1; // x ekseni eksi ölçü kadar hareket edecek.
        }
        startreducecheck()
    })
    topbutton.addEventListener("click", function () {
        if (snake.ySpeed != scale * 1 ) {
            if (snake.ySpeed != -scale * 1) {
                if (muteunmute) {
                    directionsoundplay()
                    }
            }
            snake.xSpeed = 0; // x ekseninde hareket olmayacak.
            snake.ySpeed = -scale * 1; // y ekseni eksi ölçü kadar hareket edecek.
        }
        startreducecheck()
    })
    downbutton.addEventListener("click", function () {
        if (snake.ySpeed != -scale * 1) {
            if (snake.ySpeed != scale * 1) {
                if (muteunmute) {
                    directionsoundplay()
                    }
            }
            snake.xSpeed = 0; // x ekseninde hareket olmayacak.
            snake.ySpeed = scale * 1; // y ekseni artı ölçü kadar hareket edecek.
        }
        startreducecheck()
    })
    this.eat = function (friut) {
        if(this.x === friut.x && this.y === friut.y){
            this.total++;
            var eatsound = new Audio("eatsound.mp3")
            if (muteunmute) {
            eatsound.play();
            }
            return true;
        }
        return false;
    }
    this.impact = function (barrier) {
        if((this.x === barrier.x && this.y === barrier.y)){
            var impactsound = new Audio("impact.mp3")
            if (muteunmute) {
            impactsound.play();
            }
            document.querySelector(".akıbeth1").innerHTML="YOU HİT WALL"
            return true;
        }
        return false;
    }
    this.impact2 = function (barrier2) {
        if(this.x == barrier2.x && this.y == barrier2.y){
            var impactsound = new Audio("impact.mp3")
            if (muteunmute) {
            impactsound.play();
            }
            document.querySelector(".akıbeth1").innerHTML="YOU HİT WALL"
            return true;
        }
        return false;
    }
}


var directionsound = new Audio("directionsound.mp3");
function directionsoundplay() {
    if (muteunmute) {
    directionsound.play();
    }
}
