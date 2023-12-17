import React, { useState, useEffect } from 'react';

const DefaultOnSSR = () => (<span>loading</span>);

interface NoSSRProps {
    children: any;
    onSSR?: any;
}

const NoSSR = ({ children, onSSR = <DefaultOnSSR /> }: NoSSRProps) => {
    const [canRender, setCanRender] = useState(false);

    useEffect(() => {
        setCanRender(true);
    }, []);

    return canRender ? children : onSSR;
};

export default NoSSR;
