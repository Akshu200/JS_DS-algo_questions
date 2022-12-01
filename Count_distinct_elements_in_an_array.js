function countDistinct(arr, n)
{
    let res = 1;
 
    // Pick all elements one by one
    for (let i = 1; i < n; i++) {
        let j = 0;
        for (j = 0; j < i; j++)
            if (arr[i] === arr[j])
                break;
 
        // If not printed earlier, then print it
        if (i === j)
            res++;
    }
    return res;
}
 
// Driver program to test above function
    let arr = [ 12, 10, 9, 45, 2, 10, 10, 45 ];
    let n = arr.length;
    document.write(countDistinct(arr, n));
 