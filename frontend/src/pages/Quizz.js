import React from "react";
import '../css/quizz.css';
import Question from "../components/Question";
import useQuizzLogic from "../hooks/useQuizzLogic";

function Quizz() {
    const [
        movieInfos,
        timer
    ] = useQuizzLogic();

    return(
        <div className="quizz-container">
            <h1 className="quizz-title">MOVIE QUIZZ</h1>

            <Question data={{actor: "Brad Pitt", movie: movieInfos.original_title}} />

            <div className="game-infos">
                <h3>Time remaining: {timer}s</h3>
                <h3>Score: 0</h3>
            </div>
        </div>
    );
}

export default Quizz;