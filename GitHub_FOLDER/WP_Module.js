//var for carmaOrg
var plantCountSpin, carbonSpin, energySpin, fossilSpin, nuclearSpin, genNumber, genStatement;

//var for humanitarians
var flashFloodSpin, droughtSpin, epidemicSpin, insectInfestSpin, otherSpin, complexEmergencySpin, floodSpin, earthquakeSpin, tropicalCycloneSpin, coldWaveSpin, inCountries, countriesArray;

//var for crime data
var Burglary, CriminalDmgArson, OtherTheft, ViolentCrime, VehicleCrime, chooseCrime;

//variabler for function tortData()
var torUC, words, cutSentence, separator, sentence, replace, rawCut;

//The dataType variables are connectors for each specific API information.
var dataTypeCarbon, dataTypePlantCount, dataTypeEnergy, dataTypeFossil, dataTypeNuclear; //variables for API-Carma
var dataTypeHum;
var dataTypeTort;
var dataTypeCrime;
var dataTypeKill, killcount; //variables for kills

//API READY boleans
var carmaRdy = false;
var humRdy = false;
var torRdy = false;
var crimeRdy = false;
var killRdy = false;

//Index variables
var c = 0;
var m = 0;
var fuel = 0;

//Variable for the length of the crime arrays
var crimeLength;


//gotData function for Carma API. This is where the previously specified variables get connected to their corrisponding data information
function gotData(carmaOrg) {
    dataTypeCarbon = carmaOrg[0].carbon.present; //Carbon Output in Tones

    //This boolean tells the word-processing function that the API data is ready for manipulation.
    carmaRdy = true;
}

//carmaData function for the LeaderLexicon JSON. These variables are for each statement type
function carmaData(data) {
  plantCountSpin = data.api.api1.Plant_Count; //Number of power plants
  carbonSpin = data.api.api1.Carbon; //Carbon emissions
  energySpin = data.api.api1.Energy; //Energy levels
  fossilSpin = data.api.api1.Fossil; //percentage of fossil fuel
  nuclearSpin = data.api.api1.Nuclear; //percentage of nuclear fuel
  genNumber = data.api.api1.Generic_Number;
  genStatement = data.api.api1.Generic_Statement;

  c = 0;
  m = 0;

  if (carmaRdy) {
    
    //m defines which sentence to connect to the raw datatype.
    m = floor(random(2));

    switch (carmaDate) {
      case 0: //plant count
        SpinnedStatement = "OUR FANTASTIC ENERGY SECTOR IS PRODUCING A PHENOMENAL AMOUNT OF ENERGY, SO MUCH THAT " + dataTypeCarbon + " KG’S OF EXTRA MATERIALS HAVE BEEN PRODUCED ALSO!";
        RawDataType = "CARBON EMISSION\n" + "<name>" + api1.Country[countryOfData] + "</name>\n" + "</present>" + dataTypeCarbon + carbonSpin + "<present>";
        break;

      case 1: //Carbon emissions
        SpinnedStatement = "TIRED OF COLD WINTERS AND FLACCID SUMMERS? THE PEOPLE WORKING IN THE ENERGY SECTOR HAS GOT YOU COVERED " + dataTypeCarbon + " KG’S OF PLANET HEATING MATERIALS HAS BEEN PRODUCED.”";
        RawDataType = "CARBON EMISSION\n" + "<name>" + api1.Country[countryOfData] + "</name>\n" + "</present>" + dataTypeCarbon + carbonSpin + "<present>";
        break;
    }
    GenericStatement = genStatement;
    Statement();
  }

}



//gotData function for Humanitarian (Natural Disaster) API. 
function gotData2(humanitarian) {
    dataTypeHum = humanitarian.data[humDate+1].primary_type; //The index variabel J randomies the natural disaster.
    inCountries = "Foreign Country"
    
    /*if(null != humanitarian.data[humDate+1].operation[0].label){
      inCountries = humanitarian.data[humDate+1].operation[0].label; //This is country information of where the disaster happened  
    }else{
    */

    //This boolean tells the word-processing function that the API data is ready for manipulation.
    humRdy = true;
}

var humDataLength;

//humData function for Leader Lexicon JSON
function humData(gotHumData) {
  flashFloodSpin = gotHumData.api.api2.Primary_Type.Flash_Flood; //Flash Flood
  droughtSpin = gotHumData.api.api2.Primary_Type.Drought; //Drought
  epidemicSpin = gotHumData.api.api2.Primary_Type.Epidemic; //Epidemic
  insectInfestSpin = gotHumData.api.api2.Primary_Type.Insect_Infestation; //Insect Infestation
  otherSpin = gotHumData.api.api2.Primary_Type.Other; //Other (Terror / Demonstration)
  complexEmergencySpin = gotHumData.api.api2.Primary_Type.Complex_Emergency; //Complex Emergency (Same as otehr)
  floodSpin = gotHumData.api.api2.Primary_Type.Flood; //Flood
  earthquakeSpin = gotHumData.api.api2.Primary_Type.Earthquake; //Earthquake
  tropicalCycloneSpin = gotHumData.api.api2.Primary_Type.Tropical_Cyclone; //Tropical Cyclone
  coldWaveSpin = gotHumData.api.api2.Primary_Type.Cold_Wave; //Cold Wave
  genStatement = gotHumData.api.api2.Generic_Statement; //Generic Statement

  if (humRdy) {
    switch (dataTypeHum) {
      case "Flash Flood": //Flashflood
        humDataLength = gotHumData.api.api2.Primary_Type.Flash_Flood.length
        SpinnedStatement = flashFloodSpin[floor(random(humDataLength))];
        RawDataType = "NATURAL DISASTERS\n" + "'primary_type:'" + dataTypeHum + " in " + "label: " +  inCountries;
        Statement();
        break;

      case "Drought": //drought
        humDataLength = gotHumData.api.api2.Primary_Type.Drought.length;
        SpinnedStatement = droughtSpin[floor(random(humDataLength))];
        RawDataType = "NATURAL DISASTERS\n" + "'primary_type:'" + dataTypeHum + " in " + "label: " +  inCountries;
        break;

      case "Epidemic": //epidemic
      humDataLength = epidemicSpin = gotHumData.api.api2.Primary_Type.Epidemic.length
        SpinnedStatement = epidemicSpin[floor(random(humDataLength))];
        RawDataType = "NATURAL DISASTERS\n" + "'primary_type:'" + dataTypeHum + " in " + "label: " +  inCountries;
        break;

      case "Insect Infestation": //insect infestation
      humDataLength = gotHumData.api.api2.Primary_Type.Insect_Infestation.length;
        SpinnedStatement = insectInfestSpin[floor(random(humDataLength))];
        RawDataType = "NATURAL DISASTERS\n" + "'primary_type:'" + dataTypeHum + " in " + "label: " +  inCountries;
        break;

      case "Other": //other
      humDataLength = gotHumData.api.api2.Primary_Type.Other.length;
        SpinnedStatement = otherSpin[floor(random(humDataLength))];
        RawDataType = "NATURAL DISASTERS\n" + "'primary_type:'" + dataTypeHum + " in " + "label: " +  inCountries;
        break;

      case "Complex Emergency": //complex emergency
      humDataLength = gotHumData.api.api2.Primary_Type.Complex_Emergency.length;
        SpinnedStatement = complexEmergencySpin[floor(random(humDataLength))];
        RawDataType = "NATURAL DISASTERS\n" + "'primary_type:'" + dataTypeHum + " in " + "label: " +  inCountries;
        break;

      case "Flood": //flood
      humDataLength = gotHumData.api.api2.Primary_Type.Flood.length;
        SpinnedStatement = floodSpin[floor(random(humDataLength))];
         RawDataType = "NATURAL DISASTERS\n" + "'primary_type:'" + dataTypeHum + " in " + "label: " +  inCountries;
        break;

      case "Earthquake": //earthquake
      humDataLength = gotHumData.api.api2.Primary_Type.Earthquake.length;
        SpinnedStatement = earthquakeSpin[floor(random(humDataLength))];
        RawDataType = "NATURAL DISASTERS\n" + "'primary_type:'" + dataTypeHum + " in " + "label: " + inCountries;
        break;

      case "Tropical Cyclone": //tropical cyclone
      humDataLength = gotHumData.api.api2.Primary_Type.Tropical_Cyclone.length
        SpinnedStatement = tropicalCycloneSpin[floor(random(humDataLength))];
        RawDataType = "NATURAL DISASTERS\n" + "'primary_type:'" + dataTypeHum + " in " + "label: " + inCountries;
        break;

      case "Cold Wave": //cold wave
      humDataLength = gotHumData.api.api2.Primary_Type.Cold_Wave.length;
        SpinnedStatement = coldWaveSpin[floor(random(humDataLength))];
        RawDataType = "NATURAL DISASTERS\n" + "'primary_type:'" + dataTypeHum + " in " + "label: " + inCountries;
        break;
    }
    
    GenericStatement = genStatement;
    Statement();
  }
}



//gotData function for Torture Information API. 
function gotData3(torture) {
    dataTypeTort = torture.alerts[dateCheck].description; //Variabel connector for torture description.
    
    //This boolean tells the word-processing function that the API data is ready for manipulation.
    torRdy = true;
}

//tortData function Leader Lexicon JSON.
function tortData(gotTorData) {
  genStatement = gotTorData.api.api3.Generic_Statement; //Generic Statement
  
  if(torRdy){
    torUC = dataTypeTort.toUpperCase(); //This transforms dataTypeTort to UpperCase
  
    image(statementImage, 1000, 0);
    cutSentence = split(torUC, ".")
    words = split(cutSentence[0], " ");
    separator = " ";
    rawCut = join(words, separator);
  
  //This for loop changes "negative" words with words we define
    for (var i = 0; i < words.length; i++) { //The for-loop "collects" and changes the words
        if (words[i] == "TORTURE") {
            replace2 = splice(words, "EXISTENTIAL CRISIS", i)
            sentence = join(replace2, separator)
            words.splice(i + 1, 1);
        }
            if (words[i] == "TORTURE,") {
                replace2 = splice(words, "EXISTENTIAL CRISIS,", i)
                sentence = join(replace2, separator)
                words.splice(i + 1, 1);
            }

            if (words[i] == "ILL-TREATMENT,") {
                replace = splice(words, "BEHAVIORAL WELLNESS,", i)
                sentence = join(replace, separator)
                words.splice(i + 1, 1);
            }

            if (words[i] == "ILL-TREATMENT") {
                replace = splice(words, "BEHAVIORAL WELLNESS", i)
                sentence = join(replace, separator)
                words.splice(i + 1, 1);
            }

            if (words[i] == "DEGRADING") {
                replace = splice(words, "HUMOROUS", i)
                sentence = join(replace, separator)
                words.splice(i + 1, 1);
            }

            if (words[i] == "BEAT") {
                replace = splice(words, "CUDDLED", i);
                sentence = join(replace, separator);
                words.splice(i + 1, 1);
            if (words[i] == "PUNISHMENT") {
                replace = splice(words, "REWARD", i);
                sentence = join(replace, separator);
                words.splice(i + 1, 1);
            }
              if (words[i] == "ILL- TREATMENT") {
                replace = splice(words, "BEHAVIORAL WELLNESS", i);
                sentence = join(replace, separator);
                words.splice(i + 1, 1);
            }
              if (words[i] == "PRISONS") {
                replace = splice(words, "REHABILITATION FACILITIES", i);
                sentence = join(replace, separator);
                words.splice(i + 1, 1);
            }
              if (words[i] == "PRISON") {
                replace = splice(words, "REHABILITATION FACILITY", i);
                sentence = join(replace, separator);
                words.splice(i + 1, 1);
            }
              if (words[i] == "MILITARY") {
                replace = splice(words, "ORDER OF GREEN MEN", i);
                sentence = join(replace, separator);
                words.splice(i + 1, 1);
            }
              if (words[i] == "INTERROGATING") {
                replace = splice(words, "ASKING", i);
                sentence = join(replace, separator);
                words.splice(i + 1, 1);
            }
              if (words[i] == "LAW ENFORCEMENT") {
                replace = splice(words, "THE INSTITUTION OF COMFORTABILITY (IOC)", i);
                sentence = join(replace, separator);
                words.splice(i + 1, 1);
            }
              if (words[i] == "GOVERNMENT SECURITY SERVICES") {
                replace = splice(words, "THE INSTITUTION OF COMFORTABILITY (IOC)", i);
                sentence = join(replace, separator);
                words.splice(i + 1, 1);
            }
              if (words[i] == "DEATHS") {
                replace = splice(words, "MORE HOUSES AVAILABLE FOR RENT", i);
                sentence = join(replace, separator);
                words.splice(i + 1, 1);
            } else {
                words[i] = words[i];
                sentence = join(words, separator);
            }
          }
        }
  RawDataType = "TORTURE REPORTS:\n" + "description: " + rawCut;
  GenericStatement = genStatement;
  SpinnedStatement = sentence;
  
  Statement();
  }
}

var dateTest1;
var dateTest2;

//data from the crime API. 
function gotData4(crime) {
  crimeLength = crime.length;
  crimeDate = floor(map(dateCheck, dateTest1, dateTest2, 0, crimeLength)); //Api 3
  
  dataTypeCrime = crime[crimeDate].category;

  crimeRdy = true;
  setTimeout(crimeData, 8000);
}

var crimeDataLength;
var drugSpin;

//crimeData function for Leader Lexicon JSON
function crimeData(gotCrimeData) {
    burglarySpin = gotCrimeData.api.api4.Category.Burglary; //Burglary
    criminalDmgArsonSpin = gotCrimeData.api.api4.Category.CriminalDamageArson; //Criminal-Damage-Arson
    otherTheftSpin = gotCrimeData.api.api4.Category.OtherTheft; //OtherTheft
    violentCrimeSpin = gotCrimeData.api.api4.Category.ViolentCrime; //Violent Crime
    vehicleCrimeSpin = gotCrimeData.api.api4.Category.VehicleCrime; //Vehicle Crime
    drugSpin = gotCrimeData.api.api4.Category.Drugs; //Vehicle Crime
    genStatement = gotCrimeData.api.api4.Generic_Statement; //Generic Statement
    

    if (crimeRdy) {
        switch (dataTypeCrime) {
            case "burglary": //burglary
            crimeDataLength = gotCrimeData.api.api4.Category.Burglary.length;
                SpinnedStatement = burglarySpin[floor(random(crimeDataLength))];
                RawDataType = "CRIME COMMITTED:\n" + "Category:" + dataTypeCrime;
                break;

            case "criminal-damage-arson": //arson
            crimeDataLength = gotCrimeData.api.api4.Category.CriminalDamageArson.length;
                SpinnedStatement = criminalDmgArsonSpin[floor(random(crimeDataLength))];
                RawDataType = "CRIME COMMITTED:\n" + "Category:" + dataTypeCrime;
                break;

            case "other-theft": //other theft
            crimeDataLength = gotCrimeData.api.api4.Category.OtherTheft.length;
                SpinnedStatement = otherTheftSpin[floor(random(crimeDataLength))];
                RawDataType = "CRIME COMMITTED:\n" + "Category:" + dataTypeCrime;
                break;

            case "violent-crime": //violent crime
            crimeDataLength = gotCrimeData.api.api4.Category.ViolentCrime.length;
                SpinnedStatement = violentCrimeSpin[floor(random(crimeDataLength))];
                RawDataType = "CRIME COMMITTED:\n" + "Category:" + dataTypeCrime;
                break;

            case "vehicle-crime": //vehicle crime
            crimeDataLength = gotCrimeData.api.api4.Category.VehicleCrime.length;
                SpinnedStatement = vehicleCrimeSpin[floor(random(crimeDataLength))];
                RawDataType = "CRIME COMMITTED:\n" + "Category:" + dataTypeCrime;
                break;
                
            case "drugs": //drugs
              crimeDataLength = gotCrimeData.api.api4.Category.Drugs.length;
                SpinnedStatement = drugSpin[floor(random(crimeDataLength))];
                RawDataType = "CRIME COMMITTED:\n" + "Category:" + dataTypeCrime;
              break;
              
            case "anti-social-behaviour": //anti-social-behaviour
              SpinnedStatement = "This is Anti-Social-Behaviour";
              RawDataType = "CRIME COMMITTED:\n" + "Category:" + dataTypeCrime;
              break;
        }
    }
    
    GenericStatement = genStatement;
    Statement();
}


//function gotData5 for API killings
function gotData5(kills) {
    killCount = kills.length;
    dataTypeKill = kills;
    
    killRdy = true;
    //setTimeout(killingsData, 1000);
}

//function killData for LeaderLexicon JSON
function killData(gotKillData) {
    genStatement = gotKillData.api.api5.Generic_Statement; //Generic Statement
    GenericStatement = genStatement;
    if (killRdy) {
      killStatement = floor(random(4));
      switch(killStatement){
        case 0:
          SpinnedStatement = killCount + " CRIMES AGAINST THE “OVERPOPULATION ACT” HAS BEEN EFFECTIVELY DEALT WITH, TO THE FULL EXTENT OF THE LAW.";
          break;
        case 1:
          SpinnedStatement = "AMAZING WORK BY LAW ENFORCEMENT TODAY. " + killCount + " CONFLICTS HAS BEEN RESOLVED WITH SUPER EFFECTIVE WARNING SHOTS.";
          break;
        case 2:
          SpinnedStatement = "REGULAR COMMUNITY LAW ENFORCEMENT RESULTS IN " + killCount + " CITIZENS READY TO PAY.";
          break;
        case 3:
            SpinnedStatement = "YESTERDAYS INCIDENTS RESULTS IN BUSIER PSYCHIATRISTS. THE FAMILIES OF " + killCount + " NEW JOB OPENINGS.";
          break;
      }
      RawDataType = "POLICE KILLINGS\n" + "count:" + killCount + " IN " + "state:" + api5.State[stateOfKill];
    }
    Statement();
}