import React from "react";
import { Link, NavLink } from "react-router-dom";

import user from "../../images/userLogo.svg";

import "./Hamburger.css";

function Hamburger({ onClick, isOpen, onClose }) {
    const hamburgerButton = `hamburger__visible ${isOpen ? "hamburger__hidden" : "hamburger__visible"}`;

    const hamburgerActive = `hamburger ${isOpen ? "hamburger__active" : " "}`;

    return (
        <>
            <button className={hamburgerButton} onClick={onClick} />
            <div className={hamburgerActive}>
                <button className="hamburger__close" onClick={onClose} />
                <nav className="hamburger__links">
                    <NavLink
                        className={({ isActive }) => (isActive ? "hamburger__link_active" : "hamburger__link")}
                        to="/"
                    >
                        Главная
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => (isActive ? "hamburger__link_active" : "hamburger__link")}
                        to="/movies"
                    >
                        Фильмы
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => (isActive ? "hamburger__link_active" : "hamburger__link")}
                        to="/saved-movies"
                    >
                        Сохранённые фильмы
                    </NavLink>
                </nav>
                <nav className="hamburger__footer">
                    <NavLink
                        className={({ isActive }) => (isActive ? "hamburger__login-active" : "hamburger__login")}
                        to="/profile"
                    >
                        Аккаунт
                    </NavLink>

                    <Link className="hamburger__account" to="/profile" src={user} alt="лого"></Link>
                </nav>
            </div>
        </>
    );
}

export default Hamburger;
