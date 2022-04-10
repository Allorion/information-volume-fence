// *********************************************************************************************************************
// Компонент шаблона "Передано для использования или отведения после использования"
// *********************************************************************************************************************


import React, {useRef, useState} from "react";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Fab, Grid} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// Компоненты
import TransmittedAfterUseForm from "./TransmittedAfterUseForm";


export default function TransmittedAfterUseTemplate() {

    // Стейт со списками форм
    const [arrayTransmittedAfterUse, setArrayTransmittedAfterUse] = useState([]);

    // Счетчик для отслеживания формы
    const count = useRef(0);

    // Добавляем форму в массив
    const onAddUsedYearCodes = () => {
        if (arrayTransmittedAfterUse.length < 2) {
            setArrayTransmittedAfterUse(arrayTransmittedAfterUse.concat(
                <TransmittedAfterUseForm
                    delete={dell}
                    key={count.current++}
                    keyCount={count.current}
                />
            ));
        }
    };

    // Функция удаления формы из массива
    const dell = key => {
        setArrayTransmittedAfterUse(prevState => prevState.filter(el => +el.key !== +key))
    };

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Передано для использования или отведения после использования</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <Fab
                                disabled={arrayTransmittedAfterUse.length >= 2}
                                sx={{marginTop: 2}}
                                variant="extended"
                                size="small"
                                color="primary"
                                aria-label="add"
                                onClick={onAddUsedYearCodes}
                            >
                                <AddIcon/>
                                Добавить
                            </Fab>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            {arrayTransmittedAfterUse}
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};