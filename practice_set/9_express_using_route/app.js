const express = require("express");

const app = express();

//add two dummy middleware
app.use((req, res, next) => {
  console.log("this is first middleware", req.url, req.method);
  next();
})


app.use((req, res, next) => {
  console.log("this is second middleware", req.url, req.method);
  next();
})
//add third middelware that return response
// app.use("/", (req, res, next) => {
//   console.log("this is third middleware", req.url, req.method);
//   res.send("Hello from third middleware");

// })

//handle  path / and contact-us
app.get("/", (req, res, next) => {
  console.log("this is first route", req.url, req.method);
  res.send("<h1>This is page path like / <a href='/contact-us'>conatct-us</a></h1>");
})

app.get("/contact-us", (req, res, next) => {
  console.log("this is contact page", req.url, req.method);
  res.send(`
    <h1>Please fill this Form</h1>
    <form action="/contact-us" method="post">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required/><br>
    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required/><br><br>
    <input type="submit" value="Submit"/>
  `);
})

app.post("/contact-us", (req, res, next) => {
  console.log("this is post request", req.url, req.method);
  res.send("<h1>successfullllllllllllllllllllll</h1>");
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})