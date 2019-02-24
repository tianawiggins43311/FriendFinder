// Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// API and HTML routes
require("/Users/josephine-maye/Desktop/FriendFinder/app/routing/apiRoutes")(app);
require("/Users/josephine-maye/Desktop/FriendFinder/app/routing/htmlRoutes")(app);

app.listen(process.env.PORT || 8080, function() {
	console.log("App listening on PORT: " + PORT);
});
