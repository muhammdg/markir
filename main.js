const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const staticpath = path.join(__dirname, "/");

var antares = require("antares-http");

app.use(express.static(staticpath));

// app.get("/", function (req, res) {
//   res.sendFile(staticpath + "/login.html");
// });

app.get("/", function (req, res) {
  res.sendFile(staticpath + "/tiket.html");
});

app.get("/", function (req, res) {
  res.sendFile(staticpath + "/bayar.html");
});

app.get("/api", function (req, res) {
  antares.setAccessKey("b04e87c5e2d43633:9b2a31b303c6037e");
  antares.get("smartparking3", "dataID").then(function (response){
    const data = response.content;
    res.json(data);
  });
});

app.listen(port);