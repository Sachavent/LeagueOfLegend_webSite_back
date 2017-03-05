var express = require('express');
var router = express.Router();
var urlencode = require('urlencode');
const https = require('https');

/**
 * Getting basics info of the summoneraccount
 */
router.get('/:summonername/global', function (req, response) {
    var summonername = req.params.summonername;

    let url = 'https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/' + urlencode(summonername) + '?api_key=RGAPI-650e27b6-8c7d-490b-a47d-afabc202e5b7'

    var req = https.get(url, function (res) {
        //console.log('statusCode:', res.statusCode);
        //console.log('headers:', res.headers);
        res.on('data', (d) => {
            response.statusCode = "200";
            response.setHeader('Content-Type', 'application/json');
            response.write(d, (err) => {
                response.end();
            });
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });

    req.end();
});

/**
 * Get summonerRank by compte id
 */

router.get('/:compteid/rank', function (req, response) {
    console.log("ici: ");
    var compteid = req.params.compteid;
    console.log("compteid: " + compteid);
    let url = `https://euw.api.pvp.net/api/lol/euw/v2.5/league/by-summoner/${compteid}/entry?api_key=RGAPI-650e27b6-8c7d-490b-a47d-afabc202e5b7`
    console.log("url: " + url);

    var req = https.get(url, function (res) {
        //console.log('statusCode:', res.statusCode);
        //console.log('headers:', res.headers);
        res.on('data', (d) => {
            response.statusCode = "200";
            response.write(d, (err) => {
                response.end();
            });
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });

    req.end();
});

/**
 * Get the list of the most played champion
 */
router.get('/:compteid/mostchampionsplayed', function (req, response) {
    var compteid = req.params.compteid;
    let url = `https://euw.api.pvp.net/api/lol/euw/v1.3/stats/by-summoner/${compteid}/ranked?api_key=RGAPI-650e27b6-8c7d-490b-a47d-afabc202e5b7`

    var req = https.get(url, function (res) {
        //console.log('statusCode:', res.statusCode);
        //console.log('headers:', res.headers);
        res.on('data', (d) => {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(d);
            response.end();
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });

    req.end();


});

module.exports = router;