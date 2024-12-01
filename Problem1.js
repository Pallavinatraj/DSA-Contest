// Selection Sort
let arr = [3, 5, 0, 9, 8]
solve(5, arr)
function solve(N, arr) {
    for (let i = 0; i < N - 1; i++) {
        let min = i;
        for (let j = i + 1; j < N; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        swap(arr, i, min);
    }
    console.log(arr.join(" "));
}

function swap(arr, i, min) {
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}