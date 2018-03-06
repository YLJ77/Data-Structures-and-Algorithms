function findMaxCrossingSubArray(array, left, middle, right) {
    let leftSum = -Infinity;
    let rightSum = -Infinity;
    let sum = 0;

    for (let i=middle; i>=left; i-=1) {
        sum += array[i];
        if (sum >= leftSum) {
            leftSum = sum;
        }
    }

    sum = 0;

    for (let i=middle + 1; i<=right; i+=1) {
        sum += array[i];
        if (sum >= rightSum) {
            rightSum = sum;
        }
    }

    return leftSum + rightSum;

}

function findMaximumSubArray(array, left = 0, right = array.length) {
    if (right - left <= 1) {            // T(1) = Θ(1)
        return array[left];
    }

    let middle = Math.floor((left + right) / 2);
    let leftSum = findMaximumSubArray(array, left, middle);    // T(n/2)
    let rightSum = findMaximumSubArray(array, middle, right);  // T(n/2)
    let crossSum = findMaxCrossingSubArray(array, left, middle, right);  // Θ(n)

    return Math.max(crossSum, leftSum, rightSum);  // Θ(1)
}

/*
 
T(n) = { Θ(1)             if n = 1
         2T(n/2) + Θ(n)   if n > 1
 * */

module.exports = findMaximumSubArray;
