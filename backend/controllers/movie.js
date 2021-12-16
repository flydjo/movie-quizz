const fetch = require('node-fetch');
const apiKey = "f4360450df9f737a0ad0931c57e16402";

exports.getMovies = async (req, res, next) => {
    try {
        let moviesArray = [];
        
        const resp = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + apiKey + "&with_genres="+req.params.idGenre);
        const data = await resp.json();
    
        for (let i=0;i < data.results.length; i++) {
            moviesArray.push({
                "id": data.results[i].id, 
                "title": data.results[i].title, 
                "poster_path": data.results[i].poster_path
            })
        }
    
        for (let i=2; i <= 5; i++) {
            const respLoop = await fetch("https://api.themoviedb.org/3/discover/movie?api_key=f4360450df9f737a0ad0931c57e16402&with_genres=12&page="+i);
            const respDataLoop = await respLoop.json();
    
            for (let i=0; i < respDataLoop.results.length; i++) {
                moviesArray.push({
                    "id": respDataLoop.results[i].id, 
                    "title": respDataLoop.results[i].title, 
                    "poster_path": respDataLoop.results[i].poster_path
                })
            }
        }
    
        res.status(200).json(moviesArray);
    } catch (e) {
        console.log(e);
        res.status(400).json({error: error});
    }
};

exports.getMovie = async (req, res, next) => {
    try {
        let movieArray = [];
        
        const resp = await fetch("https://api.themoviedb.org/3/movie/"+req.params.idMovie+"?api_key="+apiKey);
        const movieData = await resp.json();
    
        movieArray.push({
            "id": movieData.id,
            "title": movieData.title,
            "poster_path": movieData.poster_path
        })
    
        res.status(200).json(movieArray);
    } catch(e) {
        console.log(e);
        res.status(400).json({error: error});
    }
}

exports.getMovieCast = async (req, res, next) => {
    try {
        let movieCast = [];
        
        const resp = await fetch("https://api.themoviedb.org/3/movie/"+req.params.idMovie+"/credits?api_key="+apiKey);
        const castData = await resp.json();
    
        for(let i=0; i < castData.cast.length; i++) {
            if(castData.cast[i].profile_path !== null) {
                movieCast.push({
                    "id": castData.cast[i].id,
                    "name": castData.cast[i].name,
                    "picture": castData.cast[i].profile_path
                });
            }
        }
    
        res.status(200).json(movieCast);
    } catch (e) {
        console.log(e);
        res.status(400).json({error: error});
    }
};