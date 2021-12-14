import React from "react";

function Question(props) {
    const {actor, movie, isActorInMovie, isQuizzRunning} = props.data;

    return(
        <React.Fragment>
            <div className="question-container">
                <h2 className="quizz-question">
                    Does <span className="question-highlight">{actor}</span> play in <span className="question-highlight">{movie}</span> ?
                </h2>
            </div>
            <div className="question-buttons-container">
                <button 
                    onClick={() => isActorInMovie(actor, false)} 
                    className="question-button question-button-no"
                    disabled={isQuizzRunning ? false : true}
                >
                    No
                </button>
                <button 
                    onClick={() => isActorInMovie(actor, true)} 
                    className="question-button question-button-yes"
                    disabled={isQuizzRunning ? false : true}
                >
                    Yes
                </button>
            </div>
        </React.Fragment>
    );
}

export default Question;