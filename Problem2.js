// Bubble Sort Problem
let arr = [3, 5, 0, 9, 8];
solve(5, arr);

function solve(N, arr) {
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    console.log(arr.join(" "));
}
function swap(arr, i, min) {
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}