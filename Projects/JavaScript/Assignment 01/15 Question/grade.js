let marks = Number(prompt("Hey There, Please enter your marks:"));

if(marks>=80)
{
    document.write("Congrats!! Your Grade is A");
}
else if(marks>=70 && marks<=79)
{
    document.write("Your Grade is B");
}
else if(marks>=60 && marks<=69)
{
    document.write("Your Grade is C");
}
else if(marks>=50 && marks<=59)
{
    document.write("Your Grade is D");
}
else
{
    document.write("You Need to improve, Your grade is E");
}
