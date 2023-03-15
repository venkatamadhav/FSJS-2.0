## DOM Assignment 02:

### Task 1: ![Task 1](./task1Output.png)

#### Solution:

```
let heading = document.querySelectorAll(".accordian h3");
heading = [...heading];
heading.forEach(h3 => {
    h3.style.backgroundColor = "#dadaf8";
    let para = h3.nextElementSibling;

    //When page loads below accordians will be open
    if (["Achievement", "Hobbies"].includes(h3.innerText)) {
        para.style.display = "block";
    }
})
```

### Task 2: ![Task 2](./task2Output.png)

#### Solution:

```
const maindiv = document.querySelector(".accordian-wrapper");
const subdiv = document.createElement("div");
subdiv.classList.add("accordian");
maindiv.appendChild(subdiv);
const innerh3 = document.createElement("h3");
innerh3.innerText = "Skills";
subdiv.appendChild(innerh3);
const para = document.createElement("p");
para.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."
subdiv.appendChild(para);
let heading = document.querySelectorAll(".accordian h3");
heading = [...heading];
heading.forEach(h3 => {
    h3.style.backgroundColor = "#dadaf8";
});
heading[heading.length-1].addEventListener("click",(event) => {
    let element = event.target.nextElementSibling;
    element.style.display = (element.style.display == "block") ? "none" : "block";
});
```
