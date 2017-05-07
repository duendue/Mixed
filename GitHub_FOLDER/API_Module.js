//The following objects are the vital informations of each API
//CarbonEmissions / Energy
var api1 = {
    Name: "Carma",
    Master: 'http://carma.org/api/1.1/searchLocations?name=',
    Country: ["Denmark", "Argentina", "China", "United States", "France"],
      End: '&region_type=2&format=json',
    Hack: 'https://crossorigin.me/'
} 

//Natural Disasters
var api2 = {
    Name: "Humanitarian",
    Master: 'https://www.humanitarianresponse.info/api/v1.0/disasters?filter[status]=current',
} 

//Torture
var api3 = {
    Name: "Torture",
    Master: 'https://raw.githubusercontent.com/pdfliberation/amnestydata/master/parsed-data/2008%20torture%20extract.json'
} 

//Crime Rates / Types UK (Evt. brug antallet af crime cases som statement point)
var api4 = {
    Name: "Crime",
    Master: 'https://data.police.uk/api/crimes-no-location?category=all-crime&force=warwickshire&date=2013-0',
}

//Information of Humans killed by officers in service
var api5 = {
  Name: "Killings",
  Master: "https://thecountedapi.com/api/counted?state=",
  State: ["NY", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI"]
}

//These variables are INDEX modifiers. var i controls the random api function and var j controls random information from those api's
var dateOfCrime = 1;
var countryOfData = 0;
var stateOfKill = 0;

//The URL 
var url1 = api1.Hack + api1.Master + api1.Country[countryOfData] + api1.End; //Carma URL
var url2 = api2.Master; //Humanitarian URL
var url3 = api3.Master //Torture URL
var url4 = api4.Master + dateOfCrime //CrimeData URL
var url5 = api5.Master + api5.State[stateOfKill]

var apiMaster = [api1.Name, api2.Name, api3.Name, api4.Name, api5.Name];

function apiSwitch() {
  //console.log("Step 1")
    j = floor(random(50));
    c = floor(random(5));

    switch (apiDate) {
        case 0: //Carma
        console.log("case 0");
            carmaDate = floor(map(dateCheck, 1, 3, 0, 1)); //Api 0
            countryOfData = floor(map(dateCheck, 1, 3, 0, 2));
            
            loadJSON(url1, gotData);
            loadJSON("LeaderLexicon.json", carmaData);
            break;

        case 1: //Humanitarian
        console.log("case 1");
            humDate = floor(map(dateCheck, 4, 8, 10, 30)); //Api 1
            loadJSON(url2, gotData2);
            loadJSON("LeaderLexicon.json", humData);
            break;

        case 2: //Torture
        console.log("case 2");
            loadJSON(url3, gotData3)
            loadJSON("LeaderLexicon.json", tortData);
            break;

        case 3: //Crime
        console.log("case 3");
            dateOfCrime = floor(map(dateCheck, 11, 13, 1, 4));
            //url4 = api4.Master + dateOfCrime 
            dateTest1 = 11;
            dateTest2 = 13;
            loadJSON(url4, gotData4)
            loadJSON("LeaderLexicon.json", crimeData);
            break;
            
        case 4: //Killings
        console.log("case 4");
            stateOfKill = floor(map(dateCheck, 14, 15, 0, 6));
            //url5 = api5.Master + api5.State[stateOfKill]
            loadJSON(url5, gotData5);
            loadJSON("LeaderLexicon.json", killData);
          break;
          
        case 5: //Torture
        console.log("case 5");
          loadJSON(url3, gotData3)
          loadJSON("LeaderLexicon.json", tortData);
          break;
          
        case 6: //Humanitarian
        console.log("case 6");
          humDate = floor(map(dateCheck, 18, 21, 20, 40)); //Api 1
          loadJSON(url2, gotData2);
          loadJSON("LeaderLexicon.json", humData);
          break;
          
        case 7: //Killings
        console.log("case 7");
          stateOfKill = floor(map(dateCheck, 22, 25, 7, 11));
          //url5 = api5.Master + api5.State[stateOfKill]
          loadJSON(url5, gotData5);
          loadJSON("LeaderLexicon.json", killData);
          break;
          
        case 8: //CarmaData
        console.log("case 8");
          carmaDate = floor(map(dateCheck, 25, 26, 0, 2)); //Api 0
          countryOfData=floor(map(dateCheck, 25, 26, 3, 5))
          url1 = api1.Hack + api1.Master + api1.Country[countryOfData] + api1.End;
          loadJSON(url1, gotData);
          loadJSON("LeaderLexicon.json", carmaData);
          break;
          
        case 9: //Crime
        console.log("case 9");
          url4 = api4.Master + dateOfCrime 
          dateOfCrime = floor(map(dateCheck, 27, 32, 7, 9));
          dateTest1 = 27;
          dateTest2 = 32;
          loadJSON(url4, gotData4)
          loadJSON("LeaderLexicon.json", crimeData);
          break;
    }
}
