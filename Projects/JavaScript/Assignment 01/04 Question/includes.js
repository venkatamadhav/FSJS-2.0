let sentence ="This is a sentence to check if the words are included in the text or not included. This uses includes() to check the condition and return the result based on that"

let word1 = "text"
let word2 = "user"

console.log(`Is the word 'text' included in the sentence? ${sentence.includes(word1) ? 'Yes' : 'No'}`);
console.log(`Is the word 'user' included in the sentence? ${sentence.includes(word2) ? 'Yes' : 'No'}`);
