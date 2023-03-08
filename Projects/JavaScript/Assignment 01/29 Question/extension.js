
// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

const fileName = prompt("Enter the file name with extension:"); // input: "abc.js"

const splitFileName = fileName.split("."); // ["abc", "js"]

const extension = splitFileName[splitFileName.length -1 ]; // "js"

console.log(`The extension of the file is ${extension}`);