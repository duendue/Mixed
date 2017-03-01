var r = 0

function setup() 
{
  createCanvas(800, 800);
}

function draw() 
{
  background(210, 150);
  masterBox();
  sideBox();
  halls();
  rot();
}

function masterBox()
{
  translate(width/2, height/2);
  rectMode(CENTER);
  rotate(radians(r))
  rect(0, 0, 100, 100);
}

function sideBox()
{
  rect(-300, 100, 100, 100)
  rect(300, -100, 100, 100)
  rect(300, 100, 100, 100)
  rect(-300, -100, 100, 100)
  rect(100, 300, 100, 100)
  rect(-100, -300, 100, 100)
  rect(-100, 300, 100, 100)
  rect(100, -300, 100, 100)
}

function halls()
{
  //LongHalls
  line(50, 0, 300, 0)
  line(-50, 0, -300, 0)
  line(0, 50, 0, 300)
  line(0, -50, 0, -300)
  
  //SideHalls
  line(300, 50, 300, -50)
  line(-300, 50, -300, -50)
  line(50, -300, -50, -300)
  line(-50, 300, 50, 300)
  
  //ConnectorHalls
  line(300, 150, 150, 300)
  line(-300, 150, -150, 300)
  line(150, -300, 300, -150)
  line(-150, -300, -300, -150)
  
}

function rot()
{
  r = r + 0.1
}