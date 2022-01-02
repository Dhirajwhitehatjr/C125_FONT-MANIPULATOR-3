var leftWristX = 0;
var rightWristX = 0;
var difference = 0;
var noseX = 0;
var noseY = 0;
function setup()
{
    var capture = createCapture(VIDEO);
    capture.position(10,75);
    capture.size(600,700);

    canvas = createCanvas(650,500);
    canvas.position(780,175);

    posenet = ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw()
{  
    background('blue');
    textSize(difference);
    fill('white');
    text('Dhiraj',noseX-10,noseY-10);
}
function modelLoaded() 
{
    console.log('Model Loaded!!!!!!');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        document.getElementById('font_size').innerHTML = difference;
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }    
}
