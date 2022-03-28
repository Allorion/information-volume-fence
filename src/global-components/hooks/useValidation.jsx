// *********************************************************************************************************************
// Хук валидации полей формы
// *********************************************************************************************************************



import {useEffect, useState} from "react";

const useValidation = (value, validations) => {

    // Глобальные проверки
    const [isEmpty, setEmpty] = useState(true);

    // Проверка полей компонента формы 2ТП
    const [emailError, setEmailError] = useState(false);
    const [checkNumberSymbolOkpo, setCheckNumberSymbolOkpo] = useState(false);
    const [checkNumberSymbolInn, setCheckNumberSymbolInn] = useState(false);
    const [checkNumberSymbolGuiv, setCheckNumberSymbolGuiv] = useState(false);

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false): setEmpty(true);
                    break;

                // Проверка полей компонента формы 2ТП
                case 'isEmail':
                    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    re.test(String(value).toLowerCase()) ? setEmailError(false): setEmailError(true)
                    break;
                case 'isSymbolOkpo':
                    if (+value.length < 8){
                        setCheckNumberSymbolOkpo(true);
                    }else if (+value.length > 8 && +value.length < 10){
                        setCheckNumberSymbolOkpo(true);
                    }else if (+value.length > 10 && +value.length < 14){
                        setCheckNumberSymbolOkpo(true);
                    }else {
                        setCheckNumberSymbolOkpo(false);
                    }
                    break;
                case 'isSymbolInn':
                    if (+value.length < 10){
                        setCheckNumberSymbolInn(true);
                    }else if (+value.length > 10 && +value.length < 12){
                        setCheckNumberSymbolInn(true);
                    }else {
                        setCheckNumberSymbolInn(false);
                    }
                    break;
                case 'isSymbolGuiv':
                    if (+value.length < 6){
                        setCheckNumberSymbolGuiv(true);
                    }else {
                        setCheckNumberSymbolGuiv(false);
                    }
                    break;
            }
        }
    }, [validations, value])

    return {isEmpty, emailError, checkNumberSymbolOkpo, checkNumberSymbolInn, checkNumberSymbolGuiv};
}

export default useValidation;