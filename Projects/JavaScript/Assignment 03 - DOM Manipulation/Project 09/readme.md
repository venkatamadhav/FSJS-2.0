## DOM Assignment 9:

### Task 1:

![Task 1](./ass9.1-after.png)

#### Solution:

```
const title = document.querySelector(".caption .title");
title.style.color = "#DC153C";
title.style.fontFamily = "Times New Roman";
```

### Task 2:

![Task 2](./ass9.2-after.png)

#### Solution:

```
let cart = document.getElementsByClassName("add-to-cart")[0];
cart.style.backgroundColor = "#DC153C";
```

#### Alternate Solution:

```
let cart = document.querySelector("body > div > div > div.caption > button");
cart.style.backgroundColor = "#DC153C";
```

#### Alternate Solution:

```
let cart = document.querySelector(".add-to-cart");
cart.style.backgroundColor = "#DC153C";
```
