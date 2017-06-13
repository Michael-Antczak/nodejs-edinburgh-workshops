# Basic http server
```javascript
var http = require('http');

var server = http.createServer(function(request, response) {

  // process request
  // send back the response
  
});

server.listen(9999);
```
or maybe this is more readable: 
```javascript
const http = require('http');

const requestHandler = (request, response) => {

    const output = `Request to the server came at ${new Date()}.` 
    response.end(output);
    
}

const server = http.createServer(requestHandler);

server.listen(9999);
```

# Why? 

In Javascript you can do something like that:
```javascript
function hello(name) {

  console.log("Hello ", name);
  
}

function greet(func, name) {

  func(name);
  
}

greet(hello, "Michael");
```

so it could be like that too:

```javascript
var http = require('http');

http.createServer(handler).listen(9999);

function handler(request, response) {
  console.log("Hello again!");
}
```

# Method, URL and Headers
```javascript
var method = request.method;
var url = request.url;
var headers = request.headers;
var userAgent = headers['user-agent'];
```

# Request Body

# Response

```javascript
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
```


# Node.js v8 issue with http

https://github.com/nodejs/node/issues/13461

### Resources
[Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction)

[Node Girls Express Workshop](https://github.com/node-girls/express-workshop/blob/master/step01.md)

[Learn You Node](https://www.github.com/workshopper/learnyounode)
