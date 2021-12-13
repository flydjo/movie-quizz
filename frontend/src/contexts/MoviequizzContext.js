import React, {createContext, useState, useEffect} from "react";
import { random } from "gsap/gsap-core";

const Context = createContext();

function ContextProvider(props) {
    const apiKey = "f4360450df9f737a0ad0931c57e16402";
    const [movieInfos, setMovieInfo] = useState("");
    const [movieActors, setMovieActors] = useState([]);
    const [randomActor, setRandomActor] = useState("");

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`)
            .then(res => res.json())
            .then(res => setMovieInfo(res));

        fetch(`https://api.themoviedb.org/3/movie/550/credits?api_key=${apiKey}`)
            .then(res => res.json())
            .then(res => getActorsFromMovie(res.cast));

    }, []);

    useEffect(() => {
        getRandomActor();
    }, [movieActors])

    function getActorsFromMovie(movieCast) {
        const newArray = movieCast.map(cast => cast.original_name);
        setMovieActors(newArray);
    }

    function isActorInMovie(actor) {
        const resp = movieActors.filter(movieActor => movieActor === actor);
        //return resp.length > 0 ? setGoodAnswer(true) : setGoodAnswer(false);
        resp.length > 0 ? console.log(true) : console.log(false);
    }

    function getRandomActor() {
        const random = Math.floor(Math.random() * movieActors.length);
        setRandomActor(movieActors[random]);
    }

    return(
        <Context.Provider 
            value={{
                movieInfos,
                movieActors,
                isActorInMovie,
                randomActor
            }}
        >
            {props.children}
        </Context.Provider>
    );
}

export {ContextProvider, Context}