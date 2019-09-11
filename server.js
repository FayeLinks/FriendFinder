// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// Server Port
var PORT = process.env.PORT || 8080;

// Express body-parser below
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Listening Server Function
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});

// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);