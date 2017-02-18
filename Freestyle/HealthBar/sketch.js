var obj1
var obj2

var rect1 =
{
  x : 40,
  y : 40,
  z1 : 500,
  z2 : 30,
}

var rect2 =
{
  x : 75,
  y : 75,
  z1 : 150,
  z2 : 150,
}


function setup() 
{
  createCanvas(600, 400);
}


function draw() 
{
  var mov
  mov = floor(random(2))
  
  if(rect2.x > 450)
  {
    switch (mov)
     {
       case 0:
        rect2.x = rect2.x - 2
        break;
        case 1:
        rect2.x = rect2.y
     }
  }
  else
  {
    rect2.x = rect2.x + 2
  }
  
  if(rect2.y > 250)
  {
    rect2.y = rect2.y - 2
  }
  else
  {
    rect2.y = rect2.y + 2
  }
  
  background(255, 131, 0);
   
  if(rect1.z1 > 500)
  {
    rect1.z1 = 500
  } 
  else 
  { 
    rect1.z1 = rect1.z1 + 0.15
  }
  
  fill(255, 0, 0);
  rect(rect1.x, rect1.y, rect1.z1, rect1.z2);
   
  fill(0, 0, 255);
  rect(rect2.x, rect2.y, rect2.z1, rect2.z2);
  
  fill(255, 255, 0);
  ellipse(mouseX, mouseY, 40, 40);
  
  
  if (mouseX > rect2.x && mouseX < rect2.x + 150 && mouseY > rect2.y && mouseY < rect2.y + 150)
  {
    rect1.z1 = rect1.z1 - 1
  }
  
  
  
  
  

}