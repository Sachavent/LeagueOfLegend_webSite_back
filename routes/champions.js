var express = require('express');
var router = express.Router();
var urlencode = require('urlencode');
const https = require('https');

router.get('/championName/:id', (req, response) => {
    let idchamp = req.params.id;
    let url = `https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/${idchamp}?api_key=RGAPI-650e27b6-8c7d-490b-a47d-afabc202e5b7`

    var req = https.get(url, function (res) {
        //console.log('statusCode:', res.statusCode);
        //console.log('headers:', res.headers);
        res.on('data', (d) => {
            response.setHeader('Content-Type', 'application/json');
            response.send(d)
        });
    });

    req.on('error', (e) => {
        console.error(e);
    });

    req.end();
})

module.exports = router;