// *********************************************************************************************************************
// Компонент со списком форм "Использовано за год по кодам видов использования"
// *********************************************************************************************************************


import React, {useContext, useEffect, useRef, useState} from "react";

// MUI
import {Box, Fab, Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// Компоненты
import UsedForTheYearForm from "./UsedForTheYearForm";

// Контекст
import UsedForTheYearContext from "../context/UsedForTheYearContext";


export default function UsedForTheYearTemplate(props) {

    // Получаем данные из родительского компонента
    const [usedForTheYearField, usedForTheYearFlag, usedForTheYearComponents] = useContext(UsedForTheYearContext);

    // Стейт со списками форм
    const [arrayAddUsedYearCodes, setArrayAddUsedYearCodes] = useState(usedForTheYearComponents.current);

    // Для уникальности строки при ее создании
    const formCount = useRef(0);

    // Сохраняем данные в родительский компонент
    useEffect(() => {
         for (let i=0; i<arrayAddUsedYearCodes.length; i++) {
             try {
                 props.usedForTheYearComponentsGlobal[i] = arrayAddUsedYearCodes[i]
             }catch (err) {
                 return;
             }
         }
    }, [arrayAddUsedYearCodes]);

    // Добавляем форму в массив
    const onAddUsedYearCodes = () => {
        if (arrayAddUsedYearCodes.length < 10) {
            const obj = usedForTheYearField.current[usedForTheYearField.current.length] = {code: '', value: ''}
            setArrayAddUsedYearCodes(arrayAddUsedYearCodes.concat(
                <UsedForTheYearForm
                    index={usedForTheYearField.current.length}
                    obj={obj}
                    delete={dell}
                    key={Math.random()}
                />
            ));
        };
    };

    // Сохраняем в глобальный объект данные из списка форм
    useEffect(() => {
        usedForTheYearComponents.current = arrayAddUsedYearCodes
    }, [arrayAddUsedYearCodes]);

    // При создании или перехода на новую страницу сохраняем данные
    useEffect(() => {
        setArrayAddUsedYearCodes(usedForTheYearComponents.current);
        formCount.current = 0;
        usedForTheYearFlag.current = false;
    }, [usedForTheYearFlag.current]);

    // Функция удаления формы из массива
    const dell = (obj, index) => {
        setArrayAddUsedYearCodes(prevState => prevState.filter((n) => {return n.props.obj !== obj}))
        usedForTheYearField.current = usedForTheYearField.current.filter((n) => {return n !== obj});
    };

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>[32 - 41] Использовано за год по кодам видов использования</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2} justifyContent='center' alignContent='center'>
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
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            {arrayAddUsedYearCodes}
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};