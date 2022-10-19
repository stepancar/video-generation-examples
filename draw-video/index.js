const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");
const video = document.querySelector("video");

function drawVideo() {
    ctx.drawImage(video, 10, 10, 200, 100);
}

video.currentTime = 4;
video.requestVideoFrameCallback(() => {
    drawVideo();
});
