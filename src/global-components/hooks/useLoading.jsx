// ***************************************************************
// Пользовательский хук для вывода загрузки во время запроса к API
// ***************************************************************

import React, {useState} from "react";

const useLoading = () => {

    // Состояние загрузки
    const [loading, setLoading] = useState(false);

    // Функция загрузки
    const handleLoading = (e) => setLoading(e)

    // Возвращаем данные для использования в компонентах
    return {loading, handleLoading};
};

export default useLoading;