const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
const { response, fetchHtml, extractMovie } = require('../helpers/global');

exports.fetchMoviesFromImdb = async function (req, res) {
  const imdbUrl = 'https://www.imdb.com/search/title/?count=100&groups=top_1000&sort=user_rating';
  try {
    const html = await fetchHtml(imdbUrl);
    const selector = cheerio.load(html);
    const searchResults = selector('body').find('.lister > .lister-list > div');

    const movies = searchResults
      .map((index, element) => {
        const elementSelector = selector(element);
        return extractMovie(elementSelector);
      })
      .get();

    fs.writeFile(
      path.resolve(__dirname, '../database/data.json'),
      JSON.stringify(movies),
      function (err) {
        if (err) throw err;
      }
    );

    res.status(200).send(await response(1, 'success', movies, ''));
  } catch (error) {
    res.status(200).send(await response(0, 'Error', '', error.message));
  }
};
