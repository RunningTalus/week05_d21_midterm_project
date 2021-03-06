var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.all('/', function(req, res) {
	// normalize map value as an array

	req.query.bing = [].concat(req.query.bing || []);
	req.query.esri = [].concat(req.query.esri || []);
	req.query.google = [].concat(req.query.google || []);
	req.query.mapquest = [].concat(req.query.mapquest || []);
	req.query.nokia = [].concat(req.query.nokia || []);

	// console.log('req.body', req.body);
	console.log('req.query', req.query);

	res.render('index', {
		bing:req.query.bing,
		esri:req.query.esri,
		google:req.query.google,
		mapquest:req.query.mapquest,
		nokia:req.query.nokia
	});
});

var server = app.listen(process.env.PORT||7511, function() {
	console.log('Express server listening on port ' + server.address().port);
});