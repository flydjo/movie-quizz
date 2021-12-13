import React from "react";

function Question(props) {
    const {actor, movie, isActorInMovie} = props.data;

    return(
        <React.Fragment>
            <div className="question-container">
                <h2 className="quizz-question">
                    Does <span className="question-highlight">{actor}</span> play in <span className="question-highlight">{movie}</span> ?
                </h2>
            </div>
            <div className="question-buttons-container">
                <button onClick={() => isActorInMovie(actor)} className="question-button question-button-no">
                    No
                </button>
                <button className="question-button question-button-yes">
                    Yes
                </button>
            </div>
        </React.Fragment>
    );
}

export default Question;