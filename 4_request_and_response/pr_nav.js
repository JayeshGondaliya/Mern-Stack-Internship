const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);


  //response
  if (req.url.toLowerCase() === "/") {
    res.write(`<!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    
        <title>Hello, world!</title>
      </head>
      <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/home">Home </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/link">Link</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/about">about</a>
          </li>  <li class="nav-item active">
            <a class="nav-link" href="/service">service</a>
          </li>
        
      </div>
    </nav>
    
     
      </body>
    </html>`);
  } else if (req.url.toLowerCase() === "/home") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome To home::::</h1>");
    return res.end();
  } else if (req.url.toLowerCase() === "/link") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome To link::::</h1>");
    return res.end();
  } else if (req.url.toLowerCase() === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome To about::::</h1>");
    return res.end();
  } else if (req.url.toLowerCase() === "/service") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome To service::::</h1>");
    return res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 - Page Not Found</h1>");
    return res.end();
  }
  return res.end();
})

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`)
})