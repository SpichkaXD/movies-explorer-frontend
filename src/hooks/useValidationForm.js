import React, { useCallback } from "react";

//хук управления формой и валидации формы
function useValidationForm() {
    const [values, setValues] = React.useState({
        name: '',
        email: '',
        password: ''
    });
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value }); // универсальный обработчик полей
        setErrors({ ...errors, [name]: target.validationMessage }); // ошибок
        setIsValid(target.closest("form").checkValidity()); // проверка валидности
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setValues(newValues);
            setErrors(newErrors);
            setIsValid(newIsValid);
        },
        [setValues, setErrors, setIsValid]
    );

    return { values, setValues, handleChange, errors, setErrors, isValid, setIsValid, resetForm };
}

export default useValidationForm;