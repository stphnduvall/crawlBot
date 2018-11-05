rp = require('request-promise');
$ = require('cheerio');
url = 'https://www.biblica.com/bible/niv/'

books = require('./getBooks');

// loops through the array of books and creates an array
// of links to use with request-promise
var links = [];
books.forEach(b => {
  links.push(`${url}${b}/1/`);
});

// Uses links to get each website and log the download link
links.forEach(l => {
  rp(l)
    .then(html => {
      console.log(`Accessing link- ${l}`);
      console.log($('source', html).attr('src'));
    })
    .catch(console.warn);
});
