//customMap
const numbers = [2,4,8,9,10]


Array.prototype.customMap = function(callback){
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callback(this[i]));
    }
    return resultArray;
}


console.log(numbers.customMap(function(item){
    return item*2
}))

//customFilter

Array.prototype.customFilter = function(callback) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            resultArray.push(this[i]);
        }
        
    }
    return resultArray;
}

console.log(numbers.customFilter(function(item){
    if (item>4) {
        return item
    }
}))

//customeSome
Array.prototype.customSome = function(callBack) {

    for (let i = 0; i < this.length; i++) {
        const result = callBack(this[i]);
        if(result){
            return true
        }else{
            return false
        }
    }

}

console.log(numbers.customSome((element) => element % 2 === 0))


//customEvery

Array.prototype.customEvery = function(callback) {
    
 for (let i = 0; i < this.length; i++) {

   if (!callback(this[i])) {
     return false;
   }
 }

 return true;
}
console.log(numbers.customEvery((element) => element % 2 === 0))

//customReduce

Array.prototype.customReduce = function(callback,startValue) {
    if (startValue === undefined) {
        throw new TypeError("No Start Value")
    }
    let startV = startValue
    for (let i = 0; i < this.length; i++) {

       startV=callback(startV,this[i]);
    }

    return startV
}


console.log(numbers.customReduce((acc , current)=>{
    return acc+current
},0))




//customForeach

Array.prototype.customForeach = function(callback) {
      for (let i = 0; i < this.length; i++) {
        callback(this[i]);
      }
};
    
 numbers.customForeach(function(element){
     console.log(element)
 })

