## DOM Assignment 04:

### Task 1: ![Task 1](./Output/DOM%20P1%20SS.png)

#### Solution:

```
let archer = document.querySelector(".archer div:nth-child(3)");
archer.textContent = "The Archer";
let goblin = document.querySelector(".goblin div:nth-child(3)");
goblin.textContent = "The Goblin";
let cards = document.querySelectorAll(".clash-card__unit-stats");
let colors =  ["#EC9B3B","#EE5487","#F6901A","#82BB30","#4FACFF"];
cards.forEach((card , color) => {
    card.style.backgroundColor = colors[color];
});
let text = document.querySelectorAll(".one-third");
text.forEach((element) => {
    element.style.color = "#FFFFFF";
});
```

#### Alternate Solution:

```
let text = document.getElementsByClassName("one-third");
for (let i = 0; i < text.length; i++) {
  text[i].style.color = "#ffffff";
}
let barbarian = document.querySelector(".clash-card__unit-stats--barbarian");
let archer = document.querySelector(".clash-card__unit-stats--archer");
let giant = document.querySelector(".clash-card__unit-stats--giant");
let goblin = document.querySelector(".clash-card__unit-stats--goblin");
let wizard = document.querySelector(".clash-card__unit-stats--wizard");
barbarian.style.backgroundColor = "#EC9B3B";
archer.style.backgroundColor = "#EE5487";
giant.style.backgroundColor = "#F6901A";
goblin.style.backgroundColor = "#82BB30";
wizard.style.backgroundColor = "#4FACFF";
let archertext = document.querySelector(".archer div:nth-child(3)");
archertext.textContent = "The Archer";
let goblintext = document.querySelector(".goblin div:nth-child(3)");
goblintext.textContent = "The Goblin";
```

#### Alternate Solution:

```
let text = document.getElementsByClassName("one-third");
for (let i = 0; i < text.length; i++) {
  text[i].style.color = "#ffffff";
}
let clashCards = document.getElementsByClassName('clash-card__unit-stats');
for (let i = 0; i < clashCards.length; i++) {
    if(clashCards[i].classList.contains("clash-card__unit-stats--barbarian")){
        clashCards[i].style.backgroundColor = "#ec9b3b";
    }
    else if(clashCards[i].classList.contains("clash-card__unit-stats--archer")){
         clashCards[i].style.backgroundColor = "#ee5487";
    }
    else if(clashCards[i].classList.contains("clash-card__unit-stats--giant")){
         clashCards[i].style.backgroundColor = "#F6901A";
    }
    else if(clashCards[i].classList.contains("clash-card__unit-stats--goblin")){
         clashCards[i].style.backgroundColor = "#82BB30";
    }
    else if(clashCards[i].classList.contains("clash-card__unit-stats--wizard")){
         clashCards[i].style.backgroundColor = "#4FACFF";
    }
}
let archertext = document.querySelector(".archer div:nth-child(3)");
archertext.textContent = "The Archer";
let goblintext = document.querySelector(".goblin div:nth-child(3)");
goblintext.textContent = "The Goblin";
```
