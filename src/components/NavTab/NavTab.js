import React from "react";

import './NavTab.css'

const NavTab = () => {
    return (
        <section className="navtab">
            <a className="navtab__link" href="#about-project">
                О проекте
            </a>
            <a className="navtab__link" href="#techs">
                Технологии
            </a>
            <a className="navtab__link" href="#student">
                Студент
            </a>
        </section>
    );
};

export default NavTab;