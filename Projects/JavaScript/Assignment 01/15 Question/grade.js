let marks = Number(prompt("Hey There, Please enter your marks:"));

if(marks>=80)
{
    document.getElementById("main").innerText = "Congrats!! Your Grade is A";
}
else if(marks>=70 && marks<=79)
{
    document.getElementById("main").innerText = "Your Grade is B";
}
else if(marks>=60 && marks<=69)
{
    document.getElementById("main").innerText = "Your Grade is C";
}
else if(marks>=50 && marks<=59)
{
    document.getElementById("main").innerText = "Your Grade is D";
}
else
{
    document.getElementById("main").innerText = "You Need to improve, Your grade is E";
}
