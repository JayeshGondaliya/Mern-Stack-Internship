const http = require("http");

const server = http.createServer((req, res) => {
  //request
  console.log("This is Url " + req.url);
  console.log("This is headers " + req.headers);
  console.log("This is method " + req.method);


  //response
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>hello</title></head>");
  res.write("<body><h1>hello</h1></body>");
  res.write("</html>");
  res.end();
})

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})