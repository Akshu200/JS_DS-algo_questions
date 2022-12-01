const arr =[1,1,2,3,4,5,6,7,8];

const count ={};

arr.forEach((el)=>{
    count[el]=count[el] ? (count[el]+1) : 1;
    
})

const res =(count);
console.log(res) //{ '1': 2, '2': 1, '3': 1, '4': 1, '5': 1, '6': 1, '7': 1, '8': 1 }

