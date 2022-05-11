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
import ContentPollutantsForm from "./ContentPollutantsForm";

// Контекст
import ContentPollutantsContext from "../context/ContentPollutantsContext";


export default function ContentPollutantsTemplate(props) {

    // Получаем данные из родительского компонента
    const [
        contentPollutantsField,
        contentPollutantsFlag,
        contentPollutantsComponents
    ] = useContext(ContentPollutantsContext);

    // Стейт со списками форм
    const [arrayContentPollutants,
        setArrayContentPollutants] = useState(contentPollutantsComponents.current);

    // Для уникальности строки при ее создании
    const formCount = useRef(0);

    // Сохраняем данные в родительский компонент
    useEffect(() => {
        for (let i = 0; i < arrayContentPollutants.length; i++) {
            try {
                props.contentPollutantsComponentsGlobal[i] = arrayContentPollutants[i]
            } catch (err) {
                return;
            }
        }
    }, [arrayContentPollutants]);

    // Добавляем форму в массив
    const onAddUsedYearCodes = () => {
        if (arrayContentPollutants.length < 48) {
            const obj = contentPollutantsField.current[contentPollutantsField.current.length] = {
                code: '',
                mass: ''
            }
            setArrayContentPollutants(arrayContentPollutants.concat(
                <ContentPollutantsForm
                    index={contentPollutantsField.current.length}
                    obj={obj}
                    delete={dell}
                    key={Math.random()}
                />
            ));
        }
    };

    // Сохраняем в глобальный объект данные из списка форм
    useEffect(() => {
        contentPollutantsComponents.current = arrayContentPollutants
    }, [arrayContentPollutants]);

    // При создании или перехода на новую страницу сохраняем данные
    useEffect(() => {
        setArrayContentPollutants(contentPollutantsComponents.current);
        formCount.current = 0;
        contentPollutantsFlag.current = false;
    }, [contentPollutantsFlag.current]);

    // Функция удаления формы из массива
    const dell = (obj, index) => {
        setArrayContentPollutants(prevState => prevState.filter((n) => {
            return n.props.obj !== obj
        }))
        contentPollutantsField.current = contentPollutantsField.current.filter((n) => {
            return n !== obj
        });
    };

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>[31 - 78] Содержание загрязняющих веществ (масса ЗВ) в отведенных водах по кодам загрязняющих
                    веществ (коды ЗВ)</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2} justifyContent='center' alignContent='center'>
                        <Fab
                            disabled={arrayContentPollutants.length >= 48}
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
                            {arrayContentPollutants}
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};