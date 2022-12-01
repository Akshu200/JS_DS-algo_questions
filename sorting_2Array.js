let arr1=[-1,0,3,3,5,7,9];
let arr2=[-2,4,6,8,10,10,11,12];

let n=arr1.length;
let m=arr2.length;

let i=j=0;
while(i<n){
    
    if(arr1[i]>arr2[j])
    {
            //  let temp=arr1[i];
            // arr1[i]= arr2[j];
            // arr2[j]= temp
            
         [  arr1[i], arr2[j] ] =  [  arr2[j], arr1[i] ]
            
            adjustarray(arr2);
        
    }
    i++;
}

let newarr =([...arr1,...arr2])
let uniq = [...new Set(newarr)]
console.log(uniq)
    
function adjustarray(arr2){
    for(let i=1; i<m ; i++)
    {
        if(arr2[i]<arr2[i-1])
        {
            [  arr2[i], arr2[i-1] ] =  [  arr2[i-1], arr2[i] ]
        }
    }
}

// [ -2, -1, 0, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
// output of array