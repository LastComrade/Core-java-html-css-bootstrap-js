function findGradeInfo(grade) {
    grade = grade.toLowerCase();

    switch (grade) {
        case "a":
            return "Excellence";
        case "b":
            return "Very Good";
        case "c":
            return "Good";
        case "d":
            return "Poor";
        default:
            return "Fail";
    }
}

function gradeHandler() {
    var grade = document.getElementById("grade").value;
    var gradeInfo = findGradeInfo(grade);
    document.getElementById("gradeInfo").innerHTML = gradeInfo;
}

var address = [
    "Fairmount",
    "Hiran",
    "Powai"
]

for (a of address) {
    console.log(a);
}


const person = {
    name: "Konark Lohat",
    greet: function () {
        return "Hello from " + this.name;
    }
}

console.log(person.greet());



// String important
const message = "Hello";

console.log(message.substr(1, 2));
console.log(message.substring(1, 3));

// Palindrome checking
function isPalindromeByMethods(str) {
    return str === str.split("").reverse().join("");
}

function isPalindromeByTwoPointers(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left++] !== str[right--]) {
            return false;
        }
    }

    return false;
}

console.log(isPalindromeByMethods("naman"));
console.log(isPalindromeByTwoPointers("naman"));



// Arrow functions
const c = (a, b) => {
    console.log(this);
    return a * b;
}


function cFunction (a, b) {
    console.log("This is function this - ", this);
    return a * b;
} 

console.log(c(2, 3));
console.timeLog(cFunction(2, 3));