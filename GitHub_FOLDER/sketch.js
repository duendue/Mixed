//variable for statement image
var statementImage;

//These variables are for connected to the statements. Each statement get generated from the date.
var dateCheck;
var apiDate = 0;
var crimeDate;
var humDate;

//Variables for each type of statement
var GenericStatement;
var SpinnedStatement;
var RawDataType;

//Preload of the official government legislation image
function preload() {
   statementImage = loadImage('assets/background.jpg');
}

function setup() {
    createCanvas(2000, 1000);
    background(255);
    
    //This function specifies how long time to wait before running the API switch function
    //setTimeout(apiSwitch, 20000);
      
    //This variable is defined from the date of today.
    dateCheck = day();
    
    //This specifies how often there will be gathered a new API.
    //apiSwitch();
    setInterval(apiSwitch, 20000);
    
    //Textlayout for the legislation
    textFont("Orator Std");
    fill(80);
    textSize(20);
}

//This function gathers data from the api variables and write statements from those
function Statement(){
  background(235);
  image(statementImage, 1000, 0);
  textAlign(LEFT);
  textStyle(NORMAL);
  text(GenericStatement, 1190, 400, 650, 500);
  textStyle(BOLD);
  text(SpinnedStatement, 1190, 650, 650, 500);
  textAlign(CENTER);
  text(RawDataType, 125, 500, 700, 350);
  
  //Debug Block
  console.log("-------------------------------------------------------------------------------------");
  console.log("Dag: " + dateCheck);
  console.log("Generic: " + GenericStatement);
  console.log("Spin: " + SpinnedStatement);
  console.log("RåData: " + RawDataType);
  console.log("-------------------------------------------------------------------------------------");

  dateCheck++
}

function draw() {
  url1 = api1.Hack + api1.Master + api1.Country[countryOfData] + api1.End;
  
  url4 = api4.Master + dateOfCrime
  
  url5 = api5.Master + api5.State[stateOfKill]
  
  apiDate = floor(map(dateCheck, 1, 32, 0, 10));
}