function Snake (){
    this.x = 100; //x koordinatındaki konumu, ölçünün katı olmak zorunda
    this.y = 100; //y koordinatındaki konumu, ölçünün katı olamk zorunda
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

        switch(direction){ //4 tane olayımız var
            case 'Up'://yukarı oka basıldığında
            if (this.ySpeed != scale * 1 ) {
                this.xSpeed = 0; // x ekseninde hareket olmayacak.
                this.ySpeed = -scale * 1; // y ekseni eksi ölçü kadar hareket edecek.
            }
            break;
            case 'Down'://aşağı oka basıldığında
            if (this.ySpeed != -scale * 1) {
                this.xSpeed = 0; // x ekseninde hareket olmayacak.
                this.ySpeed = scale * 1; // y ekseni artı ölçü kadar hareket edecek.
            }
            break
            case 'Left'://sol oka basıldığında
            if (this.xSpeed != scale * 1) {
                this.ySpeed = 0; // y ekseninde hareket olmayacak.
                this.xSpeed = -scale * 1; // x ekseni eksi ölçü kadar hareket edecek.
            }
            break
            case 'Right'://yukarı oka basıldığında
            if (this.xSpeed != -scale * 1) {
                this.ySpeed = 0; // y ekseninde hareket olmayacak.
                this.xSpeed = scale * 1; // x ekseni artı ölçü kadar hareket edecek.
            }
            break
        }
    }
    var rightbutton = document.querySelector(".rightbutton")
    var leftbutton = document.querySelector(".leftbutton")
    var topbutton = document.querySelector(".topbutton")
    var downbutton = document.querySelector(".downbutton")
    rightbutton.addEventListener("click", function () {
        if (snake.xSpeed != -scale * 1) {
            snake.ySpeed = 0; 
            snake.xSpeed = scale * 1; 
        }
        startreducecheck()
    })
    leftbutton.addEventListener("click", function () {
        if (snake.xSpeed != scale * 1) {
            snake.ySpeed = 0; 
            snake.xSpeed = -scale * 1; 
        }
        startreducecheck()
    })
    topbutton.addEventListener("click", function () {
        if (snake.ySpeed != scale * 1) {
            snake.xSpeed = 0; 
            snake.ySpeed = -scale * 1;
        }
        startreducecheck()
    })
    downbutton.addEventListener("click", function () {
        if (snake.ySpeed != -scale * 1) {
            snake.xSpeed = 0; // y ekseninde hareket olmayacak.
            snake.ySpeed = scale * 1; // x ekseni artı ölçü kadar hareket edecek.
        }
        startreducecheck()
    })
    this.eat = function (friut) {
        if(this.x === friut.x && this.y === friut.y){
            this.total++;
            return true;
        }
        return false;
    }
}