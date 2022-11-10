import React from "react";
const Portfolio = () => {
    return (
        <section className="portfolio">
            <h3 className="portfolio__header">Портфолио</h3>
            <ul className="portfolio__links">
                <li className="portfolio__item">
                    <a
                        className="portfolio__link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://spichkaxd.github.io/how-to-learn/"
                    >
                        Статичный сайт
                    </a>
                </li>

                <li className="portfolio__item">
                    <a
                        className="portfolio__link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://spichkaxd.github.io/russian-travel/"
                    >
                        Адаптивный сайт
                    </a>
                </li>

                <li className="portfolio__item">
                    <a
                        className="portfolio__link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://spichka.nomoredomains.icu/"
                    >
                        Одностраничное приложение
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Portfolio;
