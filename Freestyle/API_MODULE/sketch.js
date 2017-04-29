var dataType;
var dataType2;
var dataType3;
var dataType4;
var dataType5;
var dataType6;
var i = 0;
var j = 0
var k = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  apiSwitch();
  setInterval(apiSwitch, 5000);
  background(245, 245, 255);
}

function gotData(carmaOrg){
  dataType = carmaOrg[0].carbon.present
  background(255);
  strokeWeight(75);
  text("Carbon Emissions:" + dataType, 30, (height/2)-50, ((width/2)-50), (height/2)); 
  text("CO2 Hoax continues!" + dataType + " more CO2 in the air. Lovely!", (width/2)+20, (50)*i, 550, (100)*i);
}

function gotData2(carmaOrg2){
  dataType2 = carmaOrg2.data[j].primary_type;
  background(255);
  strokeWeight(75);
  text(dataType2, 30, (height/2)-50, ((width/2)-50), (height/2)); 
  text("Natural disasters are a hoax!", (width/2)+20, (50)*i, 550, (100)*i);
}

function gotData3(carmaOrg3){
  dataType3 = carmaOrg3.alerts[j].description;
  background(255);
  strokeWeight(75);
  text(dataType3, 30, (height/2)-50, ((width/2)-50), (height/2)); 
  text("Comfort is nice", (width/2)+20, (50)*i, 550, (100)*i);
}

function gotData4(data4){
  dataType4 = data4.strike[j].deaths_max;
  background(255);
  strokeWeight(75);
  textAlign(CENTER);
  text(dataType4 + " deaths from drone strikes.", 30, (height/2)-50, ((width/2)-50), (height/2)); 
  text(dataType4 + " fewer cars on the road!", (width/2)+20, (50)*i, 550, (100)*i);
}

function gotData6(data6){
  dataType6 = data6[0].category
  background(255);
  strokeWeight(75);
  textAlign(CENTER);
  text(dataType6, 30, (height/2)-50, ((width/2)-50), (height/2)); 
  text("Crime is lower than ever!", (width/2)+20, (50)*i, 550, (100)*i);
}


function draw() {
  if (j >= 10) {
    j = 0
  }

  console.log(i)
  
  strokeWeight(5)
  line(width/2, 0, width/2, height);
  
}