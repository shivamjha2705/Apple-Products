/* ====== components required to change background ====== */
const watch = document.querySelector('.container1');
const mainBg = document.getElementById("main-component");

/* ====== Menu ====== */
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("links");

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active-link');
    });
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active-link');
    });
}
/* ====== color palettes  ====== */
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");

let background = new Map([
    [c1, ["bg-col1", "container1"]],
    [c2, ["bg-col2", "second"]],
    [c3, ["bg-col3", "third"]],
    [c4, ["bg-col4", "fourth"]]
]);
background.forEach(function (value, key) {
    if (key) {
        key.addEventListener('click', () => {
            mainBg.className = '';
            mainBg.classList.add(value[0]);
            if (value[1] !== undefined) {
                watch.className = 'container1';
                watch.classList.add(value[1]);
            }
        });
    }
})

/* ====== card clicks ====== */
const card1 = document.getElementById("card-img1");
const card2 = document.getElementById("card-img2");
const card3 = document.getElementById("card-img3");

let cards = new Map([
    [card1, ["bg-col2", "second"]],
    [card2, ["bg-col3", "third"]],
    [card3, ["bg-col4", "fourth"]],
]);
cards.forEach(function (value, key) {
    if (key) {
        key.addEventListener('click', () => {
            mainBg.className = '';
            mainBg.classList.add(value[0]);
            if (value[1] !== undefined) {
                watch.className = 'container1';
                watch.classList.add(value[1]);
            }
        });
    }
})

