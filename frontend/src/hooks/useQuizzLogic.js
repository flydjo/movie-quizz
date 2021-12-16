import {useState, useEffect} from "react";

function useQuizzLogic() {
    const GAME_TIME = 60;
    const [timer, setTimer] = useState(GAME_TIME);
    const [isQuizzRunning, setIsQuizRunning] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if(timer > 0 && isQuizzRunning === true) {
                setTimer(timer => timer - 1);
            } else if(timer === 0) {
                setIsQuizRunning(false);
            }
            clearTimeout(timeoutId);
        }, 1000);
    }, [timer]);

    return [
        timer,
        isQuizzRunning
    ]
}

export default useQuizzLogic;