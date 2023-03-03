// Write a program to print all the prime number between 0 to 100 (0 and 100 included).

const checkPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}


for (let i = 0; i <= 100; i++) {
    if (checkPrime(i)) {
        console.log(i);
    }
}