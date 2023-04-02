## DOM Assignment 05:

### Task 1: ![Task 1](./Output/DOM%20P2%20SS.png)

#### Solution:

```
--- Cloning Contact Button and changing to Pro Subscription ---
const btn = document.getElementsByClassName("btn")[0];
const btn1 = btn.cloneNode(true);
btn1.innerText = 'Pro Subscription';
btn.insertAdjacentElement('afterend', btn1)

--- Cloning Receipe and changing it to Chinese ---
const receipe = document.querySelectorAll('.tags-container  div > a')[5];
const chinese = receipe.cloneNode(true);
chinese.innerText = " Chinese (7)";
receipe.insertAdjacentElement('afterend', chinese);

--- Cloning 5th Card and Chaning it to Just Text ---
const card = document.querySelectorAll(".card")[4];
const card6 = card.cloneNode(true);
card6.innerHTML = "<h2>add 6th card here</h2>"
card.insertAdjacentElement("afterend", card6)
```
