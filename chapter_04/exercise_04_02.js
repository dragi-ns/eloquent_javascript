function reverseArray(array) {
    let reversedArray = [];
    for (let i = 0, j = array.length - 1; i < array.length; ++i, --j) {
        reversedArray[i] = array[j];
    }
    return reversedArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0, j = array.length - 1; i < j; ++i, --j) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseArray(nums));
console.log(nums);
reverseArrayInPlace(nums);
console.log(nums);
