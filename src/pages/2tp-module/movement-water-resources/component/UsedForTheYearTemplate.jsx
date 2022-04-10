// *********************************************************************************************************************
// Компонент со списком форм "Использовано за год по кодам видов использования"
// *********************************************************************************************************************



import React, {useRef, useState} from "react";

// MUI
import {Box, Fab, Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// Компоненты
import UsedForTheYearForm from "./UsedForTheYearForm";


export default function UsedForTheYearTemplate() {

    // Стейт со списками форм
    const [arrayAddUsedYearCodes, setArrayAddUsedYearCodes] = useState([]);

    // Счетчик для отслеживания формы
    const count = useRef(0);

    // Добавляем форму в массив
    const onAddUsedYearCodes = () => {
        if (arrayAddUsedYearCodes.length < 10) {
            setArrayAddUsedYearCodes(arrayAddUsedYearCodes.concat(
                <UsedForTheYearForm
                    delete={dell}
                    key={count.current++}
                    keyCount={count.current}
                />
            ));
        }
    };

    // Функция удаления формы из массива
    const dell = key => {
        setArrayAddUsedYearCodes(prevState => prevState.filter(el => +el.key !== +key))
    };

    return(
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Использовано за год по кодам видов использования</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <Fab
                                sx={{marginTop: 2}}
                                disabled={arrayAddUsedYearCodes.length >= 10}
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
                            {arrayAddUsedYearCodes}
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};