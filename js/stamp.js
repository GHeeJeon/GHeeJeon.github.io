const imgUrl = 'https://gheejeon.github.io/img/blue_rose.png';
const tempUrl = 'http://127.0.0.1:4000/img/blue_rose.png';

function stamp() {
    const stampImg = document.createElement("img");
    const x = event.pageX;
    const y = event.pageY;
    const content = document.querySelector(".content");
    stampImg.src = imgUrl;
    stampImg.alt = "파란 장미 도장";
    stampImg.style.position = "absolute";
    stampImg.style.left = x - 50 + "px";
    stampImg.style.top = y - 50 + "px";
    content.appendChild(stampImg);

    setTimeout(() => {
        stampImg.style.WebkitAnimation = "fadeOut 1s";
        stampImg.style.animation = "fadeOut 1s";
        setTimeout(() => {
            stampImg.remove();
        }, 1000)
    }, 10)
}