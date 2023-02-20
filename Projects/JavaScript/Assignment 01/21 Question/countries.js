const countries = ["India","England","Sri Lanka","Bangladesh"];

if (countries.includes("Ethiopia"))
{
    console.log("Ethiopia exists in Countries");
}
else
{
    console.log(`Countries list before adding Ethiopia is ${countries}`);
    countries.push("Ethiopia");
    console.log(`Countries list after adding Ethiopia is ${countries}`);
}