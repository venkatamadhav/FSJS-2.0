## DOM Assignment 8:

### Task 1:

![Task 1](./ass8.1-after.png)

#### Solution:

```
let scrollbar = document.getElementsByClassName("col-lg-4 new")[0];
scrollbar.style.overflow = "scroll";
let line = document.getElementsByClassName("hr-line")[1];
let head = document.getElementsByClassName("new-head")[2];
let para = document.getElementsByClassName("new-p")[2];
const newline = line.cloneNode(true);
const newhead = head.cloneNode(true);
const newpara = para.cloneNode(true);
newhead.innerText = "This is my custom heading";
newpara.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae optio, vero beatae voluptatum libero pariatur error similique quos eum atque consectetur iure excepturi distinctio repellendus, architecto, unde sequi ducimus? Veniam commodi cum id aperiam, cupiditate a rerum adipisci non hic quasi velit vel est praesentium, vitae deleniti accusamus! Eaque a fugit quidem suscipit cumque reprehenderit molestias dicta blanditiis voluptate cupiditate adipisci veniam laboriosam tempora possimus, hic voluptatum doloremque quae similique ipsum fugiat itaque nulla quo veritatis. Quisquam nesciunt modi quasi enim veritatis mollitia laudantium unde magnam perspiciatis similique maiores, vitae quia repellat! Expedita cum totam quia, eum et facilis.";
para.insertAdjacentElement('afterend', newline).insertAdjacentElement('afterend', newhead).insertAdjacentElement("afterend", newpara);

```

### Task 2:

![Task 2](./ass8.2-after.png)

#### Solution:

```
document.querySelector("body").style.backgroundImage = "none";
```

#### Alternate Solution:

```
document.body.style.backgroundImage = "none";
```

### Task 3:

![Task 3](./ass8.3-after.png)

#### Solution:

```
let collapsed = document.getElementsByClassName("collapse")[0];
collapsed.style.display = "flex"; \\This will be visible in mobile resolution
```
