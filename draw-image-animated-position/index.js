const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");
const img = document.querySelector("img");


function drawVideo(dx, dy) {
    ctx.drawImage(img, dx, dy, 180, 130);
}

let angle = 0;

function draw() {
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.translate(150, 90)
    ctx.rotate(angle);
    drawVideo(0, 0);
    
    // lenear animation
    angle += Math.PI / 60;
     
    requestAnimationFrame(() => {
        draw();
    })
}

draw();
