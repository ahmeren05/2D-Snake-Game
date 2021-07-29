function Barrier2() {
    this.x;
    this.y;

    this.pickLocation = function () { // bariyerin konumunu seçiyoruz
            if (hangiengel==1) {
                if (barrier.y==13 * scale) {
                    this.y = barrier.y - 1 * scale;
                    this.x = barrier.x
                }else{ 
                this.y = barrier.y + 1 * scale;
                this.x = barrier.x
                }
            }else if(hangiengel==2){
                if (barrier.x == 13 * scale) {
                    this.x = barrier.x - 1 * scale;
                    this.y = barrier.y
                }else{
                this.x = barrier.x + 1 * scale;
                this.y = barrier.y
                }
            }
        }
        this.draw = function () {
        var barrier2 = new Image();
        barrier2.src="engel1.png";
        context.drawImage(barrier2,this.x, this.y, scale, scale);
        }
}
