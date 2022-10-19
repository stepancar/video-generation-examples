const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");
const img = document.querySelector("img");


function drawVideo() {
    ctx.setTransform(1, Math.tan(Math.PI / 8), 0, 1, 0, 0);
    ctx.drawImage(img, 10, 10);
}

drawVideo();
