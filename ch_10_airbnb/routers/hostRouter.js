const express = require("express")

const hostRouter = express.Router();




//move on /add-home
hostRouter.get("/add-home", (req, res, next) => {
  res.send(`<h1>Adding Home</h1>
    <form action='/add-home' method='POST'>
    <input type='text' name="house" placeholder='Enter house'>
    <input type='submit'>
    </form >
    `);
  next();
})

hostRouter.use(express.urlencoded());


hostRouter.post("/add-home", (req, res, next) => {
  console.log("this is post ", req.body);
  res.send(`<h1>success</h1>
    <a href='/'>back</a>
    `

  );
  next();
})

module.exports = hostRouter;