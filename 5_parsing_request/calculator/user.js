const { parse } = require("path");

const userRequest = ((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>Welcome To The <a href='/calculator'>Calculator</a></h1>");
    return res.end();
  }
  else if (req.url.toLowerCase() === "/calculator" && req.method === "GET") {
    res.setHeader("Content-Type", "Text/html");
    res.write("<html>");
    res.write("<head><title>CalCulator</title></head>");
    res.write("<body>");
    res.write("<form action='/calculator-result' method='POST'>");
    res.write("<input type='input' name='i1' placeholder='Enter No1'>");
    res.write("<input type='input' name='i2' placeholder='Enter No2'>");
    res.write("<button type='submit' value='sum'>sum</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");



    return res.end();
  }
  else if (req.url.toLowerCase() === "/calculator-result" && req.method === "POST") {

    //fetch input data
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });


    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const param = new URLSearchParams(parsedBody);
      const num1 = parseFloat(param.get("i1"));
      const num2 = parseFloat(param.get("i2"));
      const sum = num1 + num2;


      //display data in next page
      res.write("<html>");
      res.write("<body>");
      res.write(`<h1>sum of two number is ${sum}</h1>`);
      res.write("<a href='/'>main page </a>")
      return res.end();
    })
  }
  else {
    res.statusCode = 302;
    return res.end("Not Found");
  }
})
module.exports = userRequest;