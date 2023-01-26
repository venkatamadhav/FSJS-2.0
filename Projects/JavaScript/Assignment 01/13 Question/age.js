let age = prompt("Enter your Age:");
let age1 = Number(age);

if(age1>=18){
console.log("You are old enough to drive. Drive Safe!");
}
else{
    console.log(`You are still underage, you need to wait for another ${18-age1} to drive.`);
}
