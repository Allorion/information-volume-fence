// *********************************************************************************************************************
// Компонент со списком форм "Передано для использования или отведения без использования, по кодам категории воды"
// *********************************************************************************************************************


import React, {useContext, useEffect, useRef, useState} from 'react';

// MUI
import Paper from "@mui/material/Paper";
import {Box, Fab, Grid} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Компоненты
import TransmittedWithoutUseForm from "./TransmittedWithoutUseForm";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// Контекст
import TransmittedWithoutUseContext from "../context/TransmittedWithoutUseContext";


export default function TransmittedWithoutUseTemplate(props) {

    // Получаем данные из родительского компонента
    const [transmittedWithoutUseField,
        transmittedWithoutUseFlag,
        transmittedWithoutUseComponents] = useContext(TransmittedWithoutUseContext);

    // Стейт со списками форм
    const [arrayTransmittedOrWithdrawnByCodes,
        setArrayTransmittedOrWithdrawnByCodes] = useState(transmittedWithoutUseComponents.current);

    // Для уникальности строки при ее создании
    const formCount = useRef(0);

    // Сохраняем данные в родительский компонент
    useEffect(() => {
        for (let i=0; i<arrayTransmittedOrWithdrawnByCodes.length; i++) {
            try {
                props.transmittedWithoutUseComponentsGlobal[i] = arrayTransmittedOrWithdrawnByCodes[i]
            }catch (err) {
                return;
            }
        }
    }, [arrayTransmittedOrWithdrawnByCodes]);

    // Добавляем форму в массив
    const onAddUsedYearCodes = () => {
        if (arrayTransmittedOrWithdrawnByCodes.length < 10) {
            const obj = transmittedWithoutUseField.current[transmittedWithoutUseField.current.length] = {
                code: '',
                value: ''
            }
            setArrayTransmittedOrWithdrawnByCodes(arrayTransmittedOrWithdrawnByCodes.concat(
                <TransmittedWithoutUseForm
                    index={transmittedWithoutUseField.current.length}
                    obj={obj}
                    delete={dell}
                    key={Math.random()}
                />
            ));
        }
    };

    // Сохраняем в глобальный объект данные из списка форм
    useEffect(() => {
        transmittedWithoutUseComponents.current = arrayTransmittedOrWithdrawnByCodes
    }, [arrayTransmittedOrWithdrawnByCodes]);

    // При создании или перехода на новую страницу сохраняем данные
    useEffect(() => {
        setArrayTransmittedOrWithdrawnByCodes(transmittedWithoutUseComponents.current);
        formCount.current = 0;
        transmittedWithoutUseFlag.current = false;
    }, [transmittedWithoutUseFlag.current]);

    // Функция удаления формы из массива
    const dell = (obj, index) => {
        setArrayTransmittedOrWithdrawnByCodes(prevState => prevState.filter((n) => {
            return n.props.obj !== obj
        }))
        transmittedWithoutUseField.current = transmittedWithoutUseField.current.filter((n) => {
            return n !== obj
        });
    };

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>[42 - 47] Передано для использования или отведения без использования, по кодам категории воды</HeadBox>
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