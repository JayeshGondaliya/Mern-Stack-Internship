const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
    <body>
    <h1>Jay Mataji</h1>
    </body>
        </html>`);
        
  }
  else if (req.url === "/hello") {
    res.write("hello");
  }
  else {
    res.write("okok!!!!!!");
  }
  res.end();
})

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
})