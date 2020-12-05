var trex, trex_running, trex_collided;
var ground, invisible_ground, ground_img;
var cloud,cloud_img,cloud_group;
var ob1,ob2,ob3,ob4,ob5,ob6,obs_group;

function preload (){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage ("trex_collided.png");
  
  ground_img = loadImage ("ground2.png");
  
  cloud_img = loadImage ("cloud.png");
  
  ob1 = loadImage ("obstacle1.png");
  ob2 = loadImage ("obstacle2.png");
  ob3 = loadImage ("obstacle3.png");
  ob4 = loadImage ("obstacle4.png");
  ob5 = loadImage ("obstacle5.png");
  ob6 = loadImage ("obstacle6.png");
  
}



function setup() {
  createCanvas(600, 200);
  
  trex = createSprite (40,170,20,20);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground  = createSprite (300,180,600,10);
  ground.addImage (ground_img);
   ground.x = ground.width/2;
  
  invisible_ground = createSprite (300,185,600,10);
  invisible_ground.visible = false;
  
  cloud_group = new Group();
  obs_group = new Group();
}


 

function draw() {

  background(0);
  
  if (keyDown("space")){
    trex.velocityY = -10;
  }
    trex.velocityY = trex.velocityY +0.8;
    
ground.velocityX = -6;
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisible_ground);
  
  spawnclouds();
  spwanobs();
  drawSprites();
}

function spawnclouds (){
  
  if (frameCount %60===0){
    var cloud = createSprite(600,150);
    cloud.y = random (80,150);
    cloud.addImage (cloud_img);
    cloud.scale = 0.5;
    cloud.velocityX = -5;
    
    cloud.lifetime = 130;
    
  cloud.depth = trex.depth;
    trex.depth = trex.depth +1;
    cloud_group.add(cloud);
    
  }
}

function spwanobs (){
  
  if (frameCount %60===0){
    var obstacle= createSprite (600,160);
    obstacle.velocityX = -3;
    
    var rand = Math.round(random (1,6));
    
switch(rand) {
  case 1: obstacle.addImage(ob1);
    break;
    case 2: obstacle.addImage(ob2);
    break;
    case 3: obstacle.addImage(ob3);
    break;
    case 4: obstacle.addImage(ob4);
    break;
    case 5: obstacle.addImage(ob5);
    break;
    case 6: obstacle.addImage(ob6);
    break;
    default:break;
  }
    obstacle.scale=0.5;
  obs_group.add(obstacle);
}
}




