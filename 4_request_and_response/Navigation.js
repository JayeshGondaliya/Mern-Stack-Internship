const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url.toLocaleLowerCase() === "/") {
    res.setHeader("Content-Type", "text/html")
    res.write(`<html>
      <body>
      <nav>
      <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/women">Wome</a></li>
      <li><a href="/men">Men</a></li>
      <li><a href="/contact">Contact</a></li>
      </ul>
      </nav>
      </body>
      </html>`);
    return res.end();

  }
  else if (req.url.toLocaleLowerCase() === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Women</h1>")
    res.write(`<script> setTimeout(() => {
            window.location.href = "/";
          }, 3000);</script>`)
    return res.end();
  }

  else if (req.url.toLocaleLowerCase() === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>men Section</h1>");

    return res.end();
  } else if (req.url.toLocaleLowerCase() === "/contact") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>contact Section</h1>");

    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>okok!!!!!!!</h1>")
    return res.end();
  }
})

const PORT = 3005;
server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
})