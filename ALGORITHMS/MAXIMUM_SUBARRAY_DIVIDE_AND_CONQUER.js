function findMaxCrossingSubArray(array, left, middle, right) {
    let leftSum = -Infinity;
    let rightSum = -Infinity;
    let sum = 0;

    for (let i=middle; i>=left; i-=1) {
        if (sum + array[i] >= leftSum) {
            leftSum = sum + array[i];
        }
        sum += array[i];
    }

    sum = 0;

    for (let i=middle + 1; i<right; i+=1) {
        if (sum + array[i] >= rightSum) {
            rightSum = sum + array[i];
        }
        sum += array[i];
    }

    return leftSum + rightSum;

}

function findMaximumSubArray(array, left = 0, right = array.length) {
    if (right - left <= 1) {            // T(1) = Θ(1)
        return array[left];
    }

    let middle = Math.floor((left + right) / 2);
    let leftSum = findMaximumSubArray(array, left, middle);
    let rightSum = findMaximumSubArray(array, middle, right);
    let crossSum = findMaxCrossingSubArray(array, left, middle, right);

    return Math.max(crossSum, leftSum, rightSum);
}

module.exports = findMaximumSubArray;
