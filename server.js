const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const cheerio = require("cheerio");
// const logger = require("morgan");;
const exphbs = require("express-handlebars")
// const app = express()
//models

var db = require("./models");

var app = express();

var PORT = process.env.PORT || 3000;
//middleware
// app.use(logger("dev"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/web-scrape";
mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app)

app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
});