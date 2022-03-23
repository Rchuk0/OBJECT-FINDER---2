Status = "";
input_text = "";

function setup(){
    canvas = createCanvas(300,290);
    canvas.position(480,250);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}
function start(){

}
function modelLoaded(){

}
function draw(){
    image(video,0,0,300,290);
}