import React from 'react';

const useForm = (setValues) => {

    const handleChange = e => {
        const { name, value } = e.target;
        setValues(values => ({
            ...values,
            [name]: value
        }));
    };

    return {handleChange};
};

export default useForm;

