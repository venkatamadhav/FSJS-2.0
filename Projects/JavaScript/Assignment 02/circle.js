const circleElement = document.getElementById('circle');
const squareElement = document.getElementById('square');

let check = localStorage.getItem('check') || "circle2";

circleElement.addEventListener('click', circle1);
squareElement.addEventListener('click', square1);


function circle1(){
    check = "circle2";
    // Save in localStorage
    localStorage.setItem('check', check);
    circleElement.style.background = "#38CC77";
    circleElement.style.color = "#FFFFFF";
    squareElement.style.background = "#FFFFFF";
    squareElement.style.color = "#000000";
}

function square1(){
    check = "square2";
    localStorage.setItem('check', check);
    circleElement.style.background = "#FFFFFF";
    circleElement.style.color = "#000000";
    squareElement.style.background = "#38CC77";
    squareElement.style.color = "#FFFFFF";
}

console.log(circleElement);
console.log(squareElement);
const randomColor = () => {
    let val = '0123456789ABCDEF';
    let cons = '#';
    for (let i = 0; i < 6; i++) {
        cons = cons + val[Math.floor(Math.random() * 16)];
    }
    return cons;
};
function drawcircle(event){
    let circle = document.createElement("div");
    circle.classList.add("circle");
    // console.log(`X: ${event.clientX} Y: ${event.clientY}`)

    circle.style.top =(event.clientY-10) + "px";
    circle.style.left =(event.clientX-10)+ "px";
    circle.style.backgroundColor = randomColor();
    document.querySelector(".main").append(circle);
    setTimeout(() => {
        circle.remove();
      }, 1000);
}
function drawsquare(event){
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.left = (event.clientX-10) + "px";
    square.style.top = (event.clientY-10) + "px";
    square.style.backgroundColor = randomColor();
    document.querySelector(".main").append(square);
    setTimeout(() => {
        square.remove();
      }, 1000);
}

const drawShape = () => {
    if(check=="circle2")
    {
        drawcircle(event)
        circleElement.style.background = "#38CC77";
        circleElement.style.color = "#FFFFFF";
        squareElement.style.background = "#FFFFFF";
        squareElement.style.color = "#000000";
    }
    else if(check == "square2"){
        drawsquare(event)
        circleElement.style.background = "#FFFFFF";
        circleElement.style.color = "#000000";
        squareElement.style.background = "#38CC77";
        squareElement.style.color = "#FFFFFF";
    }
}

document.querySelector(".main").addEventListener("click", drawShape);