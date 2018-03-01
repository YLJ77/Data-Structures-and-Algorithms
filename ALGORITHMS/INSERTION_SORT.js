function insertionSort(arr) {                  // cost   times
    let key,i;                                 
    for (let j=1; j<arr.length; j++) {         // c1     n
        key = arr[j];                          // c2     n - 1
        i = j - 1;                             // c4     n - 1
        
                                               //        n
        while (i > 0 && arr[i] > key) {        // c5     ∑tj 
                                               //       j=2

                                               //        n 
            arr[i + 1] = arr[i];               // c6     ∑(tj - 1)
                                               //       j=2
                                               
                                               //        n
            i-=1;                              // c7     ∑(tj - 1)
                                               //       j=2
        }
        arr[i + 1] = key;                      // c8     n - 1
    }
    return arr;
}

/*
                                        n       n             n
 T(n) = c1n + c2(n - 1) + c4(n - 1) + c5∑tj + c6∑(tj - 1) + c7∑(tj - 1) + c8(n - 1)
                                       j=2     j=2           j=2

the best case occurs if the array is already sorted. For each j = 2,3,...,n, we thenfind that A[i] <=  key in line 5 when i has its initial value of j - 1. Thus tj = 1 for j = 2,3,...,n, and the best-case running time is

T(n) = c1n + c2(n - 1) + c4(n -1) + c5(n - 1) + c8(n -1)
     = (c1 + c2 + c4 + c5 + c8)n - (c2 + c4 + c5 + c8)
     = an + b  // linear function


If the array is in reverse sorted order --- that is, in decreasing order --- the worst case results. We must compare each element A[j] with each element in the entire sorted subarray A[1..j - 1], and so tj = j for j = 2,3,...,n.
 

 n
 ∑j = n(n + 1) / 2 - 1
j=2

and

 n
 ∑j = n(n - 1) / 2
j=2


T(n) = c1n + c2(n - 1) + c4(n - 1) + c5(n(n + 1) / 2 - 1) + c6(n(n - 1) / 2) + c7(n(n - 1) / 2) + c8(n - 1)
     = (c5/2 + c6/2 + c7/2)n^2 + (c1 + c2 + c4 + c5/2 - c6/2 - c7/2 + c8)n - (c2 + c4 + c5 + c8)
     = an^2 + bn + c   // quadratic function
*/

module.exports = insertionSort;
