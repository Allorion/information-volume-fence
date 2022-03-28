// *********************************************************************************************************************
// Хук заполнения обычных input (mui TextField)
// *********************************************************************************************************************



import React, {useState} from "react";

// Пользовательские хуки
import useValidation from "./useValidation";

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);

    // Импорт хука проверки поля
    const valid = useValidation(value, validations);

    // Функция обработки обнавления inputa
    const onChange = event => {
        setValue(event.target.value)
    };

    // Проверка открывал ли поле пользователь
    const onBlur = event => {
        setDirty(true);
    };

    return {value, onChange, onBlur, isDirty, ...valid};
}

export default useInput;