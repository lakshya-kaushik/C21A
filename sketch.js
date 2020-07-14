var wall,thickness;
var speed,weight,bullet;

function setup() {
  speed=random(59,90)
  weight=random(400,1500)


  createCanvas(2400,400);
    wall=createSprite(1200, 200, thickness, height/2);
    wall.shapeColor=color(80,80,80);
    bullet=createSprite(50,200,50,50);    
    bullet.shapeColor="blue";
  
  }

function draw() {
  background(0,0,0);  
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)  

  if(hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage= 0.5 * weight * speed* speed/(thickness* thickness* thickness);  

  
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }


    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }


  hascollided();
  drawSprites();
}
