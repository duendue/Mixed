//The following objects are the vital informations of each API
//CarbonEmissions / Energy
var api1 = {
    Name: "Carma",
    Master: 'http://carma.org/api/1.1/searchLocations?name=',
    Country: 'Denmark',
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
var api6 = {
    Name: "Crime",
    Master: 'https://data.police.uk/api/crimes-no-location?category=all-crime&force=warwickshire',
    Date: '&date=2013-10'
}

//Information of Humans killed by officers in service
var api7 = {
  Name: "Killings",
  Master: "https://thecountedapi.com/api/counted?state=",
  State: "NY"
}

//Unemployment Rate of USA
var api8 = {
  Name: "Unemployment",
  Master: "http://api.dol.gov/V1/statistics/BLS_Numbers/unemploymentRate?KEY=352e8ef9-7b38-4428-875b-eefd39df6289",
}

//The URL 
var url1 = api1.Hack + api1.Master + api1.Country + api1.End; //Carma URL
var url2 = api2.Master; //Humanitarian URL
var url3 = api3.Master //Torture URL
var url6 = api6.Master + api6.Date //CrimeData URL
var url7 = api7.Master + api7.State
var url8 = api8.Master

var apiMaster = [api1.Name, api2.Name, api3.Name, api6.Name, api7.Name, api8.Name];

function apiSwitch() {
    j = floor(random(50));
    q = floor(random(40));
    i = floor(random(3));

    switch (apiMaster[i]) {
        case "Carma":
            loadJSON(url1, gotData);
            loadJSON("LeaderLexicon.json", carmaData);
            break;

        case "Humanitarian":
            loadJSON(url2, gotData2);
            loadJSON("LeaderLexicon.json", humData);
            break;

        case "Torture":
            loadJSON(url3, gotData3)
            if(torRdy){
            tortureSpin();
            }
            break;

        case "Crime":
            loadJSON(url6, gotData4)
            break;
            
        case "Killings":
          
          break;
          
        case "Unemployment":
          
          break;
    }
}
