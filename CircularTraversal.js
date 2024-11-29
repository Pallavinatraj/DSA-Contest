 // Circular Traversal

function circularTraversal(matrix) {
    let rs = 0;
    let re = matrix.length - 1;
    let ce = matrix.length - 1;
    let sum = "";

    for (let i = ce; i >= 0; i--) {
        sum += matrix[i][rs] + " ";
    }

    rs++;
    for (let i = rs; i < re; i++) {
        sum += matrix[0][i] + " ";
    }

    for (let i = 0; i < ce; i++) {
        sum += matrix[i][re] + " ";
    }

    for (let i = re; i > 0; i--) {
        sum += matrix[re][i] + " ";
    }

    console.log(sum);
}

circularTraversal([[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]);
