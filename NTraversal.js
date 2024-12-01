// N traversal
function nTraversal(matrix) {
    let rs = 0;
    let re = matrix.length - 1;
    let ce = matrix.length - 1;
    let sum = "";

    for (let i = ce; i >= 0; i--) {
        sum += matrix[i][rs] + " ";
    }
    ce--;
    for (let i = ce; i >= 0; i--) {
        sum += matrix[i][re] + " ";
    }
    console.log(sum);
}

nTraversal([[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]);
