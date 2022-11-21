import React from 'react';

import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import NavTab from '../NavTab/NavTab';

import './Main.css';

const Main = () => {
    return (
        <main className='main'>
            <Promo />
            <NavTab />
            <AboutProject />
            <Techs />
            <AboutMe />
        </main>
    );
};

export default Main;