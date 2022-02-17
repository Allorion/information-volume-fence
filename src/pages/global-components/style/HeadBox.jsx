import React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const HeadBox = styled(Paper)(({theme}) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    background: '#eceff1',
    fontSize: '18px'
}));

export default HeadBox;