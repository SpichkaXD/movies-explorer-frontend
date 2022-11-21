import React from "react";

import "./Checkbox.css";

function Checkbox({ checkboxStatus, onChangeCheckbox }) {
    return (
        <label className="checkbox">
            <input className="checkbox__input" type="checkbox"
                    name="checkbox"
                    value={checkboxStatus}
                    onChange={onChangeCheckbox} />
            <span className="checkbox__span">Короткометражки</span>
        </label>
    );
}

export default Checkbox;
