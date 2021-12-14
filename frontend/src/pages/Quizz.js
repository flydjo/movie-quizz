import React, {useContext} from "react";
import '../css/quizz.css';
import Question from "../components/Question";
import useQuizzLogic from "../hooks/useQuizzLogic";
import {Context} from "../contexts/MoviequizzContext";
import {Link} from "react-router-dom";

function Quizz() {
    const [
        timer
    ] = useQuizzLogic();

    const {
        movieInfos,
        isActorInMovie,
        randomActor
    } = useContext(Context);

    return(
        <div className="quizz-container">
            <h1 className="quizz-title">MOVIE QUIZZ</h1>

            <Question 
                data={{
                    actor: randomActor, 
                    movie: movieInfos.original_title, 
                    isActorInMovie: isActorInMovie
                }} 
            />

            <div className="game-infos">
                <h3>Time remaining: {timer}s</h3>
                <h3>Score: 0</h3>
            </div>
        </div>
    );
}

export default Quizz;