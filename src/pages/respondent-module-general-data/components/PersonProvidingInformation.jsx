// *********************************************************************************************************************
// Компонент с добавлением данных о лице предоставляющем информацию
// *********************************************************************************************************************


import React, {useEffect} from "react";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Grid, TextField} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {LocalizationProvider, MobileDatePicker} from "@mui/lab";

// Пользовательский хук
import useForm from "../../../global-components/hooks/useForm";

// одуль локализации даты
import {ru} from "date-fns/locale";


// Дефолтные input передаваемые в пользовательский хук
const field = {
    post: '',
    fio: '',
    phoneNumber: '',
    datePreparationDocument: new Date()
};


const PersonProvidingInformation = props => {

    // Хук для сохранения данных из input
    const {values, handleChange, handleInputDate} = useForm(field);

    // Обновление стейта родительского компонента
    useEffect(() => {
        props.setField(values)
    }, [props, values]);

    return (
        <Paper elevation={3}>
            <Box p={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                            fullWidth
                            multiline
                            name='post'
                            value={values.post}
                            onChange={handleChange}
                            id="post"
                            label="Должность"
                            variant="standard"
                            helperText='Укажите должность лица предоставляющего информацию'
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                            fullWidth
                            multiline
                            name='fio'
                            value={values.fio}
                            onChange={handleChange}
                            id="fio"
                            label="ФИО"
                            variant="standard"
                            helperText='Укажите фамилию, имя и отчество'
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                            fullWidth
                            name='phoneNumber'
                            value={values.phoneNumber}
                            onChange={handleChange}
                            id="phoneNumber"
                            label="Номер контактного телефона"
                            variant="standard"
                            helperText='Укажите номер контактного телефона'
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            locale={ru}
                        >
                            <MobileDatePicker
                                label="Дата составления документа"
                                value={values.datePreparationDocument}
                                onChange={(newValue) => {
                                    handleInputDate(newValue, 'datePreparationDocument');
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} helperText="Укажите дату составления документа"/>
                                )}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

export default React.memo(PersonProvidingInformation);