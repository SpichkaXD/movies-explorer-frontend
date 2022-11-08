import React from "react";
const Portfolio = () => {
    return (
        <div className="portfolio">
            <h3 className="portfolio__header">Портфолио</h3>
            <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://spichkaxd.github.io/how-to-learn/">
                Статичный сайт
            </a>
            <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://spichkaxd.github.io/russian-travel/">
                Адаптивный сайт
            </a>
            <a className="portfolio__link" target="_blank" rel="noreferrer" href="https://spichka.nomoredomains.icu/">
                Одностраничное приложение
            </a>
        </div>
    );
};

export default Portfolio;
