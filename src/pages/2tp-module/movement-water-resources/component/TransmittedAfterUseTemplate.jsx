// *********************************************************************************************************************
// Компонент шаблона "Передано для использования или отведения после использования"
// *********************************************************************************************************************


import React, {useContext, useEffect, useRef, useState} from "react";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Fab, Grid} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// Компоненты
import TransmittedAfterUseForm from "./TransmittedAfterUseForm";

// Контекст
import TransmittedAfterUseContext from "../context/TransmittedAfterUseContext";



export default function TransmittedAfterUseTemplate(props) {

    // Получаем данные из родительского компонента
    const [transmittedAfterUseField,
        transmittedAfterUseFlag,
        transmittedAfterUseComponents] = useContext(TransmittedAfterUseContext);

    // Стейт со списками форм
    const [arrayTransmittedAfterUse,
        setArrayTransmittedAfterUse] = useState(transmittedAfterUseComponents.current);

    // Для уникальности строки при ее создании
    const formCount = useRef(0);

    // Сохраняем данные в родительский компонент
    useEffect(() => {
        for (let i=0; i<arrayTransmittedAfterUse.length; i++) {
            try {
                props.transmittedAfterUseComponentsGlobal[i] = arrayTransmittedAfterUse[i]
            }catch (err) {
                return;
            }
        }
    }, [arrayTransmittedAfterUse]);

    // Добавляем форму в массив
    const onAddUsedYearCodes = () => {
        if (arrayTransmittedAfterUse.length < 10) {
            const obj = transmittedAfterUseField.current[transmittedAfterUseField.current.length] = {
                code: '',
                value: ''
            }
            setArrayTransmittedAfterUse(arrayTransmittedAfterUse.concat(
                <TransmittedAfterUseForm
                    index={transmittedAfterUseField.current.length}
                    obj={obj}
                    delete={dell}
                    key={Math.random()}
                />
            ));
        }
    };

    // Сохраняем в глобальный объект данные из списка форм
    useEffect(() => {
        transmittedAfterUseComponents.current = arrayTransmittedAfterUse
    }, [arrayTransmittedAfterUse]);

    // При создании или перехода на новую страницу сохраняем данные
    useEffect(() => {
        setArrayTransmittedAfterUse(transmittedAfterUseComponents.current);
        formCount.current = 0;
        transmittedAfterUseFlag.current = false;
    }, [transmittedAfterUseFlag.current]);

    // Функция удаления формы из массива
    const dell = (obj, index) => {
        setArrayTransmittedAfterUse(prevState => prevState.filter((n) => {
            return n.props.obj !== obj
        }))
        transmittedAfterUseField.current = transmittedAfterUseField.current.filter((n) => {
            return n !== obj
        });
    };

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>[48 - 49] Передано для использования или отведения после использования</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2} justifyContent='center' alignContent='center'>
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
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            {arrayTransmittedAfterUse}
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};