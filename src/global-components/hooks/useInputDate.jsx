// *********************************************************************************************************************
// Хук заполнения полей с датой
// *********************************************************************************************************************



import React, {useState} from "react";

const useInputDate = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);

    const onChange = newValue => {
        setValue(newValue)
    };

    const onBlur = event => {
        setDirty(true);
    };

    return {value, onChange, onBlur};
}

export default useInputDate;