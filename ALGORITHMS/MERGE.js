function merge(left, right) {
    let arr = [];
    while(left.length > 0 &&　right.length > 0) {
        arr.push(left[0] < right[0] ? left.shift() : right.shift());
    }
    return arr.concat(left).concat(right);
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let middle = Math.floor(arr.length/2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

/*
 Suppose that our division of the problem yields a subproblems, each of which is 1/b the size of the original.(For merge sort, both a and b are 2). It takes time T(n/b) to solve one subproblem of size n/b, and so it takes time aT(n/b) to solve a of them. If we take D(n) time to divide the problem into subproblems and C(n) time to combine the solutions to the subproblems into the solution to the original problem, we get the recurrence
 

 T(n) = ｛ Θ(1)                     if n <= c
           aT(n/b) + D(n) + C(n)    if n > 1

Divide: D(n) = Θ(1)
Conquer: 2T(n/2)
Combine: C(n) = Θ(n)

 T(n) = ｛ Θ(1)                     if n <= c
           2T(n/2) + cn             if n > 1


Total number of levels: (i + 1) + 1 = lg2^(i + 1) + 1
Total cost = cn(lgn + 1) = cnlgn + cn
           = Θ(nlgn)
 */

module.exports = mergeSort;
