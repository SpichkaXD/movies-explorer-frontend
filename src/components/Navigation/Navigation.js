import React from "react";
import { NavLink } from "react-router-dom";
import user from "../../images/user logo.svg";

const Navigation = (props) => {
    return (
        <nav className={`navigation ${props.isOpen ? "navigation_opened" : ""}`}>
            <div className="navigation__overlay"></div>
            <button type="button" className="navigation__close" onClick={props.onClose}>
            </button>
            <NavLink
                exact
                to="/"
                className="navigation__link"
                activeClassName="navigation__link_active"
                onClick={props.onClose}
            >
                Главная
            </NavLink>
            <NavLink
                exact
                to="/movies"
                className="navigation__link"
                activeClassName="navigation__link_active"
                onClick={props.onClose}
            >
                Фильмы
            </NavLink>
            <NavLink
                exact
                to="/saved-movies"
                className="navigation__link"
                activeClassName="navigation__link_active"
                onClick={props.onClose}
            >
                Сохранённые фильмы
            </NavLink>
            <NavLink
                exact
                to="/profile"
                className="navigation__link"
                activeClassName="navigation__link_active"
                onClick={props.onClose}
            >
                Аккаунт
                <img className="navigation__link-user" src={user} alt="иконка юзер"></img>
            </NavLink>
        </nav>
    );
};

export default Navigation;
