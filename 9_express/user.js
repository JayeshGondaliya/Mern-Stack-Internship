const userRequest = ((req, res) => {
  console.log(req.url, req.method);
});

module.exports = userRequest;