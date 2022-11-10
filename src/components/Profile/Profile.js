import React from "react";
const Profile = () => {
    return (
        <section className="profile">
            <h1 className="profile__header">Привет, Егор!</h1>
            <form>
                <div className="profile__container">
                    <label className="profile__label" htmlFor="name">
                        Имя
                    </label>
                    <input
                        className="profile__input"
                        id="name"
                        defaultValue="Егор"
                        minLength="2"
                        maxLength="30"
                        required
                    />
                </div>
                <div className="profile__container">
                    <label className="profile__label" htmlFor="email">
                        E-mail
                    </label>
                    <input
                        className="profile__input"
                        type="email"
                        id="email"
                        defaultValue="pochta@yandex.ru"
                        required
                    />
                </div>
            </form>
            <div className="profile__buttons">
                <button type="submit" className="profile__button">Редактировать</button>
                <button type="reset" className="profile__button">Выйти из аккаунта</button>
            </div>
        </section>
    );
};

export default Profile;
