# Basic http server
```
var http = require('http');

var server = http.createServer(function(request, response) {

  // process request
  // send back the response
  
});

server.listen(9999);
```

# Why? 

In Javascript you can do something like that:
```
function hello(name) {

  console.log("Hello ", name);
  
}

function greet(func, name) {

  func(name);
  
}

greet(hello, "Michael");
```

so it could be like that too:

```
var http = require('http');

http.createServer(handler).listen(9999);

function handler(request, response) {
  console.log("Hello again!");
}
```
