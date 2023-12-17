import { useState } from 'react';
import { storage } from '../utils/local-storage';

const useInfoSkip = () => {
    const [skipState, setSkipState] = useState(false);

    const skipStateLocalStorage = storage("skipState");

    const alreadySkipped = skipStateLocalStorage.getString();

    const setSkip = () => {
        skipStateLocalStorage.setString("true");
        setSkipState(true);
    }

    return { isSkipped: Boolean(alreadySkipped || skipState), skip: setSkip };

};

export default useInfoSkip;

