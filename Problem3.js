// New Sorting Algorithm
//if a%k < b%k a comes first before b 
//If a%k = b%k same as original array

let arr = [12, 18, 17, 65, 46];
solve(5, arr, 6);

function solve(N, arr, k) {
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - i - 1; j++) {
            if (arr[j] % k > arr[j + 1] % k) {
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


