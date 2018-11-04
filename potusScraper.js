const rp = require('request-promise');
const $ = require('cheerio');
const potusParse = require('./potusParse');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States';

rp(url)
  .then(function(html) {
    const presUrls = []
    for (let i = 0; i < 45; i++) {
      presUrls.push($('big > a', html)[i].attribs.href);
    }
    return Promise.all(
      presUrls.map(function(url) {
        return potusParse('https://en.wikipedia.org' + url);
      })
    );
  })
  .then(function(presidents) {
    console.log(presidents);
  })
  .catch(function(err) {
    // Handle the error
    console.log(err);
  });
