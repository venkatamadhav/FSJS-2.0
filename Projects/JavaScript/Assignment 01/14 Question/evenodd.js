let number = parseInt(prompt("Enter a number:"));
let remainder = number%2;
if(remainder==0){
    document.write("The entered number is Even");
}
else if(remainder==1){
    document.write("The entered number is Odd");
}
else{
    document.write("Please enter a proper number");
}