//The dataType variables are connectors for each specific API information.
var dataTypeCarbon, dataTypePlantCount, dataTypeEnergy, dataTypeFossil, dataTypeNuclear; //variables for API-Carma
var dataTypeHum;
var dataTypeTort;
var dataType4;
var dataType5;
var dataType6;

//These variables are INDEX modifiers. var i controls the random api function and var j controls random information from those api's
var i = 0;
var j = 0;
var q = 0;

//API READY boleans
var carmaRdy = false;
var humRdy = false;
var torRdy = false;

var img;
//data
var d = ""
//Statement
var s = ""

//Preload of the official government legislation image
function preload() {
   img = loadImage('assets/background.jpg');
}

function setup() {
    createCanvas(2000, 1000);
    background(255);
    apiSwitch();
    
    //This specifies how often there will be gathered a new API.
    setInterval(apiSwitch, 5000);
    
    //Textlayout for the legislation
    textFont("Orator Std");
    fill(80);
    textSize(20);
}

//gotData function for Carma API. This is where the previously specified variables get connected to their corrisponding data information
function gotData(carmaOrg) {
    dataTypePlantCount = carmaOrg[0].plant_count; //Power Plant Count in Country
    dataTypeCarbon = carmaOrg[0].carbon.present; //Carbon Output in Tones
    dataTypeEnergy = carmaOrg[0].energy.present; //Total Energy Production
    dataTypeFossil = carmaOrg[0].fossil.present; //Percentage of Fossil Fuels in country
    dataTypeNuclear = carmaOrg[0].nuclear.present; //Percentage of Nuclear Fuels in country

    //This boolean tells the word-processing function that the API data is ready for manipulation.
    carmaRdy = true;
}

//gotData function for Humanitarian (Natural Disaster) API. 
function gotData2(humanitarian) {
    dataTypeHum = humanitarian.data[j].primary_type; //The index variabel J randomies the natural disaster.
    inCountries = humanitarian.data[j].operation[0].label; //This is country information of where the disaster happened

    //This boolean tells the word-processing function that the API data is ready for manipulation.
    humRdy = true;
}

//gotData function for Torture Information API. 
function gotData3(torture) {
    dataTypeTort = torture.alerts[q].description; //Variabel connector for torture description.
    
    //This boolean tells the word-processing function that the API data is ready for manipulation.
    torRdy = true;
}


function gotData4(data6) {
    dataType6 = data6[0].category
}

function draw() {
    if (j >= 50) {
      j = 0
    }
    if (q >= 40) {
      q = 0
    }
}
