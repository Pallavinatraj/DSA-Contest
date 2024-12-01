function arePermutations(s1, s2) {
    if (s1.length !== s2.length) {
        return "No";
    }

    let charCount1 = {};
    let charCount2 = {};

    for (let char of s1) {
        charCount1[char] = (charCount1[char] || 0) + 1;
    }

    for (let char of s2) {
        charCount2[char] = (charCount2[char] || 0) + 1;
    }
    for (let key in charCount1) {
        if (charCount1[key] !== charCount2[key]) {
            return "No";
        }
    }

    return "Yes";
}

let s1 = "amit";
let s2 = "mtia";

console.log(arePermutations(s1, s2)); 
