const http = require("http");
const HandleRequest = require("./server");
const userRequest = require("./user");


//for userpage
const server = http.createServer(userRequest);
// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
// });

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})