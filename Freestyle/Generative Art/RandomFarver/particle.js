function Particle()
{
  this.pos = createVector(random(width),random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 4;
  this.h = 0;
  
  this.prevPos = this.pos.copy();
  
  this.timer = function()
  {
    var tim = floor(random(3))
    var time1 = second();

    if (time1 > 60-time1)
    {
      switch(tim)
      {
        case 0:
          r = random(50, 255)
          g = random(50, 255)
          b = random(50, 255)
          break;
        case 1:
          r = random(50, 255) 
          g = random(50, 255)
          b = random(50, 255)
          break;
        case 2:
          r = random(50, 255)
          g = random(50, 255)
          b = random(50, 255)
          break;
      }
    }
  }
  
  this.update = function()
  {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed)
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  
  this.follow = function(vectors)
  {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * cols;
    var force = vectors[index];
    this.applyForce(force);
  }
  
  this.applyForce = function(force)
  {
    this.acc.add(force);
  }
  
  this.show = function()
  {
    stroke(this.h, 255, 255, 15)
    this.h = this.h + 1;
    if (this.h > 255)
    {
      this.h = 0
    }
    //stroke(r, g, b, 20);
    strokeWeight(1)
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y)
    //point(this.pos.x, this.pos.y);
    this.updatePrev();
  }
  
  this.updatePrev = function()
  {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }
  
  this.edges = function()
  {
    if (this.pos.x > width) 
    {
      this.pos.x = 0
      this.updatePrev();
    }
    if (this.pos.x < 0) 
    {
      this.pos.x = width
      this.updatePrev();
    }
    if (this.pos.y > height) 
    {
      this.pos.y = 0
      this.updatePrev();
    }
    if (this.pos.y < 0) 
    {
      this.pos.y = height
      this.updatePrev();
    }
  }
}