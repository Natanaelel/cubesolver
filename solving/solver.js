class Solver{
    constructor(){
        
    }
    
}
class Algorithm{
    constructor(moves){
        this.moves = moves
    }
    rotate(xyz){ // "x z' y"
        for(let rotation of xyz.split(" ")){
            let axle =  "xyz".indexOf(rotation)
            let times = rotation[1] == "2" ? 2 : rotation[1] == "'" ? 3 : 1
            for(let i = 0; i < times; i++){
                if(axle == 0){
                    this.moves = this.moves.replace(/[UFDB]/g, m => "UFDB"["FDBU".indexOf(m)])
                }
            }
        }
    }
}