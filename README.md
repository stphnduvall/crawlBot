# crawlBot
This is to be a simple crawler that will this [website](https://www.biblica.com/bible/niv/) and download the audio files for every chapter of the Bible.

I don't think it will be too complicated.

The plan is to have it:
1. Loop through an array w/ every book and chapter of the Bible
2. Go to the specific webpage with that book & chapter `(url)/bible/niv/book/chapter`
3. Append `#listen-primary" to the end (this actiavtes the download page on the site)
4. Find the `<source>` that has the `type='audio/mpeg'`
5. Get the `src'...'` attribute and use that link to download the audio file.

I don't think this will be too hard, my only fear is that all the audio files take up a ton of storage that I'm not ready for on my Macbook 😂

I'm following this [tutorial](https://medium.freecodecamp.org/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3)

Right now the master branch is the tutorial, but I will change it to be a different branch once i finish with it.
