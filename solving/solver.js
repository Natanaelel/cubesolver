let algs = [
    {
        "name": "T",
        "moves": "R U R' U' R' F R2 U' R' U' R U R' F'",
        "effect": {
            "edges": [[[1, 0], [3, 0]]],
            "corners": [[[1, 0], [2, 0]]],
        }
    },
    {
        "name": "U",
        "moves": "R' U R' U' R' U' R' U R U R2",
        "effect": {
            "edges": [[[0, 0], [1, 0], [3, 0]]],
            "corners": []
        }
    },
    {
        "name": "A",
        "moves": "R U R D2 R' U' R D2 R2",
        "effect": {
            "edges": [],
            "corners": []
        }
    },
    {
        "name": "Y",
        "moves": "F R U' R' U' R U R' F' R U R' U' R' F R F'",
    },
    {
        "name": "idk_0000123123",
        "moves": "F R U' R' U' R U R' F'",
    },
    {
        "name": "idk_0",
        "moves": "R U' R' D R U R' D'",
    },
    {
        "name": "idk_1",
        "moves": "R U' R' D2 R U R' D2",
    },
    {
        "name": "idk_2",
        "moves": "R U' R' D' R U R' D",
    },
    {
        "name": "sledgehammer",
        "moves": "R U R' U' R' F R F'",
    },
    {
        "name": "J-perm",
        "moves": "R U R' F' R U R' U' R' F R2 U' R' U'",
    },
    {
        "name": "idk_3",
        "moves": "R U R U R U",
    },
    {
        "name": "you know this one",
        "moves": "F R U R' U' F'",
    },
    {
        "name": "sune",
        "moves": "R U R' U R U2 R'",
    },
    {
        "name": "lefty sune",
        "moves": "L' U' L U' L' U2 L",
    },
    {
        "name": "sledge",
        "moves": "R U R' U'",
    },
    {
        "name": "hedge",
        "moves": "R' F R F'",
    },
    {
        "moves": "R U2 R2 F R F' U2 R' F R F'"
    },
    {
        "moves": "F U R U' R' F' U' F R U R' U' F'"
    },
    {
        "moves": "R U R' U R' F R F' R U2 R'"
    },
    {
        "moves": "F U R U2 R' U' R U2 R' U' F'"
    },
    {
        "moves": "D2 R U R' D2 R U' R'"
    },
    {
        "moves": "R U R' U' R' L  F R F' L'"
    },
    {
        "moves": "L' U' L U L R' F' L' F R"
    },
    {
        "moves": "R L' U2 R' L F2"
    },
    {
        "moves": "R' L U2 R L' F' R' L U2 R L' F"
    },
    {
        "moves": "R' L U2 R L' F R' L U2 R L' F'"
    },
    {
        "moves": "U R U' R' L F R' F' R L'"
    },
    {
        "moves": "R' U' R U R' L F' R' F R L' R"
    },
    {
        "moves": "R D2 L2 F U2 L2 D2 B R2"
    },
    {
        "moves": "R U R' U' L R'  F R F' L'"
    },
    {
        "moves": "F R U R' U' F2 L' U' L U F"
    },
    {
        "moves": "R' B' D2 L2 U2 F' L2 D2 R'"
    },
    {
        "moves": "R' U' R U R L' B' R' B L"
    },
    {
        "moves": "L U2 L' U2 L F' L' U' L U L F L2"
    },
    {
        "moves": "R' U2 R U2 R' F R U R' U' R' F' R2"
    },
    {
        "moves": "R2 D R' U2 R D' R' U2 R'"
    },
    {
        "moves": "R L' F' L2 F R' L D' L2 D"
    }
]


let rotationTransformationTable = [
    {
        "edges": {
            "0-0": [10, 1],
            "1-0": [6, 0],
            "2-0": [0, 1],
            "3-0": [7, 0],

            "4-0": [1, 0],
            "5-0": [3, 0],
            "6-0": [9, 0],
            "7-0": [11, 0],

            "8-0": [2, 1],
            "9-0": [4, 0],
            "10-0": [8, 1],
            "11-0": [5, 0],

            
            "0-1": [10, 0],
            "1-1": [6, 1],
            "2-1": [0, 0],
            "3-1": [7, 1],

            "4-1": [1, 1],
            "5-1": [3, 1],
            "6-1": [9, 1],
            "7-1": [11, 1],

            "8-1": [2, 0],
            "9-1": [4, 1],
            "10-1": [8, 0],
            "11-1": [5, 1],
        }
    },
    {
        "edges": {
            "0-0": [1, 0],
            "1-0": [2, 0],
            "2-0": [3, 0],
            "3-0": [0, 0],

            "4-0": [5, 1],
            "5-0": [7, 1],
            "6-0": [4, 1],
            "7-0": [6, 1],

            "8-0": [9, 0],
            "9-0": [10, 0],
            "10-0": [11, 0],
            "11-0": [8, 0],

            
            "0-1": [1, 1],
            "1-1": [2, 1],
            "2-1": [3, 1],
            "3-1": [0, 1],

            "4-1": [5, 0],
            "5-1": [7, 0],
            "6-1": [4, 0],
            "7-1": [6, 0],

            "8-1": [9, 1],
            "9-1": [10, 1],
            "10-1": [11, 1],
            "11-1": [8, 1]
        }
    },
    {
        "edges": {
            "0-0": [6, 1],
            "1-0": [9, 1],
            "2-0": [4, 1],
            "3-0": [1, 1],

            "4-0": [8, 1],
            "5-0": [2, 1],
            "6-0": [10, 1],
            "7-0": [0, 1],

            "8-0": [5, 1],
            "9-0": [11, 1],
            "10-0": [7, 1],
            "11-0": [3, 1],

            
            "0-1": [6, 0],
            "1-1": [9, 0],
            "2-1": [4, 0],
            "3-1": [1, 0],

            "4-1": [8, 0],
            "5-1": [2, 0],
            "6-1": [10, 0],
            "7-1": [0, 0],

            "8-1": [5, 0],
            "9-1": [11, 0],
            "10-1": [7, 0],
            "11-1": [3, 0],
        }
    }
]



class Solver{
    constructor(cube){
        this.solvedCube = new Cube()
        this.cube = cube
        this.moves = []
    }
    solve(max_iter = 150){
        let i = 0
        while(i++<max_iter && !this.cube.isSolved()){
            this.iter()
        }
        console.log(this.countDifference(this.cube))
    }
    iter(iterations = 1, verbose = false){
        for(let i = 0; i < iterations; i++){
            // let possibleMoves = shuffle([..."UFRBLD"].flatMap(side => ["","'","2"].map(times => side + times))).slice(0,5)
            // let possibleMoves = [..."UFRBLD"].flatMap(side => ["","'","2"].map(times => side + times))
            let possibleMoves = algs.flatMap(alg=>new Algorithm(alg.moves).rotations())
            possibleMoves = [..."UFRBLD"].flatMap(side => ["","'","2"].map(times => side + times)).concat(possibleMoves)
            
            let bestMove = min_by(possibleMoves, move => this.countDifference(this.cube.clone().applyMoves(move)))
            this.cube.applyMoves(bestMove)
            this.moves.push(bestMove)
        }
        resetScene()
        if(verbose){
            console.log(this.moves)
            console.log(this.countDifference(this.cube))
        }
        return this
    }
    countDifference(cube){ //count number of pieces not in correct position
        let count = 0    
        for(let i = 0; i < 12; i++){
            if(cube.edges[i][0] != this.solvedCube.edges[i][0] ||
                cube.edges[i][1] != this.solvedCube.edges[i][1]){
                count++
            }
        }
        for(let i = 0; i < 8; i++){
            if(cube.corners[i][0] != this.solvedCube.corners[i][0] ||
               cube.corners[i][1] != this.solvedCube.corners[i][1]){
                count++
            }
        }
        return count
    }
    


}
class Algorithm{
    constructor(moves, effect){
        this.moves = moves
        this.effect = effect
    }
    rotate(xyz){ // "x z' y2"
        for(let rotation of xyz.split(" ")){
            if(rotation == "") continue
            let axle =  "xyz".indexOf(rotation[0])
            let times = rotation[1] == "2" ? 2 : rotation[1] == "'" ? 3 : 1
            for(let i = 0; i < times; i++){
                if(axle == 0){
                    this.moves = this.moves.replace(/[UFDB]/g, m => "UFDB"["FDBU".indexOf(m)])
                }else if(axle == 1){
                    this.moves = this.moves.replace(/[FRBL]/g, m => "FRBL"["RBLF".indexOf(m)])
                    if(this.effect){
                        this.effect.edges = this.effect.edges.map( cycle => {
                            return cycle.map(edge => {
                                return rotationTransformationTable[1][edge.join("-")]
                            })
                        })
                    }
                }else if(axle == 2){
                    this.moves = this.moves.replace(/[URDL]/g, m => "URDL"["RDLU".indexOf(m)])
                }else{
                    console.error("wtf is that")
                    console.log(rotation)
                    console.log(axle, times, xyz)
                }
            }
        }
        return this
    }
    rotations(){
        return [
            "", "y", "y2", "y'",
            "x", "x y", "x y2", "x y'",
            "x2", "x2 y", "x2 y2", "x2 y'",
            "x'", "x' y", "x' y2", "x' y'",
            "z", "z y", "z y2", "z y'",
            "z'", "z' y", "z' y2", "z' y'"
        ].map(rotation => new Algorithm(this.moves).rotate(rotation).moves)
    }
}




cube.scramble()

resetScene()

solver = new Solver(cube)