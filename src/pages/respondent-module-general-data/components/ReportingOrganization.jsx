// *********************************************************************************************************************
// Компонент с данными отчитывающейся организации
// *********************************************************************************************************************


import React, {useEffect} from "react";

// MUI
import {DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {Box, Grid, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";

// Пользовательские хуки
import useForm from "../../../global-components/hooks/useForm";

// Компонент локализации даты
import {ru} from "date-fns/locale";


// Дефолтные input передаваемые в пользовательский хук
const field = {
    year: new Date(),
    nameReportingOrganization: '',
    postalAddress: '',
    legalAddress: '',
    email: ''
};


const ReportingOrganization = props => {

    // Хук для сохранения данных из input
    const {values, handleChange, handleInputDate} = useForm(field);

    // Обновление стейта родительского компонента
    useEffect(() => {
        props.setField(values)
    }, [props, values]);

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                                locale={ru}
                            >
                                <DatePicker
                                    views={['year']}
                                    label="Год"
                                    value={values.year}
                                    onChange={(newValue) => {
                                        handleInputDate(newValue, 'year');
                                    }}
                                    renderInput={(params) => <TextField {...params} helperText={null}/>}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                multiline
                                maxRows={4}
                                name='nameReportingOrganization'
                                value={values.nameReportingOrganization}
                                onChange={handleChange}
                                id="standard-basic"
                                label="Наименование отчитывающейся организации"
                                variant="standard"
                                helperText='Укажите название отчитывающейся организации'
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                multiline
                                maxRows={4}
                                name='postalAddress'
                                value={values.postalAddress}
                                onChange={handleChange}
                                id="standard-basic"
                                label="Почтовый адресс"
                                variant="standard"
                                helperText="Укажите почтовый адресс отчитывающейся организации"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                multiline
                                maxRows={4}
                                name='legalAddress'
                                value={values.legalAddress}
                                onChange={handleChange}
                                id="standard-basic"
                                label="Юридический адрес"
                                variant="standard"
                                helperText="Укажите юридический адресс отчитывающейся организации"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                type='email'
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                id="standard-basic"
                                label="Электронная почта"
                                variant="standard"
                                helperText='Укажите электронную поту отчитывающейся организации'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default React.memo(ReportingOrganization);