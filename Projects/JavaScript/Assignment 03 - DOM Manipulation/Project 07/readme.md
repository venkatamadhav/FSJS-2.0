## DOM Assignment 07:

### Task 1: ![Task 1](./ass7.1-after.png)

#### Solution:

```
let a1 = document.querySelectorAll(".main__languages a");
a1.forEach(Element => {
    if(Element.innerText.includes('2.0')){
        Element.style.display = 'none';
    }
})
```

### Task 2: ![Task 2](./ass7.2-after.png)

```
let text = document.getElementsByClassName('main__form-input')[0];
text.disabled = false;
let button = document.getElementsByClassName('main__form-btn')[0];
button.disabled = false;
text.setAttribute("value", "iNeuron");
button.setAttribute("onclick","reload()");
function reload(){
window.location.reload();
a1.forEach(Element => {
    Element.style.display = 'inline';
})
}
button.click();
```
