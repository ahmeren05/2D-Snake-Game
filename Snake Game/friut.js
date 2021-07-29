function Friut() {
    this.x;
    this.y;

    this.pickLocation = function () { // elmanın konumunu seçiyoruz
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;

    }
    this.draw = function () {
    var apple = new Image();
    apple.src="Screenshot_3.png";
    context.drawImage(apple,this.x, this.y, scale, scale);
    }
}

