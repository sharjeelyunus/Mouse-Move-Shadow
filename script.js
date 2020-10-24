const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this != e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    console.log(x, y);
}

hero.addEventListener('mousemove', shadow)