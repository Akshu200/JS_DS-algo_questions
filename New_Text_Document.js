// const arr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];

// let count=0;

// arr.forEach((ele, index)=>{
    
//     if(arr.indexOf(ele) === index){
//         count++;
//     }
// })

// console.log(count)

// function find_duplicate_in_array(arra1) {
//         const object = {};
//         const result = [];

//         arra1.forEach(item => {
//           if(!object[item])
//               object[item] = 0;
//             object[item] += 1;
//         })

//         for (const prop in object) {
//           if(object[prop] >= 2) {
//               result.push(prop);
//           }
//         }

//         return result;

//     }

// let res=find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]);
// console.log(res)



// function eliminateDuplicates(arr) {
//   var i,
//       len = arr.length,
//       out = [],
//       obj = {};

//   for (i = 0; i < len; i++) {
//     obj[arr[i]] = 0;
//   }
//   for (i in obj) {
//     out.push(i);
//   }
//   return out;
// }

// console.log(eliminateDuplicates([1,6,7,3,6,8,1,3,4,5,1,7,2,6]))


// var arr=[];

// obj={};
// var fruit=['apple', 'banana' , 'kela', 'jamun'];
// var label= 'fruits';

// for(var i=0 ; i<fruit.length ; i++){
//     obj['data'] = fruit[i];
//     obj['label'] = label;
//     arr.push(obj)
// }

// console.log(arr)

// var arr = [];

// var fruits = ['banana', 'apple', 'mango'];
// var label = 'Fruits';

// // for (var i=0; i<fruits.length; i++){
// //     var obj = {};
// //     obj['data'] = fruits[i];
// //     obj['label'] = label;
// //     arr.push(obj);
// // }
// var a = fruits.map(fruit => ({
//     data: fruit,
//     label: label
// }));

// console.log(a);