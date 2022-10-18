const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");

function drawRectangle() {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0, 0, 150, 75);
}

function drawHouse() {
    // Set line width
    ctx.lineWidth = 10;

    // Wall
    ctx.strokeRect(75, 140, 150, 110);

    // Door
    ctx.fillStyle = "#00FF00";
    ctx.fillRect(130, 190, 40, 60);

    // Roof
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(150, 60);
    ctx.lineTo(250, 140);
    ctx.closePath();
    ctx.stroke();
}

drawRectangle();
drawHouse();