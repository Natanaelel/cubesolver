// Object.defineProperty(Array.prototype,"sum",{get:function(){if(this.every(e=>e+0==e)){return(this.reduce((a,b)=>a+b,0))};return(this.join("").split("").map(c=>c.charCodeAt()).reduce((a,b)=>a+b,0))}})
// Object.defineProperty(Array.prototype,"prc",{get:function(){return(this.reduce((a,b)=>a*b))}})

// Object.defineProperty(Array.prototype,"avg",{get:function(){return(this.map(x=>parseInt(x)).reduce((a,b)=>a+b,0)/this.length)}})
// Object.defineProperty(Array.prototype,"med",{get:function(){arr=this.map(x=>parseInt(x)).sort((a,b)=>a-b);return([(arr[arr.length/2-1]+arr[arr.length/2])/2,arr[Math.floor(arr.length/2)]][arr.length%2])}})

// Object.defineProperty(Array.prototype,"first",{get:function(){return(this[0])}})
// Object.defineProperty(Array.prototype,"last",{get:function(){return(this[this.length-1])}})


// Object.defineProperty(Array.prototype,"max",{get:function(){return(this.reduce((a,b)=>Math.max(a,b)))}})
// Object.defineProperty(Array.prototype,"min",{get:function(){return(this.reduce((a,b)=>Math.min(a,b)))}})

// function arrClone(val){

//     return Array.isArray(val) ? [...val].map(clone) : val
// }
// Object.defineProperty(Array.prototype,"cp",{get:function(){return(arrClone(this))}})


// Array.prototype.sort_by=function(func=x=>x){return([...this].sort((a,b)=>func(a)-func(b)))}

// Array.prototype.each_slice=function(len){let ans=[];for(let i=0;i<this.length;i+=len){ans.push(this.slice(i,i+len))};return(ans)}

// Array.prototype.rotate = function (len) {
//     len = (len%this.length+this.length)%this.length
//     return this.slice(len).concat(this.slice(0,len))
// }

// Array.prototype.mp = Array.prototype.map
// Array.prototype.m = function(func){return this.map(x=>func(x))}

// Object.defineProperty(Array.prototype,"uniq",{
//     get:function(){
//         let arr = []
//         this.forEach(e => {
//             if(!arr.includes(e)){
//                 arr.push(e)
//             }
//         });
//         return(arr)
//     }
// })


const min_by=function(array, func=x=>x){
    let min = array[0]
    let minval = func(array[0])
    array.slice(1).forEach(e=>{
        let val = func(e)
        if(val < minval){
            min = e
            minval = val
        }
    })
    return(min)
}

// Array.prototype.max_by=function(func=x=>x){
//     let max = this[0]
//     let maxval = func(this[0])
//     this.slice(1).forEach(e=>{
//         let val = func(e)
//         if(val > maxval){
//             max = e
//             maxval = val
//         }
//     })
//     return(max)
// }
// Object.defineProperty(Array.prototype,"chr",{get:function(){return(this.map(c=>String.fromCharCode(c)))}})

// Object.defineProperty(Array.prototype,"tp",{get:function(){
//     let arr = []
//     for(let i=0;i<this[0].length;i++){
//         let row = []
//         for(let j=0;j<this.length;j++){
//             row.push(this[j][i])
//         }
//         arr.push(row)
//     }
//     return arr
// }})

// Object.defineProperty(Array.prototype,"j",{get:function(){return(this.flat().join``)}}) // join("")
// Object.defineProperty(Array.prototype,"s",{get:function(){return(this.map(c=>String.fromCharCode(c)).join(""))}})

// Object.defineProperty(Array.prototype,"i",{get:function(){return(this.map(e=>parseInt(e)))}})
// Object.defineProperty(Array.prototype,"f",{get:function(){return(this.map(e=>parseFloat(e)))}})



// Array.prototype.log = function(){
//     console.log(this.valueOf())
//     return this
// }

// Array.prototype.debug = function(func){
//     if(func){
//         console.log(func(this))
//         return this
//     }else{
//         console.log(this)
//         return this
//     }
// }

const shuffle = function(array){
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array
}
// Array.prototype.repeat = function(times){
//   let arr = []
//   for(let i = 0; i < times; i++){
//     arr = arr.concat(this)
//   }
//   return arr
// }


// Object.defineProperty(Array.prototype, "hash", {get: function(){return Object.fromEntries(this)}})

// Array.prototype.take = function(length=10){return this.slice(0,length)}
// Array.prototype.drop = function(length=10){return this.slice(length)}

// Object.defineProperty(Array.prototype, "compact", {get: function(){return this.filter(x=>x !== null && x !== undefined)}})

// Array.prototype.select = function(func = v => v){return this.filter(func)}
// Array.prototype.reject = function(func = v => v){return this.filter(x => !func(x))}


// Array.prototype.intersect = function(other = []){
//     let newArr = [];
//     for(const value of this){
//         if(other.includes(value))newArr.push(value)
//     }
//     return newArr
// }

// Array.prototype.zip = function(other = []){
//     return this.flatMap((x,i)=>[x,other[i]])
// }


// Object.defineProperty(Array.prototype, "transpose", {get: function(){
//     let arr = []
//     let maxLength = Math.max.apply(Math, this.map(x=>x.length))
//     for(let x = 0; x < maxLength; x++){
//         let row = []
//         for(let y = 0; y < this.length; y++){
//             row.push(this[y][x])
//         }
//         arr.push(row)
//     }
//     return arr
// }})