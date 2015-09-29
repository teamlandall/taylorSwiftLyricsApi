var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.post('/', function(req, res){
	var ran = Math.floor(Math.random()*lyrics.length);
	res.send(lyrics[ran]);
});

app.get('/', function(req, res){
	var ran = Math.floor(Math.random()*lyrics.length);
	res.send(lyrics[ran]);
});


var server = app.listen(5000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('example app listening at http://%s:%s', host, port);
});

var lyrics = ['And the haters gonna hate, hate, hate, hate, hate', 'I shake it off, I shake it off', 
	'Shake it off, I shake it off', 'Cause we\'re young and we\'re reckless', 'Got a long list of ex-lovers',
	'But I\'ve got a blank space, baby', 'And I\'ll write your name',
	'Cause the players gonna play, play, play, play, play', 'You know it used to be mad love',
	'But she wears short skirts', 'I wear t-shirts', 'She\'s cheer captain, And I\'m on the bleachers',
	'I don\'t know about you, But I\'m feeling 22', 'You don\'t know about me', 'Magic, madness, heaven, sin',
	'Oh my God, look at that face', 'Grab your passport and my hand', 'If the high was worth the pain', 
	'I get drunk on jealousy', 'But you\'ll come back each time you leave', 'Or it\'s gonna go down in flames',
	'It\'ll leave you breathless Or with a nasty scar', 'We are never ever ever getting back together',
	'I\'m really gonna miss you picking fights', 'Someday I\'ll be living in a big ole city',
	'You, with your voice like nails on a chalkboard', 'Washed up and ranting about the same old bitter things'];