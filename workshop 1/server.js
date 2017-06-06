var http = require('http');

var server = http.createServer(function(request, response) {

  	var method = request.method;
	var url = request.url;
	var headers = request.headers;
	var userAgent = headers['user-agent'];

	console.log("Method : ", method);
	console.log("+++++++++++++++++++++++");
	console.log("URL : ", url);
	console.log("+++++++++++++++++++++++");
	console.log("Headers : ", headers);
	console.log("+++++++++++++++++++++++");
	console.log("UA : ", userAgent);

	var body = [];
	request.on('data', function(chunk) {
	  body.push(chunk);
	}).on('end', function() {

		body = Buffer.concat(body).toString();
		  // at this point, `body` has the entire request body stored in it as a string
	});

	console.log('Body : ', body);

	response.writeHead(200, {'Content-Type': 'text/html'}) 

	if (url === '/') {
		response.write('<html><body>');
		response.write('<h1>Hello, World!</h1><br><h2>MainPage</h2>');
		response.end('<h3>Requested url ' + url + '</h3></body></html>');
	} else if (url === '/me') {
		response.write('<html><body><h1>Hello, World!</h1><br><h2>About me</h2>');
		response.end('<h3>Requested url ' + url + '</h3></body></html>');
	} else {
		response.write('<html><body><h1>Error</h1><br>');
		response.end('<h3>No such a page ' + url + '</h3></body></html>');
	}
	
  
});

server.listen(9999);
