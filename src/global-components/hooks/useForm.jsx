// *******************************************************
// Пользовательский хук для заполнения полей input в форме
// *******************************************************

import React, {useState} from "react";

const useForm = (parentsValues) => {

    // Сотстояние для записи объекта полей формы
    const [values, setValues] = useState(parentsValues);

    // Запись обычных input
    const handleChange = event => {
        setValues(value => ({
            ...value,
            [event.target.name]: event.target.value
        }))
    };

    // Запись input с датой
    const handleInputDate = (event, name) => {
        setValues((value) => ({
            ...value,
            [name]: event
        }));
    };

    // Возвращаем данные для использования внутри компонентов
    return {
        values,
        handleChange,
        handleInputDate
    };
};

export default useForm;

