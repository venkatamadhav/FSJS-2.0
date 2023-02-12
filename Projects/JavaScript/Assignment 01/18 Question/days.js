let month1 = prompt("Enter the month:");
month = month1.toLowerCase();
console.log(month);
if(month == "january" || month == 'march' || month == 'may' || month == 'july' || month == 'august' || month == 'october' || month == 'december')
{
    document.write(`${month1} has 31 days in it`);
}
else if(month == 'february')
{
    document.write(`${month1} has 29 days in it in a leap year`);
}
else if(month == 'april' || month == 'june' || month == 'september' || month == 'november')
{
    document.write(`${month1} has 30 days in it`);
}
else
{
    document.write("Please enter month name properly. Eg: march or March")
}