let arr = [2, 5, 1, 4, 2];
solve(5, arr);

function solve(N, arr) {
    let evenArr = [];
    let oddArr = [];

    for (let i = 0; i < N; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        } else {
            oddArr.push(arr[i]);
        }
    }
    bubbleSort(evenArr);
    bubbleSort(oddArr);
    let sortedArr = [...oddArr, ...evenArr];
    console.log(sortedArr.join(" "));
}

function bubbleSort(arr) {
    let N = arr.length;
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
