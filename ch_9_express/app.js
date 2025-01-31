const express = require("express");

const app = express();


app.use((req, res, next) => {
  console.log("Hello from first middleware");
  next();
})
app.use((req, res, next) => {
  console.log("Hello from second middleware");
  next();
})

// app.use((req, res, next) => {
//   res.send("<h1>hello from the third middelware</h1>")
//   next() //next is not used after send it can't be move on the next
// })

app.get("/", (req, res, next) => {
  res.send("<h1>Welcome To The <a href='/contact-us'>contact-us </a>page</h1>");
  next();
})
app.get("/contact-us", (req, res, next) => {
  res.send(`<h1>contact us page</h1>
    <form action='/contact-us' method='POST'>
    <input type='text' name='name' placeholder='enter name'>
    <input type='email' name='email' placeholder='enter email'>
<button type='submit'>submit</button>
</form>
    `);
  next();

})
app.post("/contact-us", (req, res, next) => {
  res.send("<h1>Data successfully send</h1>");
  next();
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);

})