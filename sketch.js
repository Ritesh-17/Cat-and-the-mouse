var bg;
var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;

function preload() {
    //load the images here
    bg = loadImage("garden.png");
    
    tomImg1 = loadAnimation("cat1.png");
    tomImg2 = loadAnimation("cat2.png","cat3.png");
    tomImg3 = loadAnimation("cat4.png");

    jerryImg1 = loadAnimation("mouse1.png");
    jerryImg2 = loadAnimation("mouse2.png","mouse3.png");
    jerryImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,720);

    //create tom and jerry sprites here
    tom = createSprite(840,600);
    tom.addAnimation("Cat Image",tomImg1);
    tom.addAnimation("Tom Image",tomImg2);
    tom.addAnimation("Tom Image 3",tomImg3)
    tom.scale = 0.15;

    jerry = createSprite(200,600);
    jerry.addAnimation("Mouse Image",jerryImg1);
    jerry.addAnimation("Mouse teasing",jerryImg2);
    jerry.addAnimation("Mouse Image 3",jerryImg3);
    jerry.scale = 0.1;
}

function draw() {

    background(bg);

    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2 && jerry.x - tom.x < (tom.width - jerry.width)/2) {

        jerry.changeAnimation("Mouse Image 3");
        tom.changeAnimation("Tom Image 3");

        tom.velocityX = 0;
      }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown(LEFT)){
      
    jerry.changeAnimation("Mouse teasing");
    jerry.frameDelay = 25;

    tom.changeAnimation("Tom Image");
    tom.velocityX = -5;
  }
}
