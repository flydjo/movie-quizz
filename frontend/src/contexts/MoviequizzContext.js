import React, {createContext, useState, useEffect} from "react";

const Context = createContext();

function ContextProvider(props) {
    const [movies, setMovies] = useState([]);
    const [movieInfos, setMovieInfos] = useState("");
    const [movieActors, setMovieActors] = useState([]);
    const [randomActor, setRandomActor] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(localStorage.getItem('movieQuizzHighScore') || 0);
    const {REACT_APP_API_DEV} = process.env;

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
        fetch(`${REACT_APP_API_DEV}/api/movies/${idGenre}`)
            .then(res => res.json())
            .then(res => setMovies(res));
    }

    function getRandomMovie() {
        let rand = Math.floor(Math.random() * movies.length);
        let randMovie = movies[rand];

        if(randMovie) {
            setMovieInfos(randMovie);

            fetch(`${REACT_APP_API_DEV}/api/cast/${randMovie.id}`)
                .then(res => res.json())
                .then(res => setMovieActors(res));
        }
    }

    function isActorInMovie(actor, userResponse) {
        const resp = movieActors.filter(movieActor => movieActor.name === actor);
        
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