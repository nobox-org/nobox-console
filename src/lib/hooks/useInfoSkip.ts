import { useState } from 'react';

const useInfoSkip = () => {
    const [skipState, setSkipState] = useState(false);

    const alreadySkipped = localStorage.getItem("skipState");

    const setSkip = () => {
        localStorage.setItem("skipState", "true");
        setSkipState(true);
    }

    return { isSkipped: Boolean(alreadySkipped || skipState), skip: setSkip };
};

export default useInfoSkip;

