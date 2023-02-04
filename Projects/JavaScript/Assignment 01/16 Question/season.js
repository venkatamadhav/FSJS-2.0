let month1 = prompt("Please Enter the month:");
// let month1 = month.toLowerCase();
if(month1 == september || month1 == october || month1 == november)
{
    document.write("Hey!! This is Autumn Season");
}
else if(month1 == december || month1 == january || month1 == february)
{
    document.write("Hey!! This is Winter Season");
}
else if(month1 == march || month1 == april || month1 == may)
{
    document.write("Hey!! This is Spring Season");
}
else if(month1 == june || month1 == july || month1 == august)
{
    document.write("Hey!! This is Summer Season");
}
else{
    document.write("Please enter the momth properly. For ex: september");
}