import React from "react";
import { useHistory } from "react-router-dom";
const NotFound = () => {
    const history = useHistory();
    return (
        <section className="notfound">
            <h1 className="notfound__header">404</h1>
            <p className="notfound__caption">Страница не найдена</p>
            <button type="button" className="notfound__button" onClick={() => history.goBack()}>
                Назад
            </button>
        </section>
    );
};

export default NotFound;
