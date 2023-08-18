status="";

function preload() {
    img=loadImage('fruit basket.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objects";
}

function modelLoaded() {
    console.log("model loaded");
    status=true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}