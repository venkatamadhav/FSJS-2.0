const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//Sort the array and find the min and max age

ages.sort((a,b) => a-b);

const minage = ages[0];
const maxage = ages[ages.length-1];
console.log(`The minimum age is ${minage} and maximum age is ${maxage}`);
//Find the median age(one middle item or two middle items divided by two)

const middle = Math.floor(ages.length/2);
const median = middle % 2 === 0 ? (ages[middle]+ages[middle-1])/2 : ages[middle];
console.log(`The Median is ${median}`);
//Find the average age(all items divided by number of items)
let sum = 0;
newages = [...ages];
newages.forEach(element => {
    sum = sum+element;
    return sum;
});
let average = sum/ages.length;
console.log(`The average is ${average}`);
//Find the range of the ages(max minus min)
console.log(`The range of ages is ${ages[0]}-${ages[ages.length-1]}`);

//Compare the value of (min - average) and (max - average), use abs() method

let minavg = Math.abs(minage - average);
let maxavg = Math.abs(maxage - average);
console.log(`The difference between Minimum and average is ${minavg}`);
console.log(`The difference between Maximum and average is ${maxavg}`);
