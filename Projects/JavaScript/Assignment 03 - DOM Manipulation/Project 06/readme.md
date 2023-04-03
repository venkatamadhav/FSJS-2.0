## DOM Assignment 06:

### Task 1: ![Task 1](./Output/DOM%20P3%20SS-1.png)

#### Solution:

```
let image = document.querySelector(".logo");
image.src = "./assets/ineuron-logo.png";
```

#### Alternate Solution:

```
document.querySelector(".logo").src = "https://ineuron.ai/images/ineuron-logo.png";
```

### Task 2: ![Task 1](./Output/DOM%20P3%20SS-2.png)

```
let price = document.querySelector(".app_price span");
price.innerText = "$10";
let twitter = document.querySelectorAll(".footer_social_ico")[2];
const linkedin = twitter.cloneNode(true);
const nodeList = linkedin.childNodes;
nodeList[0].className = "fa-brands fa-linkedin";
twitter.insertAdjacentElement("afterend", linkedin);
```
