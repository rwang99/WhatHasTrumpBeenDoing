# WhatHasTrumpBeenDoing

https://whathastrumpbeendoing.herokuapp.com/

Project Started: 2/8/18
Project Completed: N/A

Every day when I turn on the news the first word I usually see is "TRUMP". I wondered since Trump is always in the news nowadays, if I can make a site that will aggregate the daily happenings of Trump into one place? While making this site, I can gain more experience using Javascript, Node.js, Express, HTML/CSS/Bootstrap, and learn another API!

<h4>End goals for this project:</h4>

 * Aggregate news and information about trump
 * Filter out news articles and summarize recent news about Trump through a word cloud/something similar.
 * Include a customizable user interface for users to choose where to source the articles
 * Have a clean and responsive website
 * **LEARN**

<h4>Super reach goals for this project:</h4>
- Implement machine learning/some algorithm to decide whether Trump has done anything especially scandalous/controversial recently. Perhaps through a spike in news articles around a certain time or through word/sentiment analysis? 

<h4>How this site works</h4>
This site is driven on a Node.js server-side environment, uses Express as the framework, Bootstrap for CSS, and Javascript for most of the code. To retrieve news articles, I used the API Newsapi from newsapi.org.

Articles published with the last day are displayed from credible news outlets (currently BBC, CNN, FOX, NBC, The Hill, NYT, WaPo)


<h4>General changelog (for more specific changes see commits):</h4> 

2/8/18: 
- Created basic CSS template/layout of content.
- Added cards, opaque background image layer

3/20/18: 
- Added API support from newsapi, loaded new articles into the webpage
- Cleaned up formatting, added templating functionality to link the calls to the front-end
- Made more responsive for mobile/small devices. Hides thumbnail image if under certain screen size

3/21/18:
- Clean up formatting, added a date/timestamp for each article
- Articles pulled are now all from the past day at earliest
- Added page buttons (not functional as of date)

3/29/18:
 - Deployed site to heroku
https://whathastrumpbeendoing.herokuapp.com/
- Removed page buttons from production
 

<br>
<!-- <h4>Concluding Notes</h4>
I would like to thank stackoverflow for their constant support throughout this project. Also I would like to thank Donald Trump for making this possible, as without him appearing in the news this often, I would probably need to pivot ideas a bit. Enjoy :) -->
