const express = require('express');
const router = express();
const bodyParser = require('body-parser');
router.set('view engine', 'ejs');
require('dotenv').load();

router.use(express.static(__dirname)); // exposes the css
var path = require('path');

const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.API_KEY);

router.get('/', function (req, res) {
  let today = new Date();
  let yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1)
  
  newsapi.v2.everything({
    sources: 'bbc-news, cnn, fox-news, nbc-news, the-hill, the-new-york-times, the-washington-post, usa-today',
    q: 'trump',
    language: 'en',
    to: today.toISOString(),
    from: yesterday.toISOString(),
    sortBy: 'relevancy',
    page: 1
  }).then(response => {
    let filteredResponse = response.articles.filter(function(article) {
      return article.title && article.description && article.urlToImage;
    });
    response.articles = filteredResponse;
    response.totalResults = filteredResponse.length;
    res.render('index', {response: response});  // sends response to middleware
  });

});

router.listen(3000, function () {
  console.log('Website listening on port 3000!');
});
