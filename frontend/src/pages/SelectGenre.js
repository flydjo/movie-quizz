import React from "react";
import {Link} from "react-router-dom";
import '../css/selectGenre.css';

function SelectGenre() {
    return(
        <div className="select-genre-container">
            
            <h2 className="gender-sub-title">Choose a category</h2>
            <div className="select-button-genre-container">
                <Link className="select-genre-button" to="/quizz/28">
                    Action
                </Link>
                <Link className="select-genre-button" to="/quizz/12">
                    Adventure
                </Link>
                <Link className="select-genre-button" to="/quizz/35">
                    Comedy
                </Link>
                <Link className="select-genre-button" to="/quizz/53">
                    Thriller
                </Link>
            </div>
        </div>
    );
}

export default SelectGenre;