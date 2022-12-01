


let arr1=[1,3,5,7,9];
let arr2=[-2,2,4,6,8,10,18];
let arr3=[];

let a1=a2=a3=0;

while(a1<arr1.length && a2<arr2.length){
    
    if(arr1[a1]<arr2[a2]){
        arr3[a3]=arr1[a1];
        a1++;
        a3++;
    }
    else{
        arr3[a3]=arr2[a2];
        a2++;
        a3++;
    }
}
while(a1<arr1.length){
     arr3[a3]=arr1[a1];
        a1++;
        a3++;
}
while(a2<arr2.length){
     arr3[a3]=arr2[a2];
        a2++;
        a3++;
}

console.log(arr3)   //-->/output = [ -2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 18 ]