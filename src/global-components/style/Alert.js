// ***********************
// Стиль всплывающего окна
// ***********************

import React from "react"

// MUI
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default Alert;