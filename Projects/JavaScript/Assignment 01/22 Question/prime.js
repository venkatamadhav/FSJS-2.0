const number = parseInt(prompt("Enter a Positive Integer:")); //Converting the String to Number
prime = true;
if (number == 1){
    document.write(`1 is neither a composite number not prime number. Please enter another number`);
    console.log("1 is neither a composite number not prime number. Please enter another number");
}
else if (number > 1){ 
    for (let i=2; i<number;i++){ //Checking if number can be divided by any other number less than itself
        if(number%i == 0){
            prime = false;
            break;
        }
    }
    if (prime){
        document.write(`${number} is a prime number`);
        console.log(`${number} is a prime number`);
    }
    else{
        document.write(`${number} is not a prime number`);
        console.log(`${number} is not a prime number`);
    }
}