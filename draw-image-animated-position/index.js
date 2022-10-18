const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");
const img = document.querySelector("img");


function drawImage(dx, dy) {
    ctx.drawImage(img, dx, dy, 150, 180);
}

let dx = 0;
let dy = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawImage(dx, dy);

    // lenear animation
    dx += 0.5;
    dy += 1;
     
    requestAnimationFrame(() => {
        draw();
    })
}

draw();
