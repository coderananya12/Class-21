var canvas;
var music;
createSprite = block1;
fill = red; 

createSprite = block2;
fill = green;

createSprite = block3;
fill = orange;

createSprite = block4
fill = blue;

function preload(){
block1 = loadImage("block1");
block2 = loadImage("block2");
block3 = loadImage("block3");
block4 = loadImage("block4");

 music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    createSprite(random(20,750));

    if(surface.isTouching(box)&& box.bounceOff(surface1)){
        //change color here

    if(block2.isTouching(ball)){
        ball.shapeColor = rgb (255,128,0);
    ball.velocityX = 0;
    music.stop();
    }
    }

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite



    //add condition to check if box touching surface and make it box
}
