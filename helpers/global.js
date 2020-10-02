const axios = require('axios').default;

exports.response = (status, msg, data, err) => {
  return new Promise(async function (resolve, reject) {
    const r = {
      status: Number(status),
      msg,
      data: data || {},
      err,
    };
    resolve(r);
  });
};

exports.fetchHtml = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return error;
  }
};

exports.extractMovie = (selector) => {
  const title = selector.find('.lister-item-content').find('.lister-item-header').find('a').text();

  const year = selector
    .find('.lister-item-content')
    .find('.lister-item-header')
    .find('span.lister-item-year')
    .text();

  const image = selector.find('.lister-item-image').find('a').find('img').attr('src');

  const rating = selector
    .find('.lister-item-content')
    .find('.ratings-bar')
    .find('.ratings-imdb-rating')
    .attr('data-value');

  const duration = selector
    .find('.lister-item-content')
    .find('p.text-muted ')
    .eq(0)
    .find('span.runtime')
    .text();

  const synopsis = selector
    .find('.lister-item-content')
    .find('p.text-muted')
    .eq(1)
    .text()
    .trim()
    .replace(/\n/g, '');

  const genre = selector
    .find('.lister-item-content')
    .find('p.text-muted ')
    .eq(0)
    .find('span.genre')
    .text()
    .trim()
    .split(' ');

  return {
    title,
    year,
    image,
    rating,
    duration,
    synopsis,
    genre,
  };
};
