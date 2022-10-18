const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");

function drawRectangle(dx, dy) {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(dx, dy, 150, 75);
}

function drawHouse(dx, dy) {
    // Set line width
    ctx.lineWidth = 10;

    // Wall
    ctx.strokeRect(dx + 75, dy + 140, 150, 110);

    // Door
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(dx + 130, dy + 190, 40, 60);

    // Roof
    ctx.beginPath();
    ctx.moveTo(dx + 50, dy + 140);
    ctx.lineTo(dx + 150, dy + 60);
    ctx.lineTo(dx + 250, dy + 140);
    ctx.closePath();
    ctx.stroke();
}

let dx = 0;
let dy = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dx += 2;
    dy += 1;

    drawRectangle(dx, dy);
    drawHouse(dx, dy)
    requestAnimationFrame(() => {
        draw();
    })
}

draw();