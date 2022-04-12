// *********************************************************************************************************************
// Компонент со списком форм "Передано для использования или отведения без использования, по кодам категории воды"
// *********************************************************************************************************************


import React, {useRef, useState} from 'react';

// MUI
import Paper from "@mui/material/Paper";
import {Box, Fab, Grid} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Компоненты
import TransmittedWithoutUseForm from "./TransmittedWithoutUseForm";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";


export default function TransmittedWithoutUseTemplate() {

    // Стейт со списками форм
    const [arrayTransmittedOrWithdrawnByCodes, setArrayTransmittedOrWithdrawnByCodes] = useState([]);

    // Счетчик для отслеживания формы
    const count = useRef(0);

    // Добавляем форму в массив
    const onAddUsedYearCodes = () => {
        if (arrayTransmittedOrWithdrawnByCodes.length < 6) {
            setArrayTransmittedOrWithdrawnByCodes(arrayTransmittedOrWithdrawnByCodes.concat(
                <TransmittedWithoutUseForm
                    delete={dell}
                    key={count.current++}
                    keyCount={count.current}
                />
            ));
        }
    };

    // Функция удаления формы из массива
    const dell = key => {
        setArrayTransmittedOrWithdrawnByCodes(prevState => prevState.filter(el => +el.key !== +key))
    };

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Передано для использования или отведения без использования, по кодам категории воды</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2} justifyContent='center' alignContent='center'>
                        <Fab
                            disabled={arrayTransmittedOrWithdrawnByCodes.length >= 6}
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
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            {arrayTransmittedOrWithdrawnByCodes}
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};