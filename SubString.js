// Substrings starting with K
// Broute Force Approach


function subString(name) {
    let sub = [];
    for (let i = 0; i < name.length; i++) {
        if (name[i] === "a") {
            for (let j = i + 1; j <= name.length; j++) {
                sub.push(name.slice(i, j));
            }
        }
    }
    console.log(sub);
}

name = "aman";
subString(name);