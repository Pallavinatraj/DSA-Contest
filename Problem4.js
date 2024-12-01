// Make Leaderboard

let nameOfStudents = ["rancho", "chatur", "raju", "farhan", "virus", "joy"];
let marksOfStudents = [45, 32, 30, 28, 32, 45];
nameOfSudntsSort(nameOfStudents);
marksOfSudntsSort(marksOfStudents);
printRank()

function nameOfSudntsSort(nameOfStudents) {
    for (let i = 0; i < nameOfStudents.length - 1; i++) {
        for (let j = 0; j < nameOfStudents.length - i - 1; j++) {
            if (compareOfNames(nameOfStudents[j], nameOfStudents[j + 1]) === true) {
                swap(nameOfStudents, j, j + 1);
            }
        }
    }
}
function compareOfNames(str1, str2) {
    let min = Math.min(str1.length, str2.length);
    for (let i = 0; i < min; i++) {
        if (str1[i] != str2[i]) {
            if (str1[i] > str2[i]) {
                return true;
            }
            else {
                return false;
            }
        }
        return false;
    }
}
function marksOfSudntsSort(marksOfStudents) {
    for (let i = 0; i < marksOfStudents.length - 1; i++) {
        for (let j = 0; j < marksOfStudents.length - i - 1; j++) {
            if ((marksOfStudents[j] < marksOfStudents[j + 1])) {
                swap(marksOfStudents, j, j + 1);
            }
        }
    }
}

function swap(nameOfStudents, marksOfStudents, i, min) {
    var temp = nameOfStudents[i];
    nameOfStudents[i] = nameOfStudents[min];
    nameOfStudents[min] = temp;

    var temp1 = marksOfStudents[i];
    marksOfStudents[i] = marksOfStudents[min];
    marksOfStudents[min] = temp1;

}

function printRank(nameOfStudents, marksOfStudents) {
    let previous = -1;
    let rank = 1;
    let count = 0;
    for (let i = 0; i < marksOfStudents.length; i++) {
        if (marksOfStudents[i] == previous) {
            console.log(rank + " " + nameOfStudents[i]);
        } else {
            rank += count;
            console.log(rank + " " + nameOfStudents[i]);
            count = 0;
        }
        count++;
        previous = marksOfStudents[i];
    }
}






