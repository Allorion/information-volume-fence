import React from 'react';

const useFormLate = (setValues) => {

    const handleChange = e => {

        const { name, value } = e.target;
        setValues(values => ({
            ...values,
            [name]: value
        }));
    };

    const handleInputSelect = (event) => {
        setValues(inputs => ({
                ...inputs,
                [event.target.name]: event.target.value}
        ));
    };

    const handleInputDate = (event, name) => {
        setValues((value) => ({
            ...value,
            [name]: event
        }));
    };

    return {
        handleChange,
        handleInputSelect,
        handleInputDate
    };
};

export default useFormLate;
