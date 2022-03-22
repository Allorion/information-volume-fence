// ******************************
// Компонент с навигационным меню
// ******************************



import React from 'react';

//MUI
import {Box, Grid} from "@mui/material";
import Paper from "@mui/material/Paper";

//Стили
import HeadBox from "../../global-components/style/HeadBox";

//Компоненты
import NavBarRespondentModule from "../../global-components/components/NavBarRespondentModule";


export default function MenuTemplate() {

    return(
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <Paper elevation={3}>
                        <HeadBox>Модуль респондент</HeadBox>
                        <Box p={4}>
                            <NavBarRespondentModule/>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
            </Grid>
        </React.Fragment>
    );
};