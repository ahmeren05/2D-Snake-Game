function Barrier() {
    this.x;
    this.y;
        this.pickLocation = function () { // bariyerin konumunu seçiyoruz
            this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
            this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        }
        this.draw = function () {
        var barrier = new Image();
        barrier.src="engel1.png";
        context.drawImage(barrier,this.x, this.y, scale, scale);
        }
}

