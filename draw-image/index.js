const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");
const img = document.querySelector("img");


function drawImage() {
    ctx.drawImage(img, 10, 10, 150, 180);
}

drawImage();
