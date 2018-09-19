//
// initialize var to get reference on the the angular app
var app = angular.module('overwatch-stats-app', []);

// initialize 
var PouchDB = require('pouchdb-browser');
var matchDB = new PouchDB('match_database');
var heroDB = new PouchDB('hero_database');
var mapDB = new PouchDB('map_database');




// define array to store the entries
var dbEntries = [];
var heroes = [];
var dbIndex = 0;
var mapDbIndex = 0;
var heroDBIndex = 0;
var heroDBSize = 0;

async function setupDatabase() {



    // setup the matchDB array

    // fill the array with the entries
    matchDB.allDocs({include_docs: true}).then(function(result){
        // fill array with for loop
        for(i = 0; i < result.rows.length; i++){
            dbEntries.push(result.rows[i].doc);
        }
    }).catch(function(err){
        console.log("Error whie filling the matchDBArray: " + err);
    }).then(function (){
        // get the highes index of the db
        // if the array is empty, the index is 0
        if(dbEntries.length == 0){
            dbIndex = 0;
        }
        // else its the id of the last element
        else{
            dbIndex = dbEntries[dbEntries.length-1]._id;
        }
        console.log("Length of dbEntries array: " + dbIndex.toString());
    }).catch(function(err){
        console.log("Error while getting the length of the dbEntries array: " + err);
    }).then(function (){
        // update the view
        angular.element(document.getElementById('controllerBody')).scope().updateView();
    }).catch(function (err){
        // log error
        console.log("Error while updating the view: " + err);
    });




    // setup the the heroDB
    // set up the heroes array
    heroDB.allDocs({include_docs: true}).then(function(result){
        // fill the hero array
        for(i = 0; i < result.rows.length; i++){
            heroes.push(result.rows[i].doc);
        }
    }).catch(function (err){
        console.log(err);
    }).then(function(){
        // get the highes index of the heroDB
        // if the array is empty, the index = 0
        if(heroes.length == 0){
            heroDBSize = 0;
            heroDBIndex = 0;
        }
        // else its the id of the last element
        else{
            heroDBIndex = heroes[heroes.length-1]._id;
            heroDBSize = heroes.length;
        }
        console.log("Hero DB size: " + heroDBSize);
        console.log("Hero DB index: " + heroDBIndex);

        // return the herdbSize
        return heroDBSize;
    }).then(function (herodbSize){
        // if the hero db is empty, create a new one
    if(herodbSize == 0){

        // create object (Ana)
        var tempHero = {_id: heroDBIndex.toString(), name: 'Ana'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Ana'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;
        console.log("index top: " + heroDBIndex);

        // create object (Bastion)
        tempHero = {_id: heroDBIndex.toString(), name: 'Bastion'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Bastion'});
            console.log("Bastion in DB");
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;

        console.log("Index after bastion" + heroDBIndex);

        // create object (Brigitte)
        tempHero = {_id: heroDBIndex.toString(), name: 'Brigitte'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Brigitte'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;

        // create object (D.VA)
        tempHero = {_id: heroDBIndex.toString(), name: 'D.VA'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'D.VA'});
            console.log("DVA in DB");
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;

        // create object (Doomfist)
        tempHero = {_id: heroDBIndex.toString(), name: 'Doomfist'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Doomfist'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;

        console.log("Index after doomfist: " + heroDBIndex);

        // create object (Genji)
        tempHero = {_id: heroDBIndex.toString(), name: 'Genji'};
        // push to database
        heroes.push({_id: heroDBIndex.toString(), name: 'Genji'});
        heroDB.put(tempHero).then(function(response){
            // response
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;

        // create object (Hanzo)
        tempHero = {_id: heroDBIndex.toString(), name: 'Hanzo'};
        // push to database
        heroes.push({_id: heroDBIndex.toString(), name: 'Hanzo'});
        heroDB.put(tempHero).then(function(response){
            // response
            console.log("Hanzo in DB");
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Junkrat)
        tempHero = {_id: heroDBIndex.toString(), name: 'Junkrat'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Junkrat'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;

        // create object (Lúcio)
        tempHero = {_id: heroDBIndex.toString(), name: 'Lúcio'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Lúcio'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (McCree)
        tempHero = {_id: heroDBIndex.toString(), name: 'McCree'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'McCree'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Mei)
        tempHero = {_id: heroDBIndex.toString(), name: 'Mei'};
        // push to database
        heroes.push({_id: heroDBIndex.toString(), name: 'Mei'});
        heroDB.put(tempHero).then(function(response){
            // response
            console.log("Mei in DB");
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Mercy)
        tempHero = {_id: heroDBIndex.toString(), name: 'Mercy'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Mercy'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Moira)
        tempHero = {_id: heroDBIndex.toString(), name: 'Moira'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Moira'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;

        // create object (Orisa)
        tempHero = {_id: heroDBIndex.toString(), name: 'Orisa'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Orisa'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Pharah)
        tempHero = {_id: heroDBIndex.toString(), name: 'Pharah'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Pharah'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;

        // create object (Reaper)
        tempHero = {_id: heroDBIndex.toString(), name: 'Reaper'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Reaper'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Reinhardt)
        tempHero = {_id: heroDBIndex.toString(), name: 'Reinhardt'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Reinhardt'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object Zenyatta
        tempHero = {_id: heroDBIndex.toString(), name: 'Zenyatta'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Zenyatta'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Roadhog)
        tempHero = {_id: heroDBIndex.toString(), name: 'Roadhog'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Roadhog'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Soldier 76)
        tempHero = {_id: heroDBIndex.toString(), name: 'Soldier: 76'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Soldier: 76'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object Sombra
        tempHero = {_id: heroDBIndex.toString(), name: 'Sombra'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Sombra'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;

        // create object Symmetra
        tempHero = {_id: heroDBIndex.toString(), name: 'Symmetra'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Symmetra'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Torbjörn)
        tempHero = {_id: heroDBIndex.toString(), name: 'Torbjörn'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Torbjörn'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Tracer)
        tempHero = {_id: heroDBIndex.toString(), name: 'Tracer'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Tracer'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Widowmaker)
        tempHero = {_id: heroDBIndex.toString(), name: 'Widowmaker'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Widowmaker'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object Winston
        tempHero = {_id: heroDBIndex.toString(), name: 'Winston'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Winston'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Zarya)
        tempHero = {_id: heroDBIndex.toString(), name: 'Zarya'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Zarya'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;


        // create object (Wreckingball)
        tempHero = {_id: heroDBIndex.toString(), name: 'Wreckingball'};
        // push to database
        heroDB.put(tempHero).then(function(response){
            // response
            heroes.push({_id: heroDBIndex.toString(), name: 'Wreckingball'});
        }).catch(function (err){
            console.log(err);
        })

        // increment hero db index
        heroDBIndex++;
        console.log("index bottom: " + heroDBIndex);
    } // incase the hero db wasn't set up yet, the db is now fully setup.

    }).then(function(){
        // update the view
        angular.element(document.getElementById('controllerBody')).scope().updateView();
    }).catch(function(err){
        console.log(err);
    })




// ##########################################################################


}


window.onload = setupDatabase;





/*
// define the heroes
heroes = [{name: 'Ana'}, {name: 'Bastion'}, {name: 'Brigitte'}, {name: 'D.VA'}, {name: 'Doomfist'}, {name: 'Genji'}, {name: 'Hanzo'}, {name: 'Junkrat'},
    {name: 'Lúcio'}, {name: 'McCree'}, {name: 'Mei'}, {name: 'Mercy'}, {name: 'Moira'}, {name:"Orisa"}, {name:"Pharah"}, {name: "Reaper"}, {name:"Reinhardt"}, {name:"Zenyatta"},
    {name: 'Roadhog'}, {name: 'Soldier: 76'}, {name: 'Sombra'}, {name: 'Symmetra'}, {name: 'Torbjörn'}, {name: 'Tracer'}, {name: 'Wnameowmaker'}, {name: 'Winston'}, {name: 'Zarya'},
    {name: 'Wreckingball'}
];*/


// define the maps
maps = [{name: 'Hanamura'}, {name: 'Horizon Lunar Colony'}, {name: 'Temple of Anubis'}, {name: 'Volskaya Industries'}, {name: 'Dorado'},
        {name: 'Junkertown'}, {name: 'Rialto'}, {name: 'Route 66'}, {name: 'Watchpoint: Gibralta'}, {name: 'Blizzard World'},
        {name: 'Eichenwalde'}, {name: 'Hollywood'}, {name: 'King\'s Row'}, {name: 'Numbani'}, {name: 'Ilios'}, {name: 'Lijiang Tower'},
        {name: 'Nepal'}, {name: 'Oasis'}
];

// -----------------------------------------------------
// Tab Controller
// -----------------------------------------------------

//
// controller manages the tabs
app.controller('TabController', function($scope){
//
$scope.showOverview = true;
$scope.showSettings = false;
$scope.showForm = false;


// get reference to the nav bar
var overviewLink = document.getElementById("overview");
var settingsLink = document.getElementById("settings");
var matchLink = document.getElementById("match");


$scope.showSettingsContainer = function(){
    // modify the content
    $scope.showOverview = false;
    $scope.showSettings = true;
    $scope.showForm = false;

    overviewLink.setAttribute("class", "");
    settingsLink.setAttribute("class", "active");
    matchLink.setAttribute("class", "");

}


$scope.showOverviewContainer = function(){
    // modify the content
    $scope.showOverview = true;
    $scope.showSettings = false;
    $scope.showForm = false;

    overviewLink.setAttribute("class", "active");
    settingsLink.setAttribute("class", "");
    matchLink.setAttribute("class", "");
}

$scope.showAddMatch = function(){
    // modify the content
    $scope.showOverview = false;
    $scope.showSettings = false;
    $scope.showForm = true;

    overviewLink.setAttribute("class", "");
    settingsLink.setAttribute("class", "");
    matchLink.setAttribute("class", "active");
    }


});



// -----------------------------------------------------
// Content Controller
// -----------------------------------------------------



//
// ContentController behavior
app.controller('ContentController', function($scope) {
    // get reference to dbEntries
    $scope.dbArray = dbEntries;

    $scope.showLoading = true;


    // get length of db array
    var length = dbEntries.length;

    // create true false array with according length
    $scope.showContentDelete = new Array(length);
    // initialize
    for(i = 0; i < length; i++){
        $scope.showContentDelete[i] = false;
    }

    // test
    $scope.showDB = function(){
        console.log("DB Entries");
        console.log(dbEntries);
        console.log("DB Index (internal)");
        console.log(dbIndex);

        heroDB.allDocs({include_docs: true}).then(function(docs){
            console.log(docs.rows);
        }).catch(function(err){
            console.log(err);
        })
    }


    $scope.toggleShowContentDelete = function(index){
        //
        $scope.showContentDelete[index] = !$scope.showContentDelete[index];
    }

    $scope.removeItem = function(index){
        // store the element which is to be removed
        var deletedElement = dbEntries[index];

        // remove the element from the array
        dbEntries.splice(index, 1);
        // close the contentDelete dialog
        $scope.showContentDelete[index] = false;
        
        // remove the entry from the database
        // get the id of the element
        var varIndex = deletedElement._id;
        matchDB.get(varIndex.toString()).then(function(doc) {
            return matchDB.remove(doc);
          }).then(function (result) {
            // handle result
          }).catch(function (err) {
            console.log(err);
          });

        // update the delta
        updateDelta(index);

    }

    function updateDelta(index){
        // update delta in array
        // update the delta of the entry after deleting one

        // there are 4 cases
        // 1. the element is the last one in the array. after deleting it, the array is empty
        // 2. the element is the first in the array. after deleting it, all other elements will have index-1
        // 3. the element is somewhere in the array, but not first or last.
        // 4. the element is last in the array. the current index will be invalid for the array.

        // handle case 1: the element was the last one in the array
        if(dbEntries.length == 0){
            // update the dbIndex when the db is empty
            dbIndex = 0;
            return;
        }

        // handle case 2: the element is the first in the array
        else if(index == 0 && dbEntries.length != 0){
            // the element has been removed in the previous function. The only delta to be updated is from element[index] -> set to 0
            dbEntries[index].delta = 0;

            // get the id from the element and manipulate the database
            var tempID = dbEntries[index]._id;

            // get the element from the database
            matchDB.get(tempID.toString()).then(function(doc) {
                // manipulate the delta
                doc.delta = 0;
                // write back to database
                return matchDB.put(doc);
              }).then(function(response) {
                // handle response
              }).catch(function (err) {
                console.log(err);
              });
        }

        // handle case 3: the element is somewhere in the array. The index is greater than 0 but smaller than the length of the array
        else if(index > 0 && index < dbEntries.length){
            // the element has been removed in the previous function.
            // the delta to be updated is the one at position [index].
            // update by newDelta = [index].sr - [index-1].sr

            // update the array
            dbEntries[index].delta = dbEntries[index].sr - dbEntries[index-1].sr

            // update the database
            // get the id of the element at position [index]
            var tempID = dbEntries[index]._id;

            // load the element at position [index]
            // and write the new delta
            matchDB.get(tempID.toString()).then(function(doc) {
                // manipulate the delta
                doc.delta = dbEntries[index].delta;
                // write back to database
                return matchDB.put(doc);
              }).then(function(response) {
                // handle response
              }).catch(function (err) {
                console.log(err);
              });
        }

        // handle case 4: the element was the last in the array. the index is equal to the array length
        else if(index == dbEntries.length){
            // nothing left to do.
        }

        // if this is reached, undefined behavior occured
        else{
            console.log("undefined behavior reached while trying to remove an entry from the database");
        }
        
    }

    $scope.updateView = function(){
        // initialize the "showLoading" variable to false
        $scope.showLoading = false;
        
        // rerender the view
        $scope.$apply();
    }
    

});


// -----------------------------------------------------
// Form Controller
// -----------------------------------------------------

app.controller('FormController', function($scope){

    // get reference to the hero array
    $scope.heroes = heroes;

    // get reference to the map array
    $scope.maps = maps;


    // function to add a match to the DB
    $scope.addMatch = function(){

        // var for win/loss
        var wl;

        // get if its a win, loss or draw
        if($scope.winLoss == -1){
            wl = "Defeat";
        }
        else if($scope.winLoss == 1){
            wl = "Victory";
        }
        else if($scope.winLoss == 0){
            wl = "Draw";
        }
        else{
            wl = "Unknown";
        }


        var side;

        // get the startingside
        if($scope.startingside == 1){
            side = "Attack";
        }
        else if($scope.startingside == -1){
            side = "Defend";
        }
        else if($scope.startingside == 0){
            side = "Control";
        }
        else{
            side = "Unknown";
        }

        // get the group size
        var groupsize = 0;

        if($scope.friend1 != null){
            groupsize++;
        }
        if($scope.friend2 != null){
            groupsize++;
        }
        if($scope.friend3 != null){
            groupsize++;
        }
        if($scope.friend4 != null){
            groupsize++;
        }
        if($scope.friend5 != null){
            groupsize++;
        }



        // get the date and the current time
        var date = new Date();

        // format for date YYYYMMDD
        // making the month 2 digits (in case with leading 0)
        var month = date.getMonth()+1;
        if(month < 10){
            month = "0" + month.toString();
        }
        else{
            month = month.toString();
        }

        // making the date 2 digits (in case with leading 0)
        var day = date.getDate();
        if(day < 10){
            day = "0" + day.toString();
        }
        else{
            day = day.toString();
        }

        var currentDate = date.getFullYear().toString() + month + day;

        // format HHMMSS
        // making the hours 2 digits (leading 0)
        var hours = date.getHours();
        if(hours < 10){
            hours = "0" + hours.toString();
        }
        else{
            hours = hours.toString();
        }

        // making minutes two digits (leading 0)
        var minutes = date.getMinutes();
        if(minutes < 10){
            minutes = "0" + minutes.toString();
        }
        else{
            minutes = minutes.toString();
        }

        // making seconds 2 digits (leading 0)
        var seconds = date.getSeconds();
        if(seconds < 10){
            seconds = "0" + seconds.toString();
        }
        else{
            seconds = seconds.toString();
        }
        var currentTime = hours + minutes + seconds;

        var dateIdentifier = currentDate + "_" + currentTime;




        // specify the map
        var specMap = null;

        if($scope.map != null){
            specMap = $scope.map.name;
        }
        else{
            specMap = "Unknown";
        }




        // get the heroes
        var hero1 = null;
        var hero2 = null;
        var hero3 = null;
        var hero4 = null;

        
        if($scope.selectedHero1 != null){
            hero1 = $scope.selectedHero1.name;
        }
        else{
            hero1 = "Unknown";
        }
        if($scope.selectedHero2 != null){
            hero2 = $scope.selectedHero2.name;
        }
        else{
            hero2 = "Unknown";
        }
        if($scope.selectedHero3 != null){
            hero3 = $scope.selectedHero3.name;
        }
        else{
            hero3 = "Unknown";
        }
        if($scope.selectedHero4 != null){
            hero4 = $scope.selectedHero4.name;
        }
        else{
            hero4 = "Unknown";
        }

        // calculate the delta
        if(dbEntries.length > 0){
            var delta = $scope.newsr - dbEntries[dbEntries.length-1].sr;
        }
        else{
            var delta = 0;
        }

        // check if sr = null and if so set it to 0
        if($scope.newsr == null){
            $scope.newsr = 0;
        }

        // increment id
        dbIndex++;
        // turn the id into a string
        idString = dbIndex.toString();


        // convert match duration to seconds
        // if seconds is greater than 59, make it to 59
        if($scope.matchDurationSeconds > 59){
            $scope.matchDurationSeconds = 59;
        }
        var matchDuration = $scope.matchDurationMinutes * 60 + $scope.matchDurationSeconds;

        // convert the objective time to seconds
        // if seconds is greater than 59, make it to 59
        if($scope.objectiveTimeSeconds > 59){
            $scope.objectiveTimeSeconds = 59;
        }
        var objectiveTime = $scope.objectiveTimeMinutes * 60 + $scope.objectiveTimeSeconds;


        

        // create a new object containing all the information needed for an entry
        newEntry = {_id: idString, sr: $scope.newsr, matchEnd: wl, matchDuration: matchDuration,
        scoreBlue: $scope.scoreBlue, scoreRed: $scope.scoreRed, map: specMap, startingSide: side, delta: delta,
        // heroes
        hero1: hero1, hero2: hero2, hero3: hero3, hero4: hero4,
        // friends
        groupSize: groupsize, friend1: $scope.friend1, friend2: $scope.friend2, friend3: $scope.friend3, friend4: $scope.friend4, friend5: $scope.friend5,
        // general match statistics
        eliminations: $scope.eliminations, objectiveKills: $scope.objectiveKills, objectiveTime: objectiveTime,
        heroDamageDone: $scope.heroDamageDone, healingDone: $scope.healingDone, deaths: $scope.deaths,
        // date and time
        date: dateIdentifier};


        // add the entry to the array
        //dbEntries.push(newEntry);

        matchDB.put(newEntry).then(function (response) {
            // handle response
          }).catch(function (err) {
            console.log(err);
        });

        
        matchDB.get(idString).then(function (doc) {
            dbEntries.push(doc);    // handle doc
          }).catch(function (err) {
            console.log(err);
          });



        // set the values in the form to null
        $scope.newsr = null;
        $scope.scoreBlue = null;
        $scope.scoreRed = null;
        $scope.winLoss = null;
        $scope.matchDurationMinutes = null;
        $scope.matchDurationSeconds = null;
        $scope.eliminations = null;
        $scope.objectiveKills = null;
        $scope.objectiveTimeMinutes = null;
        $scope.objectiveTimeSeconds = null;
        $scope.heroDamageDone = null;
        $scope.healingDone = null;
        $scope.deaths = null;
        $scope.startingside = null;
        $scope.map = null;
        $scope.selectedHero1 = null;
        $scope.selectedHero2 = null;
        $scope.selectedHero3 = null;
        $scope.selectedHero4 = null;
        $scope.friend1 = null;
        $scope.friend2 = null;
        $scope.friend3 = null;
        $scope.friend4 = null;
        $scope.friend5 = null;

        // disable save button for one second

    }
});


// -----------------------------------------------------
// Settings Controller
// -----------------------------------------------------

app.controller('SettingsController', function($scope){

    $scope.heroDBSettingsController = heroes;

    // get length of db array
    var length = heroes.length;

    $scope.showHeroDropDown = false;

    // create true false array with according length
    $scope.showContentDelete = new Array(length)
    
    // initialize
    for(i = 0; i < length; i++){
        $scope.showContentDelete[i] = false;
    }

    // toggle show content delete
    $scope.toggleShowContentDelete = function(index){
        //
        $scope.showContentDelete[index] = !$scope.showContentDelete[index];
    }

    $scope.toggleHeroDropDown = function(){
        var element = document.getElementById('heroDropDown');

        if($scope.showHeroDropDown == false){
            $scope.showHeroDropDown = true;
            element.setAttribute('src', '../../img/baseline-keyboard_arrow_up-24px.svg')
        }else{
            $scope.showHeroDropDown = false;
            element.setAttribute('src', '../../img/baseline-keyboard_arrow_down-24px.svg')


        }
    }

    $scope.removeItem = function(index){
        // store the element which is to be removed
        var deletedElement = heroes[index];

        // remove the element from the array
        heroes.splice(index, 1);
        // close the contentDelete dialog
        $scope.showContentDelete[index] = false;
        
        // remove the entry from the database
        // get the id of the element
        var varIndex = deletedElement._id;
        heroDB.get(varIndex.toString()).then(function(doc) {
            return heroDB.remove(doc);
          }).then(function (result) {
            // handle result
          }).catch(function (err) {
            console.log(err);
          });
    }


    $scope.updateView = function(){
        $scope.heroDBSettingsController = heroes;
        $scope.$apply();
    }

    

});


