import React, { useState, useEffect } from 'react';

import DNav from './dNav';
import MobileNav from './mobileNav';

function TitlebarGridList() {
    const BigOrSmall = useWindowWidth() >= 1000 ? DNav : MobileNav;
    return (
        <BigOrSmall />
    );
}

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
    return windowWidth
}

export default TitlebarGridList