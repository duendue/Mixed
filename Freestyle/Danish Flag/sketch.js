var col1 =
{
  r : 0,
}

var circle1=
{
  x1 : 1,
  x2 : 2,
  x3 : 3,
  y1 : 1,
  y2 : 2,
  y3 : 3,
  diameter : 50
}


function setup() 
{
  createCanvas (1380, 720);
  console.log("Hello World")
}


function draw() 
{
  //Placering af cirkel
  col1.r = random(0, 255);
  circle1.diameter = random(10, 100);
  circle1.x1 = random(0, 400);
  circle1.x2 = random(550, 1380);
  circle1.y1 = random(0, 300);
  circle1.y2 = random(450, 720);
  circle1.x3 = random(400, 550);
  circle1.y3 = random(300, 450);
  circle1.x31 = random(0, 1380);
  circle1.y31 = random(0, 720);
  
  //Røde cirkler
  noStroke();
  fill(col1.r, 0, 0, 150);
  ellipse(circle1.x1, circle1.y1, circle1.diameter, circle1.diameter);
  ellipse(circle1.x2, circle1.y1, circle1.diameter, circle1.diameter);
  ellipse(circle1.x1, circle1.y2, circle1.diameter, circle1.diameter);
  ellipse(circle1.x2, circle1.y2, circle1.diameter, circle1.diameter);
  
  //Hvide cirkler
  noStroke();
  fill(255, 150);
  ellipse(circle1.x31, circle1.y3, circle1.diameter, circle1.diameter);
  ellipse(circle1.x3, circle1.y31, circle1.diameter, circle1.diameter);
}