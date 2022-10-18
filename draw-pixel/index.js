const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");


function drawPixel(x, y) {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, 1, 1);
}

drawPixel(100, 100);
