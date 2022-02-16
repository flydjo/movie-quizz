import React, {useContext, useEffect} from "react";
import '../css/quizz.css';
import '../css/loader.css'
import Question from "../components/Question";
import Loader from "../components/Loader";
import useQuizzLogic from "../hooks/useQuizzLogic";
import {Context} from "../contexts/MoviequizzContext";
import {useParams, Navigate} from "react-router-dom";

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
            {randomActor && movieInfos ?
                <Question 
                    data={{
                        actor: randomActor.name, 
                        movie: movieInfos.title,
                        isActorInMovie: isActorInMovie,
                        isQuizzRunning,
                        moviePoster: `https://image.tmdb.org/t/p/w500${movieInfos.poster_path}`,
                        actorPicture: randomActor.picture
                    }} 
                />
            :
            <Loader />
            }
            

            <div className="game-infos">
                <h3 style={timer <= 10 ? {"color": "red"} : {"color": "#fff"}}>
                    Time remaining: {timer}s
                </h3>
                <h3>Score: {score}</h3>
                <h3>High Score: {highScore}</h3>
            </div>
        </div>
    );
}

export default Quizz;