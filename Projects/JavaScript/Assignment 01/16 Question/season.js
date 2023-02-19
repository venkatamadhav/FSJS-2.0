let month = prompt("Please Enter the month:");
let month1 = month.toLowerCase();
const Autumn = ["september","october","november","sept","oct","nov"];
const Winter = ["december","january","february","dec","jan","feb"];
const Spring = ["march","april","may","mar","apr"];
const Summer = ["june","july","august","jun","jul","aug"];

if(Autumn.includes(month1))
{
    document.getElementById("main").innerText = "Hey!! This is Autumn Season";
}
else if(Winter.includes(month))
{
    document.getElementById("main").innerText = "Hey!! This is Winter Season";  
}
else if(Spring.includes(month))
{
    document.getElementById("main").innerText = "Hey!! This is Spring Season";
}
else if(Summer.includes(month))
{
    document.getElementById("main").innerText = "Hey!! This is Summer Season";
}
else{
    document.getElementById("main").innerText = "Please enter the momth properly. For ex: september or sept";
}
