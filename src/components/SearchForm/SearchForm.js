import React, { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import { useLocation } from "react-router-dom";

import useFormWithValidation from "../../hooks/useFormWithValidation";

import "./SearchForm.css";

function SearchForm({ onSearch }) {
    const { handleChange } = useFormWithValidation();
    const location = useLocation();

    const [request, setRequest] = useState("");
    const [checkboxStatus, setCheckboxStatus] = useState(false);

    const [noSearchResult, setNoSearchResult] = useState(null);


    useEffect(() => {
        if (location.pathname === "/movies") {
            const checkbox = localStorage.getItem("checkboxStatus");
            const search = localStorage.getItem("request");

            if (search) {
                setRequest(search);
            }
            if (JSON.parse(checkbox) === true) {
                setCheckboxStatus(true);
            } else {
                setCheckboxStatus(false);
            }
        }
    }, [location.pathname]);

    //чекбокс
    function toggleCheckbox(checkboxStatus) {
        setCheckboxStatus(checkboxStatus);
        onSearch(request, checkboxStatus);
    }

    function handleChangeCheckbox(evt) {
        toggleCheckbox(evt.target.checked);
    }

    function handleRequestChange(evt) {
        handleChange(evt);
        setRequest(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        if (!request) {
            setNoSearchResult("Нужно ввести ключевое слово");
            console.log("Нужно ввести ключевое слово");
        }
        onSearch(request, checkboxStatus);
    }

    return (
        <form className="searchform" onSubmit={handleSubmit} noValidate>
            <div className="searchform__search">
                <input
                    className="searchform__input"
                    type="text"
                    name="request"
                    placeholder="Фильм"
                    value={request || ""}
                    onChange={handleRequestChange}
                    required
                ></input>
                <button type="submit" className="searchform__button">
                    Поиск
                </button>
            </div>
            <Checkbox checkboxStatus={checkboxStatus} onChangeCheckbox={handleChangeCheckbox} />
        </form>
    );
}

export default SearchForm;
