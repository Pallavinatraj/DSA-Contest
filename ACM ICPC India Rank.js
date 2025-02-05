function ACM_ICPC_India_Rank(arr) {
    let output = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "India") {
            output = i + 1;
            break;
        }
    }

    if (output === -1) {
        console.log("India is not in the ranking.");
    } else {
        console.log(`Our India Rank is ${output} in ICPC`);
    }
}


let arr = ["Russia", "USA", "Japan", "China", "India"];
ACM_ICPC_India_Rank(arr);
