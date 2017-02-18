var elip = 
{
 x : 300,
 y : 200,
 z1 : 15,
 z2 : 15,
}

var text1 =
{
  cry1 : 0,
  cry2 : 0,
  cry3 : 0,
  cry4 : 0,
}

function setup() 
{
  createCanvas(600, 400)
}

function draw() 
{
  //Baggrund og Tekst
  background(255)
  textSize(75)
  fill(150, 150)
  text("SAFESPACE", 75, 200)
  
  //Plet
  noStroke()
  fill(0);
  ellipse(elip.x, elip.y, elip.z1, elip.z2);
  
  //MusPlet
  noStroke()
  fill(0)
  ellipse(mouseX, mouseY, 10, 10)
  
  //Canvas Ramme
  stroke(2)
  strokeWeight(5)
  noFill()
  rect(0, 0, 600, 400)
  noStroke()
  strokeWeight(0)
  
  //Udråb Timer
  text1.cry1 = text1.cry1 - 1
  text1.cry2 = text1.cry2 - 1
  text1.cry3 = text1.cry3 - 1
  text1.cry4 = text1.cry4 - 1
  
  //Udråb Trigger
  if(text1.cry1 > 0 && text1.cry2 < 0 && text1.cry3 < 0 && text1.cry4 < 0)
  {
      fill(0);
      textSize(16);
      text("leave me alone!", elip.x + 15, elip.y - 15);
  }
  if(text1.cry2 > 0 && text1.cry1 < 0 && text1.cry3 < 0 && text1.cry4 < 0)
  {
      fill(0);
      textSize(16);         
      text("stop it!", elip.x + 15, elip.y - 15);
  }
  if(text1.cry3 > 0 && text1.cry2 < 0 && text1.cry1 < 0 && text1.cry4 < 0)
  {
      fill(0),
      textSize(16);
      text("please no!", elip.x + 15, elip.y - 15);
  }
  if(text1.cry4 > 0 && text1.cry2 < 0 && text1.cry3 < 0 && text1.cry1 < 0)
  {
      fill(0);
      textSize(16)
      text("why!", elip.x + 15, elip.y - 15)
  }
  
  //Plet Bevægelse
  var r = floor(random(4));
  switch (r)
  {
    case 0:
      elip.x = elip.x + 2
      break;
    case 1:
      elip.x = elip.x - 2
      break;
    case 2:
      elip.y = elip.y - 2
      break;
    case 3:
      elip.y = elip.y + 2
      break;
  }
  
  //Plet ved Kant
  if(elip.x > width)
  {
    elip.x = elip.x - 5
  }
  else if (elip.y > height)
  {
    elip.y = elip.y - 5
  }
  else if (elip.x < 0 + 5)
  {
    elip.x = elip.x + 5
  }
  else if (elip.y < 0 + 5)
  {
    elip.y = elip.y + 5
  }
  
  //MusPåPlet
  if (elip.x < mouseX + 20 && elip.x > mouseX - 20 && elip.y < mouseY + 20 && elip.y > mouseY - 20)
  {
    
    //Plet Flygter
    var r3 = floor(random(4))
    switch(r3)
    {
      case 0:
        elip.x = elip.x - 5
        elip.y = elip.y - 5
        break;
      case 1:
        elip.x = elip.x + 5
        elip.y = elip.y + 5
        break;
      case 2:
        elip.x = elip.x + 5
        elip.y = elip.y - 5
        break;
      case 3:
        elip.x = elip.x - 5
        elip.y = elip.y + 5
        break;
    }
    
    //Plet Taler Variabel
    if (text1.cry1 < 0 && text1.cry2 < 0 && text1.cry3 < 0 && text1.cry4 < 0)
    {
      var r2 = floor(random(4))
      switch(r2)
      {
        case 0:
          text1.cry1 = 85
          break;
        case 1:
          text1.cry2 = 85
          break;
        case 2:
          text1.cry3 = 85
          break;
        case 3:
          text1.cry4 = 85
          break;
      }
    }
    
    
  }
}