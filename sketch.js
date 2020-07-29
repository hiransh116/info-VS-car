var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);


  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.shapeColor=color(255,0,0);

  wall=createSprite(1500,200,60,800);
  wall.shapeColor=color(80,80,80);
 
}

function draw() {
  background(0);  
  drawSprites();
}
function check(){
if(wall.x-car.x<(wall.width+car.width)){
  car.velocity=0;
  var deformation=0.5*speed*weight*speed/22500;
  if(deformation<100){
    car.shapeColor=color(0,255,0);
  }
  if(deformation<180&& deformation>100){
   car.shapeColor=color(230,230,0);

  }
  if(deformation>180){
    car.shape=color(250,0,0);
  }
}

}