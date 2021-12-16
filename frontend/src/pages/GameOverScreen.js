import React, {useContext} from "react";
import '../css/gameOverScreen.css';
import {Context} from "../contexts/MoviequizzContext";
import {Link} from "react-router-dom";

function GameOverScreen(props) {

    const {score, highScore} = useContext(Context);

    return(
        <div className="game-over-container">
            <h1 className="quizz-title">MOVIE QUIZZ</h1>
            <div className="score-container">
                <div className="game-over-score">
                    <h2>
                        SCORE <br/>
                        {score}
                    </h2>
                </div>
                <div className="game-over-previous-score">
                    <h2>
                        HIGH SCORE <br/>
                        {highScore}
                    </h2>
                </div>
            </div>
            <div className="game-over-button-container">
                <Link className="replay-button" to="/gender">
                    replay
                </Link>
            </div>
        </div>
    );
}

export default GameOverScreen;