//core module
// const http = require("http");
//external module
const express = require("express");
//local module
const userRequest = require("./user");

const app = express();
// const server = http.createServer(app);

//adding middleware
app.use("/", (req, res, next) => {
  if (req.url === "/") {
    // res.send("<h1>first middleware </h1>");
  }
  next();
})
app.use("/", (req, res, next) => {
  res.send("<h1>first but another middleware</h1>")
  next();
})
app.use("/submit-details", (req, res, next) => {
  console.log("second middleware " + req.url, req.method);
  res.send("<p>submit-page ............</p>")
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})