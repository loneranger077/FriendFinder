const express = require("express");
const path = require("path");
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
require("./app/data/friends.js")(app);

var app = express();
var PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });