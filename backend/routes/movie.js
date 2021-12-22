const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie');

router.get('/movies/:idGenre', movieController.getMovies);
router.get('/movie/:idMovie', movieController.getMovie);
router.get('/cast/:idMovie', movieController.getMovieCast);
router.get('/wrongCast/:idMovie', movieController.getMixedCast);

module.exports = router;