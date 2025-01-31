//external module
const express = require("express");

const app = express();


const userRequest = require("./routers/userRouter");
const hostRequest = require("./routers/hostRouter");
//getting url and methods
app.use((req, res, next) => {
  console.log(req.url, req.method, req.body);
  next();
})


//adding middelw  are
app.use(userRequest);
app.use("/host", hostRequest);

app.use((req, res, next) => {
  res.status(404).send("<h1>404 not found!</h1>")
})




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);

})
