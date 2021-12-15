const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie');

router.get('/movies/:idGenre', movieController.getMovies);
router.get('/movie/:idMovie', movieController.getMovie);
router.get('/cast/:idMovie', movieController.getMovieCast);

module.exports = router;