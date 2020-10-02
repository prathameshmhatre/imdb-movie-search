const router = require('express').Router();
const moviesConttoller = require('../controllers/movies');

router.get('/', moviesConttoller.list);

module.exports = router;
