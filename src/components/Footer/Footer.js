import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
        <p className="footer__caption">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
            <p className="footer__copyright">&copy; 2022</p>
            <div className="footer__links">
                <a className="footer__link" target="_blank" rel="noreferrer" href="https://practicum.yandex.ru/">
                    Яндекс.Практикум
                </a>
                <a className="footer__link" target="_blank" rel="noreferrer" href="https://github.com/SpichkaXD">
                    Github
                </a>
                <a className="footer__link" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/егор-любчик-481721247/">
                    linkedin
                </a>
            </div>
        </div>
    </footer>
    )
}
export default Footer;