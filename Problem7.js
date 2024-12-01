// Such Pair Returns
let A = [5, 2];
let B = [3, 4, 0, 2, 7];

A.sort((a, b) => a - b);
B.sort((a, b) => a - b);

let commonArry = [];
let i = 0;
let j = 0;
let count = 0;
while (i < A.length && j < B.length) {
    if (A[i] === B[j]) {
        commonArry.push(A[i]);
        i++;
        j++;
        count++;
    } else if (A[i] < B[j]) {
        i++;
    } else {
        j++;
    }
}
console.log(count);