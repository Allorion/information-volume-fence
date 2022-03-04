// ************************************************************
// Пользовательский хук для открытия и закрытия модального окна
// ************************************************************

import React from "react";


const useModal = (setOpen) => {

    // Функции для окрытия и закрытия модального окна
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Возвращаем функции для использования в компонентах
    return [handleOpen, handleClose]
};

export default useModal;