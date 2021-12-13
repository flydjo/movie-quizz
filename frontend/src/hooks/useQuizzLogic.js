import {useState, useEffect} from "react";

function useQuizzLogic() {
    const apiKey = "f4360450df9f737a0ad0931c57e16402";

    const GAME_TIME = 60;
    const [movieInfos, setMovieInfo] = useState("");
    const [timer, setTimer] = useState(GAME_TIME);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`)
            .then(res => res.json())
            .then(res => setMovieInfo(res));
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if(timer > 0) {
                setTimer(timer => timer - 1);
            } else if(timer === 0) {
                console.log("Finit");
            }
            clearTimeout(timeoutId);
        }, 1000)
    }, [timer]);

    return [
        movieInfos,
        timer
    ]
}

export default useQuizzLogic;