## DOM Assignment 01:

### Task 1: ![Task 1](./task1Output.png)

#### Solution:

```
\\ -------- Adding Hire Me in Header ----------
const ul = document.getElementsByTagName("ul")[0]; \\ Selecting first ul element
Hireme = document.createElement("li"); \\Creating an li element
Hireme.innerText = 'Hire Me'; \\Assigning inter text to li
ul.appendChild(Hireme); \\Appending li into ul

\\ -------- Hiding Social Media icons from Footer ---------
const icons = document.querySelector("footer ul");
icons.style.display = 'none';
```

### Task 2: ![Task 2](./task2Output.png)

#### Solution:

```
\\ ----- Changing Search Bar Placeholder -----
const Searchbar = document.querySelector(".search-field input"); \\ Selecting Text input
Searchbar.placeholder = "Search My Project"; \\ Rewriting the place holder

\\ ----- Hiding Social Media icons from Footer -----
const icons = document.querySelector("footer ul");
icons.style.display = 'none';
```

### Task 3: ![Task 3](./task3Output.png)

#### Solution:

```
const elements = document.querySelectorAll(".hero-left-section p span");
elements[1].innerText = "an Employee";
elements[2].innerText = "iNeuron Intelligence Pvt Ltd";
```

### Task 4: ![Task 4](./task4Output.png)

#### Solution:

```
let image = document.querySelector(".hero-right-section img");
image.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";

```

### Task 5: ![Task 5](./task5Output.png)

#### Solution:

```
const newbutton = document.createElement("button");
newbutton.innerText = "Support Me";
document.querySelector(".hero-right-section-btns").appendChild(newbutton);
```
