song = "";

function preload() {
  song = loadSound("music.mp3");
}
function setup() {
   canvas = createCanvas(400,400);
   canvas.position(500,170);
   video = createCapture(VIDEO);
   video.hide();
}
function draw() {
  image(video,0,0,400,400);
}
function play() {
   song.play();
}
function pause_music() {
  song.pause();
}
function stop_music() {
  song.stop();
}