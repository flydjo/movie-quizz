import React from "react";
import '../css/gameOverScreen.css';

function GameOverScreen(props) {
    return(
        <div className="game-over-container">
            <h1 className="quizz-title">MOVIE QUIZZ</h1>
            <div className="score-container">
                <div className="game-over-score">
                    <h2>
                        SCORE <br/>
                        152
                    </h2>
                </div>
                <div className="game-over-previous-score">
                    <h2>
                        PREVIOUS SCORE <br/>
                        150<br/>
                        150<br/>
                        150<br/>
                        150<br/>
                        150<br/>
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default GameOverScreen;