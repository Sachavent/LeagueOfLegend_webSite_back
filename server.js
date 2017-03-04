var express = require('express');
var app = express();


// Allow cross origin
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/summoneraccount', require('./routes/summoneraccount'))


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});