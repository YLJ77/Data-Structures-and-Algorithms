/*
 在一个有序的数组中寻找是否存在某个值

    n
    ↓
    n/2
     ↓
    n/4
     ↓
     .
     .
     1


 n/2^k = 1 => k = log2n => O(lgn)

 */

// Iterative
function binarySearch(arr, x) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === x) {
            return mid;
        } else if(x < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}


// Recursive
function binarySearchR(arr, start, end, x) {
    if (start > end) return -1;
    let mid = (start + end) / 2;
    if (x === arr[mid]) {
        return mid;
    } else if (x < arr[mid]) {
        return binarySearchR(arr, start, mid - 1, x);
    } else {
        return binarySearchR(arr, mid + 1, end, x);
    }
}
