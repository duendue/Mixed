var point1 = 
{
  x : 680,
  y : 325,
}

var point2 =
{
  x : 680,
  y : 325,
}

var point3 =
{
  x : 680,
  y : 325,
}

function setup() 
{
  createCanvas(1360, 650);
  background(0, 0, 255, 15);
}

function draw() 
{
  var R = random(0, 255);
  var G = random(0, 255);
  var B = random(0, 255);
  
  stroke(R, 0, 0, 150);
  strokeWeight(15);
  point(point1.x, point1.y);
  
  var r1 = floor(random(4));
  
  switch (r1)
  {
    case 0:
      point1.x = point1.x + 15;
      if (point1.x > 1360)
      {
        point1.x = point1.x - 15;
      }
      break;
    case 1:
      point1.x = point1.x - 15;
      if (point1.x < 0)
      {
        point1.x = point1.x + 15;
      }
      break;
    case 2:
      point1.y = point1.y + 15;
      if (point1.y > 650)
      {
        point1.y = point1.y - 15;
      }
      break;
    case 3:
      point1.y = point1.y - 15;
      if (point1.y < 0)
      {
        point1.y = point1.y + 15;
      }
      break;
  }
  
  stroke(0, G, 0, 150);
  strokeWeight(15);
  point(point2.x, point2.y);
  
  var r2 = floor(random(4));
  
  switch (r2)
  {
    case 0:
      point2.x = point2.x + 15;
      if (point2.x > 1360)
      {
        point2.x = point2.x - 15;
      }
      break;
    case 1:
      point2.x = point2.x - 15;
      if (point2.x < 0)
      {
        point2.x = point2.x + 15;
      }
      break;
    case 2:
      point2.y = point2.y + 15;
      if (point2.y > 650)
      {
        point2.y = point2.y - 15;
      }
      break;
    case 3:
      point2.y = point2.y - 15;
      if (point2.y < 0)
      {
        point2.y = point2.y + 15;
      }
      break;
  }
  
  stroke(0, 0, B, 150);
  strokeWeight(15);
  point(point3.x, point3.y);
  
  var r3 = floor(random(4));
  
  switch (r3)
  {
    case 0:
      point3.x = point3.x + 15;
      if (point3.x > 1360)
      {
        point3.x = point3.x - 15;
      }
      break;
    case 1:
      point3.x = point3.x - 15;
      if (point3.x < 0)
      {
        point3.x = point3.x + 15;
      }
      break;
    case 2:
      point3.y = point3.y + 15;
      if (point3.y > 650)
      {
        point3.y = point3.y - 15;
      }
      break;
    case 3:
      point3.y = point3.y - 15;
      if (point3.y < 0)
      {
        point3.y = point3.y + 15;
      }
      break;
  }
}