import React, {useEffect} from "react";
import '../css/welcomeScreen.css';
import {Link} from "react-router-dom";
import {annimWelcomeScreen} from "../animations/script";

function WelcomeScreen() {
    useEffect(() => {
        annimWelcomeScreen();
    }, []);

    return (
        <div className="welcome-screen-container">
            {/* <h1 className="welcome-title">MOVIE QUIZZ</h1> */}
            <svg className="welcome-title" viewBox="0 0 500 100">
                <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                <text>
                    <textPath startOffset="21%" alignmentBaseline="middle" xlinkHref="#curve">
                    MOVIE QUIZZ
                    </textPath>
                </text>
            </svg>
            <h1 className="welcome-sub-title">
                Welcome to the movie quizz ! <br />
                Let's test your knowledge about movie culture
            </h1>
            <p className="welcome-rules">
                The rules are simple ! You'll be asked a series of "Yes or No" questions. Answer as many as you can in the allowed time ! Good luck !
            </p>
            <Link className="start-button" to="/quizz">
                START
            </Link>      
        </div>
    );
}

export default WelcomeScreen;