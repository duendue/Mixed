var dataTypeCarbon, dataTypePlantCount, dataTypeEnergy, dataTypeFossil, dataTypeNuclear; //variables for API-Carma
var dataTypeHum;
var dataType3;
var dataType4;
var dataType5;
var dataType6;
var i = 1;
var j = 0;
var k = 0;
var carmaRdy = false;
var humRdy = false;

var img;
//data
var d = ""
//Statement
var s = ""

function preload() {
   img = loadImage('assets/background.jpg');
}

function setup() {
    createCanvas(2000, 1000);
    background(255);
    apiSwitch();
    setInterval(apiSwitch, 5000);
    
    textFont("Orator Std");
    fill(80);
    textSize(20);
}

function gotData(carmaOrg) {
    dataTypePlantCount = carmaOrg[0].plant_count;
    dataTypeCarbon = carmaOrg[0].carbon.present;
    dataTypeEnergy = carmaOrg[0].energy.present;
    dataTypeFossil = carmaOrg[0].fossil.present;
    dataTypeNuclear = carmaOrg[0].nuclear.present;

    carmaRdy = true;
}

function gotData2(humanitarian) {
    dataTypeHum = humanitarian.data[j].primary_type;
    inCountries = humanitarian.data[j].operation[0].label;

    humRdy = true;
}

function gotData3(carmaOrg3) {
    dataType3 = carmaOrg3.alerts[j].description;
    background(255);
    strokeWeight(75);
    text(dataType3, 30, (height / 2) - 50, ((width / 2) - 50), (height / 2));
    text("Comfort is nice", (width / 2) + 20, (50) * i, 550, (100) * i);
}

function gotData4(data4) {
    dataType4 = data4.strike[j].deaths_max;
    background(255);
    strokeWeight(75);
    textAlign(CENTER);
    text(dataType4 + " deaths from drone strikes.", 30, (height / 2) - 50, ((width / 2) - 50), (height / 2));
    text(dataType4 + " fewer cars on the road!", (width / 2) + 20, (50) * i, 550, (100) * i);
}

function gotData6(data6) {
    dataType6 = data6[0].category
    background(255);
    strokeWeight(75);
    textAlign(CENTER);
    text(dataType6, 30, (height / 2) - 50, ((width / 2) - 50), (height / 2));
    text("Crime is lower than ever!", (width / 2) + 20, (50) * i, 550, (100) * i);
}


function draw() {
    if (j >= 50) {
        j = 0
    }
/*
      //data
  textFont("Orator Std");
  fill(80);
  textSize(20);
  text(d, 190, 400, 650, 500);
    
  //statement
  image(img, 1000, 0);
  textFont("Orator Std");
  fill(80);
  textSize(20);
  text(s, 1190, 400, 650, 500);
  */
}
