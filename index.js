
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use('/test/js/', express.static(__dirname + '/js'));
app.use('/test/css/', express.static(__dirname + '/css'));

// index page
app.get('/test/', function(req, res) {
    res.render('pages/index');
});

// We can seperate all these routing function into its own javascript
app.get('/test/showcart', function(req, res) {
  res.render('pages/showcart');
});


app.listen(4050,() => {
    console.log(`App Started on PORT 4050`);
});