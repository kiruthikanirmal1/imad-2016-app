var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/color"});
  response.write("Hello My Webapp");
  response.end();
}).listen(8080);
myElement.style.backgroundColor = "#D93600";