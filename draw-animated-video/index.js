const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");
const video = document.querySelector("video");

function drawVideo(dx, dy) {
    ctx.drawImage(video, dx, dy, 200, 100);
}

let time = 4;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawVideo(
        100 + 50 * Math.sin(time * 3),
        100 + 50 * Math.cos(time * 3)
    );
    
    time += 0.01;
    video.currentTime = time;

    video.requestVideoFrameCallback(() => {
        draw();
    });
}

draw();