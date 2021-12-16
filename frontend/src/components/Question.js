import React from "react";
import noPicture from "../no-picture.jpeg";
import PropTypes from 'prop-types';

function Question(props) {
    const {actor, movie, isActorInMovie, isQuizzRunning, moviePoster, actorPicture} = props.data;

    return(
        <React.Fragment>
            <div className="question-picture-container">
                <img 
                    className="quizz-picture" 
                    alt="actor-profile-path" 
                    src={actorPicture !== null ? `https://image.tmdb.org/t/p/w500${actorPicture}` : noPicture} 
                />
                <img 
                    className="quizz-picture" 
                    alt="movie-poster" 
                    src={moviePoster} 
                />
            </div>
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

Question.propTypes = {
    data: PropTypes.shape({
        actor: PropTypes.string.isRequired,
        movie: PropTypes.string.isRequired,
        isActorInMovie: PropTypes.func.isRequired,
        isQuizzRunning: PropTypes.bool.isRequired,
        moviePoster: PropTypes.string.isRequired,
        actorPicture: PropTypes.string.isRequired
    })
}

export default Question;