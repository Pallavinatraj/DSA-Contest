// Common Index of an Array

let A = [1, 2, 3, 4, 5, 6];
let B = [3, 3, 5];

// A.sort((a, b) => a - b);
// B.sort((a, b) => a - b);

let commonArry = [];
let i = 0;
let j = 0;

while (i < A.length && j < B.length) {
    if (A[i] === B[j]) {
        commonArry.push(A[i]);
        i++;
        j++;
    } else if (A[i] < B[j]) {
        i++;
    } else {
        j++;
    }
}

console.log(commonArry);
