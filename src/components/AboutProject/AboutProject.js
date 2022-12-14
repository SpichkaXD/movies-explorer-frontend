import React from "react";
import "./AboutProject.css";

const AboutProject = () => {
    return (
        <section className="project" id="about-project">
            <h2 className="project__header">О проекте</h2>
            <div className="project__description">
                <h3 className="project__description-title">Дипломный проект включал 5 этапов</h3>
                <h3 className="project__description-title">На выполнение диплома ушло 5 недель</h3>
                <p className="project__description-subtitle">
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </p>
                <p className="project__description-subtitle">
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно
                    защититься.
                </p>
            </div>
            <div className="project__content">
                <div className="project__content-back">1 неделя</div>
                <div className="project__content-front">4 недели</div>
                <p className="project__content-caption">Back-end</p>
                <p className="project__content-caption">Front-end</p>
            </div>
        </section>
    );
};

export default AboutProject;
