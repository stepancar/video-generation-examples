const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d");
const video = document.querySelector("video");
const startStopButton = document.querySelector("button");

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
    
    time += 1 / 60;
    video.currentTime = time;
    if (time > 7) {
        time = 0;
    }

    video.requestVideoFrameCallback(() => {
        draw();
    });
}

draw();

let recording = false;
let recorder;
let recordedChunks = [];

startStopButton.addEventListener('click', () => {
    if (recording) {
        recorder.stop();
    }
    else {
        recorder = new MediaRecorder(
            canvas.captureStream(30),
            { mimeType: "video/webm; codecs=vp9" }
        );
        
        recorder.ondataavailable = (event) => {
            recordedChunks.push(event.data);
        };
        recorder.onstop = () => {
            download();
        }
        recorder.start();
    }
    recording = !recording;
    startStopButton.innerText = recording ? 'Stop Recording and download' : 'Start Recording';
});

function download() {
    const blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "test.webm";
    a.click();
    window.URL.revokeObjectURL(url);
}
