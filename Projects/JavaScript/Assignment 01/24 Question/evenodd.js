let Even = [];
let Odd = [];

for (let i=0;i<=100;i++){
    if(i % 2 == 0){
        Even.push(i);
    }
    else{
        Odd.push(i);
    }
}
console.log(`The Even numbers are ${Even}`);
console.log(`The Odd numbers are ${Odd}`);