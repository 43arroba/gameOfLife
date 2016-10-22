class Cell{

    check(neightboards) {
        let alive = 0;
        neightboards.forEach((isAlive) => {
            if(isAlive){
                alive++;
            }
        });
        
        return { isAlive };
        
        function isAlive(){
            if(alive === 2 || alive === 3){
                return true;
            }
            return false;
        }
    }
}
module.exports = Cell;