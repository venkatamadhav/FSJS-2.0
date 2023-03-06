// Write a program to print the given patterns using the loops-
// a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// *
// **
// ***
//
// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// ***
// ***
// ***
//
// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
//  *
//  ***
//  *****


const patternA = (n) => {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += "*";
        }
        console.log(str);
    }
}

const patternB = (n) => {
    for (let i = 1; i <= n; i++) {
        const str = "*".repeat(n);
        console.log(str);
    }
}

// pyramid pattern
const patternC = (n) => {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= n - i; j++) {
            str += " ";
        }
        for (let k = 1; k <= 2 * i - 1; k++) {
            str += "*";
        }
        console.log(str);
    }

}


const number = parseInt(prompt("Enter a Positive Integer:")); //Converting the String to Number

patternA(number);
console.log("_________________________");
patternB(number);
console.log("_________________________");
patternC(number);

