var db = require("../models");
var axios = require("axios");
var cheerio = require("cheerio");

module.exports = function (app) {
  app.get("/scrape", function (req, res) {
    // First, we grab the body of the html with axios
    axios.get("https://ucf.forums.rivals.com/forums/the-dungeon-knights-only.6/").then(function (response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);
      // console.log(response.data);
      // Now, we grab every h2 within an article tag, and do the following:
      $("h3.title").each(function (i, element) {
        // Save an empty result object
        let title = $(element).text()
        let link = $(element).children().attr("href")
        console.log(title)
        console.log(link)

      });

      // Send a message to the client
      res.send("Scrape Complete");
    });
  });
};