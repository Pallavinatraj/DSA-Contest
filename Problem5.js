// Sort out!

let arr = [4, 5, 3, 7, 1]; //1 3 4 5 7
let index = []; //4 2 0 1 3 
sortOut(arr, index);


for (let i = 0; i < arr.length; i++) {
    index.push(i);
}
function sortOut(arr, index) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                swap(index, j, j + 1);
            }
        }

    }
    console.log(index);
}
function swap(arr, i, min) {
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
}