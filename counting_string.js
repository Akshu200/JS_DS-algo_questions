

let a= "abcedasbcbeeee";

let arr= a.split('')
// console.log(arr)

let count={};


for(let i=0 ; i< arr.length ; i++){
    if(!count[arr[i]]){
    
        count[arr[i]] = 1;
    }
    else count[arr[i]]++;
}
console.log(count)   //{ a: 2, b: 3, c: 2, e: 5, d: 1, s: 1 }