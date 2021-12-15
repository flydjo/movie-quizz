import React, {createContext, useState, useEffect} from "react";
import { random } from "gsap/gsap-core";

const Context = createContext();

function ContextProvider(props) {
    const apiKey = "f4360450df9f737a0ad0931c57e16402";
    const [movies, setMovies] = useState([]);
    const [movieInfos, setMovieInfo] = useState("");
    const [movieActors, setMovieActors] = useState([]);
    const [movieActorsPictures, setMovieActorsPictures] = useState([]);
    const [randomActor, setRandomActor] = useState("");
    const [randomActorPicturePath, setRandomActorPicturePath] = useState("");
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(localStorage.getItem('movieQuizzHighScore') || 0);

    useEffect(() => {
        getRandomMovie();
    }, [movies, score])

    useEffect(() => {
        getRandomActor();
    }, [movieActors])

    useEffect(() => {
        checkHighestScore(score);
    }, [score]);

    function getIdMoviesFromGenre(idGenre) {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=f4360450df9f737a0ad0931c57e16402&with_genres=${idGenre}`)
            .then(res => res.json())
            .then((res) => {
                const idMovies = res.results.map(id => id.id);
                setMovies(idMovies);
            });
    }

    function getRandomMovie() {
        let rand = Math.floor(Math.random() * movies.length);
        let randId = movies[rand];

        if(randId) {
            fetch(`https://api.themoviedb.org/3/movie/${randId}?api_key=${apiKey}`)
                .then(res => res.json())
                .then(res => setMovieInfo(res));

            fetch(`https://api.themoviedb.org/3/movie/${randId}/credits?api_key=${apiKey}`)
                .then(res => res.json())
                .then(res => getActorsFromMovie(res.cast));
        }
    }

    function getActorsFromMovie(movieCast) {
        if(movieCast) {
            const newArrayActors = movieCast.map(cast => cast.original_name);
            const newArrayPictures = movieCast.map(cast => cast.profile_path);
            setMovieActorsPictures(newArrayPictures);
            setMovieActors(newArrayActors);
        }
    }

    function isActorInMovie(actor, userResponse) {
        const resp = movieActors.filter(movieActor => movieActor === actor);
        
        if(resp.length > 0 && userResponse === true ) {
            setScore(score + 10);
        } else {
            getRandomMovie();
        }
    }

    function checkHighestScore(score) {
        if(score > highScore) {
            localStorage.setItem('movieQuizzHighScore', score);
            setHighScore(score);
        }
    }

    function getRandomActor() {
        const random = Math.floor(Math.random() * movieActors.length);
        setRandomActor(movieActors[random]);
        setRandomActorPicturePath(movieActorsPictures[random]);
    }

    return(
        <Context.Provider 
            value={{
                movieInfos,
                movieActors,
                isActorInMovie,
                randomActor,
                getIdMoviesFromGenre,
                score,
                randomActorPicturePath,
                setScore,
                checkHighestScore,
                highScore
            }}
        >
            {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context}