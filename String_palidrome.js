// function rev(arr){
    
//     let newrev = arr.split('').reverse().join('')
//     // console.log(newrev);
    
//  return newrev.toLowerCase() === arr.toLowerCase()
    
// }

// console.log(rev('11112'))

function rev(arr){
    
    let newArr = arr.toLowerCase();
    
    let left =0;
    let right = newArr.length-1;
    
    while(left<right){
        if(newArr[left] !== newArr[right]) return false
        left++;
        right--;
    }
    return true;
//   console.log(newArr)
}

let n = rev('MOM')
console.log(n)