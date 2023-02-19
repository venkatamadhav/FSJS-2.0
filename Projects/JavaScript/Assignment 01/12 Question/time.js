const date = new Date();

let year = date.getFullYear();

let month = date.getMonth() + 1; //Here we get hours in single digit some times hence using function and it January is 0 hence adding 1 

let date1 = date.getDate();

let hour = date.getHours();

let mins = date.getMinutes(); //Here we get mins in single digit some times hence using function

function addzero(number){
    if (number<=9){
        number = '0' + number;
        return number;
    }
    return number;
}

const format1 = `${year}-${addzero(month)}-${addzero(date1)} ${addzero(hour)}:${addzero(mins)}`
const format2 = `${addzero(date1)}-${addzero(month)}-${year} ${addzero(hour)}:${addzero(mins)}`
const format3 = `${addzero(date1)}/${addzero(month)}/${year} ${addzero(hour)}:${addzero(mins)}`

console.log(`Date Format 1 ${format1}`)
console.log(`Date Format 2 ${format2}`)
console.log(`Date Format 3 ${format3}`)