const imgs = document.getElementById("img");
const imgList = document.querySelectorAll("#img img");

let idx = 0;

function carrossel() {
    idx++;

    if (idx >= imgList.length) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(carrossel, 1800);
