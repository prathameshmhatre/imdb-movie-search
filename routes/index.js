const mainRouter = require('express').Router();

mainRouter.use('/crawler', require('./crawler'));
mainRouter.use('/movies', require('./movies'));

mainRouter.use('/', (req, res) => {
  res.send('hello');
});

module.exports = mainRouter;
