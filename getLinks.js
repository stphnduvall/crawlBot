rp = require('request-promise');
$ = require('cheerio');
url = 'https://www.biblica.com/bible/niv/'

books = require('./getBooks');

// loops through the array of books and creates an array
// of links to use with request-promise
var links = [];
for (let i = 0; i < books.length; i++) {
  links.push(url + books[i] + '/#listen-primary')
  console.log(links[i]);
}

var options = {
  uri: url,
  transform: function(body) {
    return cheerio.load(body)
  }
};

// This works, but obviously only gets the first link.
for (let k = 0; k < links.length; k++) {
  rp(links[k])
    .then(function(html){
      console.log($('source', html).attr('src'));
    })
    .catch(function(err) {
      console.log(err);
      // Log the error.
    });
}


