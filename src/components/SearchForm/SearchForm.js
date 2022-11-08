import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = () => {
    return (
        <form className="searchform">
            <div className="searchform__search">
                <input placeholder="Фильм" className="searchform__input" type="search" required></input>
                <button className="searchform__button">Поиск</button>
            </div>
            <FilterCheckbox />
        </form>
    );
};

export default SearchForm;
