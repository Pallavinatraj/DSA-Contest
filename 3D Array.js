 // 3D Array
let sum = "";
function threeDArray() {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            for (let k = 0; k < input.length; k++) {
                sum += input[i][j][k] + " ";
            }
        }
    }
    console.log(sum);
}


input = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
]
threeDArray(input);
