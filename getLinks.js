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

// This works, but obviously only gets the first link.
rp(links[0])
  .then(function(html){
    console.log($('audio > source', html)[0].attribs.src);
  })

// This does not work, not sure why.
for (let k = 0; k < links.length; k++) {
  console.log(k);
  rp(links)
  .then(function(html) {
    console.log($('audio > source', html)[0].attribs.src);
  })
  .catch(function(err) {
    console.log(err);
  });
}


        // for (let i = 0; i < books.length; i++) {
        //   console.log(url + books[i] + '/#listen-primary')

        //   rp(url + books + '#listen-primary')
        //     .then(function(html) {
        //       console.log($('audio', html)[i].attribs.href);
        //     })
        //     .catch(function(err) {
        //       console.log(err);
        //     })
        // }

// for (let k = 0; links.length; k++) {
//   rp(links[1])
//     .then(function(html) {
//       console.log($('audio > source', html).attribs);
//     })
// }

