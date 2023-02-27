const calculateBMI = (weight, height) => {
    return weight / (height * height);
}

const checkBMI = (bmi) => {
    if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Normal weight";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}


const weight = parseInt(prompt("Enter your weight in Kg:"));
const height = parseInt(prompt("Enter your height in m:"));

const bmi = calculateBMI(weight, height);

console.log(`Your BMI is ${bmi}`);

const result = checkBMI(bmi);
console.log(`You are ${result}`);