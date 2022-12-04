import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Login.css";
import logo from "../../images/logo.svg";
import useValidationForm from "../../hooks/useValidationForm";
import Error from "../Error/Error";

function Login({ onLogin, loginError }) {
    const { values, resetForm, handleChange, errors, isValid } = useValidationForm();

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(values);
    }

    useEffect(() => {
        resetForm("", "", false);
    }, [resetForm]);

    return (
        <section className="login">
            <div className="login__container">
                <div className="login__header">
                    <Link to="/">
                        <img className="header__logo" src={logo} alt="Логотип" />
                    </Link>
                </div>

                <h2 className="login__welcome">Рады видеть!</h2>

                <form className="login__form" name="login-form" onSubmit={handleSubmit}>
                    <div className="login__area">
                        <label>
                            <span className="login__text">E-mail</span>
                            <input
                                className="login__input"
                                name="email"
                                type="email"
                                placeholder="E-mail"
                                pattern="^\S+@\S+\.\S+$"
                                value={values.email || ""}
                                onChange={handleChange}
                                required
                            />
                            <Error errorMessage={errors.email} />
                        </label>

                        <label>
                            <span className="login__text">Пароль</span>
                            <input
                                className="login__input"
                                name="password"
                                type="password"
                                placeholder="Пароль"
                                onChange={handleChange}
                                value={values.password || ""}
                                minLength="4"
                                required
                            />
                            <Error errorMessage={errors.password} />
                        </label>
                    </div>

                    <div className="login__nav">
                        <Error errorMessage={loginError} />
                        <button
                            className="login__button"
                            type="submit"
                            disabled={!isValid}
                            style={!isValid ? { backgroundColor: "#4285F4", opacity: ".5" } : null}
                        >
                            Войти
                        </button>
                        <Link className="login__link" to="/signup">
                            Ещё не зарегистрированы?
                            <span className="login__register">Регистрация</span>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;
