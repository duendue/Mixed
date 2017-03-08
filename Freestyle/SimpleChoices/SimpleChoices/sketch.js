var tekst = []
tekst[0] = "You are at a crossing. Go left or go right?"
tekst[1] = "You went left."
tekst[2] = "You went right."

var solution = []
solution[0] = "Go Left."
solution[1] = "Go Right."
solution[2] = ""

var i = 0
var j = 0

var aktivate = true

var lock = false
var lock2 = false

function setup()
{
  createCanvas(windowWidth,windowHeight);
}

function draw()
{
  background(0);
  
  fill(255);
  text(tekst[i], width/2, height/2);
  
  if(aktivate)
  {
    for(j = 0; j < solution.length-1; j++)
    {
    text(solution[j], width/2, height/2+50+j*50);  
    }  
  }
}

function keyPressed()
{
  if (!lock2)
  {
    if (key == '1')
    {
      i = 1
      aktivate = false
      lock = true
    }    
  }
  if (!lock)
  {
    if (key == '2')
    {
      i = 2
      aktivate = false
      lock2 = true
    } 
  }
}