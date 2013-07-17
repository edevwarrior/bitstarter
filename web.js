var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  	var indexBuffer = fs.readFileSync('index.html');
	var indexContent = indexBuffer.toString('utf-8');

	response.send(indexContent);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
