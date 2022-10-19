const canvas = document.querySelector('#result');
const ctx = canvas.getContext("2d");
const houseCanvas = document.querySelector('#house');


function drawHouseToAnotherCanvas() {
    ctx.drawImage(houseCanvas, 10, 10, 150, 350);
}

function drawHouse() {
    const ctx = houseCanvas.getContext("2d");
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

drawHouse();
drawHouseToAnotherCanvas();