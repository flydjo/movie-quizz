import React, {useContext, useEffect} from "react";
import '../css/quizz.css';
import Question from "../components/Question";
import useQuizzLogic from "../hooks/useQuizzLogic";
import {Context} from "../contexts/MoviequizzContext";
import {Link, useParams, Navigate} from "react-router-dom";

function Quizz() {
    const {idGenre} = useParams();

    const [
        timer,
        isQuizzRunning
    ] = useQuizzLogic();

    const {
        movieInfos,
        isActorInMovie,
        randomActor,
        getIdMoviesFromGenre,
        score,
        randomActorPicturePath,
        setScore,
        highScore
    } = useContext(Context);

    useEffect(() => {
        setScore(0);
        getIdMoviesFromGenre(idGenre);
    }, [])

    return(
        <div className="quizz-container">
            {!isQuizzRunning && <Navigate to="/gameover" />}

            <h1 className="quizz-title">MOVIE QUIZZ</h1>

            <Question 
                data={{
                    actor: randomActor, 
                    movie: movieInfos.title,
                    isActorInMovie: isActorInMovie,
                    isQuizzRunning,
                    moviePoster: `https://image.tmdb.org/t/p/w500${movieInfos.poster_path}`,
                    actorPicture: randomActorPicturePath
                }} 
            />

            <div className="game-infos">
                <h3>Time remaining: {timer}s</h3>
                <h3>Score: {score}</h3>
                <h3>High Score: {highScore}</h3>
            </div>
        </div>
    );
}

export default Quizz;