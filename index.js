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
  newsapi.v2.topHeadlines({
    sources: 'bbc-news, cnn, fox-news, nbc-news, the-hill, the-new-york-times, the-washington-post, usa-today',
    q: 'trump',
    language: 'en',
  }).then(response => {
    // console.log(response);
    res.render('index', {response: response});
  });

});

router.listen(3000, function () {
  console.log('Website listening on port 3000!');
});

// router.post('/', function(req, res){
//   newsapi.v2.topHeadlines({
//     sources: 'bbc-news, cnn, fox-news, nbc-news, the-hill, the-new-york-times, the-washington-post, usa-today',
//     q: 'trump',
//     language: 'en',
//   }).then(response => {
//     console.log(response);
//     console.log(response.articles[0]);
//     res.render('index', {title: response.articles[0].title})
//   });

// });
