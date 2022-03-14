const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const app = express();
const http = require('http').createServer(app);
const request = require('request');
const port = 5005;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

function getTopScorers(leagueId, seasonId) {
  var options = {
  method: 'GET',
  url: 'https://v3.football.api-sports.io/players/topscorers?league='+leagueId+'&season='+seasonId,
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '783a273c3f4e431e5bf9e51d39eeddb2'
  }
};
 return new Promise(function (resolve, reject) {
        // Do async job
        request(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    })
}

app.get('/sports/:leagueId/:seasonId', (req, res) => {
    let leagueId = req.params.leagueId;
    let seasonId = req.params.seasonId;
    console.log("Stats for league " + leagueId + " for season: " + seasonId);
    var dataPromise = getTopScorers(leagueId, seasonId);
    dataPromise.then(JSON.parse)
        .then(function (result) {

            res.send(result);
        })
    
});

function getPlayer(playerId, seasonId) {
  var options = {
  method: 'GET',
  url: 'https://v3.football.api-sports.io/players/?id='+playerId+'&season='+seasonId,
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '783a273c3f4e431e5bf9e51d39eeddb2'
  }
};
 return new Promise(function (resolve, reject) {
        // Do async job
        request(options,  (err, resp, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    })
}

app.get('/sports2/:playerId/:seasonId', (req, res) => {
    let playerId = req.params.playerId;
    let seasonId = req.params.seasonId;
    console.log("Player " + playerId + " for season: " + seasonId);
    var dataPromise = getPlayer(playerId, seasonId);
    dataPromise.then(JSON.parse)
        .then(function (result) {

            res.send(result);
        })
});


function getFlag(nationality){
 var options = {
  method: 'GET',
  url: "https://v3.football.api-sports.io/countries?name=" + nationality,
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': '783a273c3f4e431e5bf9e51d39eeddb2'
  }
};
 return new Promise(function (resolve, reject) {
        // Do async job
        request(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    })
}

app.get('/sports3/:nationality', (req, res) => {
    let nationality = req.params.nationality;
    console.log(nationality);
    var dataPromise = getFlag(nationality);
    dataPromise.then(JSON.parse)
        .then(function (result) {

            res.send(result);
        })
});


function getVideos(){
 var options = {
  method: 'GET',
  url: "https://www.scorebat.com/video-api/v3/"
};
return new Promise(function (resolve, reject) {
        request(options, function (err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    })
}

app.get('/sports4/',(req,res) => {
    var dataPromise = getVideos();
    dataPromise.then(JSON.parse)
        .then(function (result) {

            res.send(result);
        })
});



app.listen(port, (err) => {
    if (err) throw err;
    console.log("listening on port " + port)
})

http.listen(3000, () => {
    console.log('Server is running');
});