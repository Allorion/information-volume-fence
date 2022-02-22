import React from "react";


const useModal = (setOpen) => {
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return [handleOpen, handleClose]
};

export default useModal;