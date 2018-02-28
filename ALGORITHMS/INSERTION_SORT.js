function insertionSort(arr) {                  // cost   times
    let key,i;                                 
    for (let j=1; j<arr.length; j++) {         // c1     n
        key = arr[j];                          // c2     n - 1
        i = j - 1;                             // c4     n - 1
        
                                               //        n
        while (i > 0 && arr[i] > key) {        // c5     ∑tj 
                                               //       j=2

                                               // c6     n 
            arr[i + 1] = arr[i];               //        ∑(tj - 1)
                                               //       j=2
                                               
                                               // c7     n
            i-=1;                              //        ∑(tj - 1)
                                               //       j=2
        }
        arr[i + 1] = key;                      // c8     n - 1
    }
    return arr;
}

module.exports = insertionSort;
