// Circular Traversal

function spiralTraversal(matrix) {
    let rs = 0;
    let re = matrix.length - 1;
    let ce = matrix.length - 1;
    let sum = "";

    for (let i = rs; i < re; i++) {
        sum += matrix[i][rs] + " ";
    }

    for (let i = 0; i <= re; i++) {
        sum += matrix[re][i] + " ";
    }

    for (let i = re; i >= 0; i--) {
        sum += matrix[i][re] + " ";
    }

    console.log(sum);
}

spiralTraversal([[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12]]);
