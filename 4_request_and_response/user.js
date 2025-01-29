const http = require('http');
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method);

  //response

  if (req.url === "/" && req.method === "GET") {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");
    res.write("<head><title>This is Node Form</title></head>");
    res.write("<body>");
    res.write("<h1>Enter Your Details:</h1>");
    res.write("<form action='/submit-data' method='POST'");
    res.write("<label for='username'>Name:</label>")
    res.write("<input type='text' name='username' id='username' placeholder='Enter Your Name'>");
    res.write("<label for='password'>password:</label>");
    res.write("<input type='password' name='password' id='password' >");
    res.write("<button type='submit' value='Submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  else if (req.url.toLowerCase() === "/submit-data" && req.method === "POST") {
    fs.writeFileSync("example.txt", "abcde");
    res.statusCode = 302; //for redirect
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Like,Share & Subscribe</h1>")
  return res.end();
})

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})