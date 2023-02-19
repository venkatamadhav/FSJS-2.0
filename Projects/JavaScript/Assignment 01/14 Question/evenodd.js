let number = parseInt(prompt("Enter a number: (without decimals)"));
let remainder = number%2;
if(remainder==0){
    document.getElementById("main").innerText = "The entered number is Even";
}
else if(remainder==1){
    document.getElementById("main").innerText = "The entered number is Odd";
}
else{
    document.getElementById("main").innerText = "Please enter a proper number";
}