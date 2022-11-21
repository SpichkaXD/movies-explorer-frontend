import React from 'react';
import './AboutMe.css';
import avatar from '../../images/userLogo.svg';
import Portfolio from '../Portfolio/Portfolio';


const AboutMe = () => {
    return (
        <section className="aboutme" id="student">
            <h2 className="aboutme__header">Студент</h2>
            <div className="aboutme__description">
                <img className="aboutme__description-photo" src={avatar} alt="avatar"></img>
                <div className="aboutme__description-info">
                    <h3 className="aboutme__title">Егор</h3>
                    <p className="aboutme__subtitle">Фронтенд-разработчик, 25 лет</p>
                    <p className="aboutme__caption">
                        Я родился и живу в Беларуси, закончил приборостроительный факультет БНТУ. Я люблю пешие прогулки
                        . Недавно начал кодить. С 2022 года работаю на ТЭЦ. Сейчас заканчиваю
                        обучение на курсе веб-разработки Яндекс.Практикум.
                    </p>
                    <div className="aboutme__links">
                        <a className="aboutme__link" href="https://www.linkedin.com/in/егор-любчик-481721247/" target="_blank" rel="noreferrer">
                            Linkedin
                        </a>
                        <a
                            className="aboutme__link"
                            href="https://github.com/SpichkaXD"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Github
                        </a>
                    </div>
                </div>
            </div>
            <Portfolio/>
        </section>
    );
};

export default AboutMe;