import React, {useState} from "react";

const useForm2 = (parentsValues) => {

    const [values, setValues] = useState(parentsValues);

    const handleChange = event => {
        setValues(value => ({
            ...value,
            [event.target.name]: event.target.value
        }))
    };

    const handleInputDate = (event, name) => {
        setValues((value) => ({
            ...value,
            [name]: event
        }));
    };


    return {
        values,
        handleChange,
        handleInputDate
    };
};

export default useForm2;

