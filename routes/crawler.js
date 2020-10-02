const router = require('express').Router();

const crawlerController = require('../controllers/crawler');

router.get('/fetch-movies', crawlerController.fetchMoviesFromImdb);
module.exports = router;
