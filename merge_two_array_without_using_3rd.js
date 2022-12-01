let arr = [-4,1,3,4,7,9 ];
let brr = [-1,0,2,5,6,8,10];

let N = arr.length;
let M = brr.length;

function partition( arr,  N,brr,  M,Pivot)
{
    let left = N - 1;
    let right = 0;
    while (left >= 0 && right < M)
    {
 
        if (arr[left] < Pivot)
            left--;
        else if (brr[right] > Pivot)
            right++;
        else
        {
            [arr[left],brr[right]]=[brr[right],arr[left]];
            left--;
            right++;
        }
    }
}
 
// Function to merge
// the two sorted array
function Merge(arr, N,brr, M)
{
    let left = 0;

    let right = 0;
 
    let index = -1;
 
    let Pivot = 0;
 
    while (index < N && left < N && right < M)
    {
 
        if (arr[left] < brr[right])
        {
            Pivot = arr[left++];
            index++;
        }
        else
        {
            Pivot = brr[right++];
            index++;
        }
        // index++;
    }
 
    while (index < N && left < N) {
        Pivot = arr[left++];
        index++;
    }
 
    while (index < N && right < M)
    {
        Pivot = brr[r++];
        index++;
    }
 
    partition(arr, N, brr,M, Pivot);
 
    arr.sort((a,b)=>a-b);
    brr.sort((a,b)=>a-b);
 
    // for (let i = 0; i < N; i++)
    // console.log(arr[i]);
 
    // for (let i = 0; i < M; i++)
    // console.log(brr[i]);
  console.log([...arr,...brr])//[ -4, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
}
 
Merge(arr, N, brr, M);