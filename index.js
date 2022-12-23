
//**********sorting using third variable *********

// let arr1 = [-1,3,6,9,11,13]
// let arr2 = [-2,0,2,5,7,8,10,16]
// let arr3 = []

// let a1=a2=a3=0;

// while(a1<arr1.length){
//     // console.log('working');
//     if(a1<arr1.length && a2<arr2.length){

//         if(arr1[a1]<arr2[a2]){
//             arr3[a3] = arr1[a1]
//             a1++,
//             a3++;
//         }
//         else{
//             arr3[a3] = arr2[a2]
//             a2++,
//             a3++;
//         }
//     }
    

// }
// while(a2<arr2.length){
//     if(a2<arr2.length){
//         arr3[a3] = arr2[a2]
//         a2++,
//         a3++;
//     }
// }

// console.log(arr3)

//******two sorted array without third variable******

// let arr1 = [-1,3,6,9,11,13]
// let arr2 = [-2,0,2,5,7,8,10,16]

// let i=j=0;

// while(i<arr1.length){

//     if(arr1[i]>arr2[j]){

//         [arr1[i], arr2[j]] =  [arr2[j], arr1[i]]
        
//         fixingArray(arr2)

//     }
//     i++

// }
// console.log(arr1.concat(arr2))

// function fixingArray(arr2){

//     for(let i=1 ;i<arr2.length ;i++){

//         if(arr2[i]<arr2[i-1])
//         {
//             [arr2[i],arr2[i-1]] = [arr2[i-1],arr2[i]]
//         }

//     }

// }

// ********** counting element ***************

// let arr=[2,1,3,4,5,6,9,7,5,5,1]

// let count={};

// arr.forEach((el)=> {
//     count[el] = count[el] ? (count[el]+1) :1;
// })

// console.log(count)


// ************** count string ****************** 
// let a = "abcedasbcbeeee";

// let arr = a.split('');
// let count ={};
// for(let i=0; i<arr.length ;i++){
//     if(count[arr[i]]){
//         count[arr[i]]++
//     }
//     else{
//         count[arr[i]]=1
//     }
// }

// console.log(count)


//******** chechking String is palidrome or NOT ********

// function pali(arr){

//     let res=arr.toString();
//     console.log(res)
    

//     let left = 0;
//     let right = res.length-1;

//     while(left<right){

//         if(res[left] !== res[right]) return false
//         left++;
//         right--;

//     }
//     return true

// }

// let r=pali(31213)
// console.log(r)

// ******* Removing Duplicates in element ***********

// let arr=[121,131,123,145,123]

// let res=[...new Set(arr)]
// console.log(res)

// ************** Making Pair ***********

// function dist(arr, n){

//     let res=1;

//     for(let i=1; i<n ; i++)
//     {
//         let j=0;
//         for(j=0 ; j<i ;j++)
//         {
//             if(arr[i]===arr[j])
//             {
//                 break;
//             }
//         }

//         if(i === j)
//         {
//             res++
//         }
//     }
//     return res;

// }
// let arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10]
// let n = arr.length

// let r= dist(arr, n)
// console.log(r)


///******************************* */
// let arr=[2,1,3,4,5,6,9,7,5,5,1]

// let count={};

// arr.forEach((el)=> {
//     count[el] = count[el] ?{ (count[el]:count[el])} :1;
// })

// console.log(count)

