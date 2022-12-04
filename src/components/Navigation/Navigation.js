import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import Hamburger from "../Hamburger/Hamburger";
import logo from "../../images/logo.svg";
import user from "../../images/userLogo.svg";
import "./Navigation.css";

function Navigation({ loggedIn }) {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const location = useLocation();

    const openHamburger = () => {
        setIsHamburgerOpen(true);
    };

    const closeHamburger = () => {
        setIsHamburgerOpen(false);
    };

    React.useEffect(() => {
        const closeByEsc = (e) => {
            if (e.key === "Escape") {
                closeHamburger();
            }
        };
        document.addEventListener("keydown", closeByEsc);
        return () => document.removeEventListener("keydown", closeByEsc);
    }, []);

    return (
        <section className={`navigation ${location.pathname === '/' ? 'navigation_blue' : '' }`}>
            {!loggedIn ? (
                <div className="navigation__menu">
                    <div className="navigation__hamburger">
                        <Link to="/">
                            <img className="header__logo" src={ logo } alt="Логотип на с буквой s на зеленом фоне" />
                        </Link>
                        <Hamburger
                            isOpen={isHamburgerOpen}
                            onClick={openHamburger}
                            onClose={closeHamburger}
                        />
                    </div>

                    <div className="naviation__links">
                        <NavLink
                            className={({ isActive }) => (isActive ? "navigation__link_active" : "naviation__link")}
                            to="/movies"
                        >
                            Фильмы
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => (isActive ? "navigation__link_active" : "naviation__link")}
                            to="/saved-movies"
                        >
                            Сохранённые фильмы
                        </NavLink>

                        <nav className="navigation__account-data">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "navigation__login-active" : "navigation__login"
                                }
                                to="/profile"
                            >
                                Аккаунт
                            </NavLink>

                            <Link
                                className="navigation__account"
                                to="/profile"
                                src={ user }
                                alt="изображение человечка"
                            ></Link>
                        </nav>
                    </div>
                </div>
            ) : (
                ""
            )}
        </section>
    );
}

export default Navigation;
