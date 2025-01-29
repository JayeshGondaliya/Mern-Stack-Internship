const http = require('http');
const fs = require("fs");
const { json } = require('stream/consumers');
const userRequest = ((req, res) => {
  console.log(req.url, req.method);

  //response

  if (req.url === "/" && req.method === "GET") {
    res.setHeader('Content-Type', 'text/html');
    res.write("<html>");

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
    let body = [];
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    })
    // console.log("this is bosy " + body);

    req.on("end", () => {
      let parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody);
      let param = new URLSearchParams(parsedBody);
      console.log(param);
      let jsonObject = {}
      for (const [key, value] of param) {
        jsonObject[key] = value;

      }
      console.log(jsonObject);


      //json data store into file
      const jsonData = JSON.stringify(jsonObject);
      console.log(jsonData);
      fs.writeFileSync("user-details.txt", jsonData)
    })
    fs.writeFileSync("example.txt", "abcde");
    res.statusCode = 302; //for redirect

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


module.exports = userRequest;