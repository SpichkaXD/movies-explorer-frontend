import React from "react";
const FilterCheckbox = () => {
    return (
        <label className="filter-checkbox">
            <input className="filter-checkbox__input" type="checkbox" defaultChecked />
            <span className="filter-checkbox__span">Короткометражки</span>
        </label>
    );
};

export default FilterCheckbox;
