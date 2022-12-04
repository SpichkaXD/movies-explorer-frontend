import React, { useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import { useLocation } from "react-router-dom";

import useFormWithValidation from "../../hooks/useValidationForm";

import "./SearchForm.css";

function SearchForm({ handleSearchSubmit }) {
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

    function toggleCheckbox(checkboxStatus) {
        setCheckboxStatus(checkboxStatus);
        handleSearchSubmit(request, checkboxStatus);
    }

    function handleRequestChange(e) {
        handleChange(e);
        setRequest(e.target.value);
    }

    function handleChangeCheckbox(e) {
        toggleCheckbox(e.target.checked);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!request) {
            setNoSearchResult("Нужно ввести ключевое слово");
            console.log("Нужно ввести ключевое слово");
        }
        handleSearchSubmit(request, checkboxStatus);
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
            <Checkbox checkboxStatus={checkboxStatus} handleShortFilms={handleChangeCheckbox} />
        </form>
    );
}

export default SearchForm;
