var express = require("express");
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.json());

app.get("/env", function(req, res) {
  res.json({
    timestamp: new Date(),
    dbuser: process.env.DBUSER,
    dburi: process.env.DBURL
  });
});

app.post("/test", function(req, res) {
  res.json(req.body);
});

// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app;
