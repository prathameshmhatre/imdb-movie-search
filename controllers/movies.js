const data = require('../database/data.json');

exports.list = (req, res) => {
  const { q = '' } = req.query;
  let movies = [];
  if (q !== '') {
    if (data.length) {
      for (let i = 0; i < data.length; i += 1) {
        const { title, synopsis, rating, duration, year } = data[i];
        if (
          title.toLowerCase().includes(q.toLowerCase()) ||
          rating.toLowerCase().includes(q.toLowerCase()) ||
          duration.toLowerCase().includes(q.toLowerCase()) ||
          year.toLowerCase().includes(q.toLowerCase()) ||
          synopsis.toLowerCase().includes(q.toLowerCase())
        ) {
          movies.push(data[i]);
        }
      }
    }
  } else {
    movies = data;
  }
  res.status(200).json(movies);
};
