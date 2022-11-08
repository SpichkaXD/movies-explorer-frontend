import React from "react";
import PromoLogo from "../../images/landing-logo.svg";

const Promo = () => {
    return (
        <div className="promo">
            <h1 className="promo__title">Учебный проект студента факультета Веб&nbsp;-&nbsp;разработки.</h1>
            <img className="promo__logo" src={PromoLogo} alt="логотип"></img>
        </div>
    );
};

export default Promo;
