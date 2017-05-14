//variable for statement image
var statementImage;

//These variables are for connected to the statements. Each statement get generated from the date.
var dateCheck;
var apiDate = 0;
var crimeDate;
var humDate;

//Variables for each type of statement
var SpinnedStatement;
var RawDataType;
var MasterUrl

//Preload of the official government legislation image
function preload() {
   statementImage = loadImage('assets/background.jpg');
}

function setup() {
    createCanvas(2000, 1000);
    background(255);

    //This variable is defined from the date of today.
    dateCheck = day();
    
    //This specifies how often there will be gathered a new API.
    setInterval(apiSwitch, 10000);
    
    //Textlayout for the Statement
    fill(80);
    textSize(22);
}

//This is the master function for the main text segments. It gathers data from the api variables and write statements from them
function Statement(){
  push();
  textFont("Orator Std");
  background(235);
  image(statementImage, 1000, 0);
  textAlign(LEFT);
  textStyle(NORMAL);
  text(GenericStatement, 1190, 365, 650, 480);
  textStyle(BOLD);
  text(SpinnedStatement, 1190, 635, 650, 500);
  textStyle(NORMAL);
  textFont("Rockwell");
  textAlign(CENTER);
  text(RawDataType, 125, 500, 700, 350);
  push();
  textSize(15);
  text("Data Source: " + MasterUrl, 125, 650, 700, 200)
  pop();
  pop();
  
  textFont("Rockwell");
  
  //Debug Log Block
  console.log("-------------------------------------------------------------------------------------");
  console.log("Dag: " + dateCheck);
  console.log("Generic: " + GenericStatement);
  console.log("Spin: " + SpinnedStatement);
  console.log("RåData: " + RawDataType);
  console.log("-------------------------------------------------------------------------------------");
}