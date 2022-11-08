import React from "react";
import logo from "../../images/logo.svg";
import user from "../../images/user logo.svg";
import menu from "../../images/menu.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";

function Header() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu = () => {
        setIsMenuOpen(true);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    return (
        <header className={`header ${location.pathname === '/' ? 'header_blue' : '' }`}>
            <Link to="/" className="header__homelink">
                <img className="header__logo" src={logo} alt="лого"></img>
            </Link>
            {location.pathname === "/" && (
                
                <nav className="header__signblock">
                    <Link className="header__register" to="/signup">
                        Регистрация
                    </Link>
                    <Link className="header__login" to="/signin">
                        Войти
                    </Link>
                </nav>
            )}
            {location.pathname !== "/" && (
                    <nav className="header__navblock">
                        <div className="header__navblock_films">
                            <Link className="header__films link" to="/movies">
                                Фильмы
                            </Link>
                            <Link className="header__saved-films link" to="/saved-movies">
                                Сохраненные фильмы
                            </Link>
                        </div>
                        <Link className="header__profile link" to="/profile">
                            Аккаунт
                            <img className="header__user" src={user} alt="юзер"></img>
                        </Link>
                        <button className="header__menu link" onClick={openMenu}>
                            <img src={menu} alt="меню"></img>
                        </button>
                    </nav>
            )}
            {<Navigation isOpen={isMenuOpen} onClose={closeMenu} />}
        </header>
    );
}

export default Header;
