class Cell{
    constructor(){
        this.life = false;
    }
    isLive(){
        return this.life;
    }

    check(neighbours) {
        let alife = 0;
        neighbours.forEach(function (element) {
            if(element){
                alife++;
            }
        });
        if(alife > 1){
            this.life = true;
        }else{
            this.life = false;
        }
    }
}
module.exports = Cell;