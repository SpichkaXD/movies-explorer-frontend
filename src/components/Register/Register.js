import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Register.css";
import Error from "../Error/Error.js";
import logo from "../../images/logo.svg";
import useValidationForm from "../../hooks/useValidationForm";

function Register({ registerError, onRegister }) {
    const { values, handleChange, resetForm, errors, isValid } = useValidationForm();

    //сброс фоормы
    useEffect(() => {
        resetForm({}, {}, false);
    }, [resetForm]);

    function handleSubmit(evt) {
        evt.preventDefault();
        onRegister(values);
    }

    return (
        <section className="register">
            <div className="register__container">
                <div className="register__header">
                    <Link to="/">
                        <img className="header__logo" src={logo} alt="Логотип" />
                    </Link>
                </div>

                <h2 className="register__welcome">Добро пожаловать!</h2>

                <form className="register__form" name="register-form" onSubmit={handleSubmit}>
                    <div className="register__field">
                        <label>
                            <span className="register__text">Имя</span>
                            <input
                                className="register__input"
                                type="text"
                                name="name"
                                placeholder="Имя"
                                minLength="2"
                                value={values.name || ""}
                                onChange={handleChange}
                                required
                            />
                            <Error errorMessage={errors.name} />
                        </label>

                        <label>
                            <span className="register__text">E-mail</span>
                            <input
                                className="register__input"
                                type="email"
                                name="email"
                                value={values.email || ""}
                                placeholder="E-mail"
                                pattern="^\S+@\S+\.\S+$"
                                onChange={handleChange}
                                required
                            />
                            <Error errorMessage={errors.email} />
                        </label>

                        <label>
                            <span className="register__text">Пароль</span>
                            <input
                                className="register__input"
                                type="password"
                                name="password"
                                placeholder="Пароль"
                                value={values.password || ""}
                                minLength="4"
                                onChange={handleChange}
                                required
                            />
                            <Error errorMessage={errors.password} />
                        </label>
                    </div>

                    <div className="register__nav">
                        <Error errorMessage={registerError} />
                        <button
                            className="register__button"
                            type="submit"
                            disabled={!isValid}
                            style={!isValid ? { backgroundColor: "#4285F4", opacity: ".8" } : null}
                        >
                            Зарегистрироваться
                        </button>
                        <Link className="register__link" to="/signin">
                            Уже зарегистрированы?
                            <span className="register__login">Войти</span>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Register;
