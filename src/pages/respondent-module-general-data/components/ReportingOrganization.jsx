// *********************************************************************************************************************
// Компонент с данными отчитывающейся организации
// *********************************************************************************************************************


import React, {useEffect} from "react";

// MUI
import {DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {Box, Grid, TextField, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

// Пользовательские хуки
import useInput from "../../../global-components/hooks/useInput";
import useInputDate from "../../../global-components/hooks/useInputDate";

// Компонент локализации даты
import {ru} from "date-fns/locale";


const ReportingOrganization = props => {

    // Создаем состояния для полей
    const year = useInputDate(new Date());
    const nameReportingOrganization = useInput('', {isEmpty: true});
    const postalAddress = useInput('', {isEmpty: true});
    const legalAddress = useInput('', {isEmpty: true});
    const email = useInput('', {isEmpty: true, isEmail: true});

    // Обновление стейта родительского компонента
    useEffect(() => {
        props.setField.current = {
            year: year.value,
            nameReportingOrganization: nameReportingOrganization.value,
            postalAddress: postalAddress.value,
            legalAddress: legalAddress.value,
            email: email.value
        }
    }, [props, email.value, legalAddress.value, nameReportingOrganization.value, postalAddress.value, year.value]);

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
                                    value={year.value}
                                    onChange={(newValue) => {
                                        year.onChange(newValue)
                                    }}
                                    onBlur={year.onBlur}
                                    renderInput={(params) => <TextField {...params} helperText={null}/>}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                error={(nameReportingOrganization.isDirty && nameReportingOrganization.isEmpty)}
                                multiline
                                maxRows={4}
                                name='nameReportingOrganization'
                                value={nameReportingOrganization.value}
                                onChange={nameReportingOrganization.onChange}
                                onBlur={e => nameReportingOrganization.onBlur(e)}
                                id="name-reporting-organization"
                                label="Наименование отчитывающейся организации"
                                variant="standard"
                                helperText={(nameReportingOrganization.isDirty && nameReportingOrganization.isEmpty) &&
                                    <Typography variant="span" style={{color: 'red'}}>Поле не должно быть
                                        пустым</Typography>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                error={(postalAddress.isDirty && postalAddress.isEmpty)}
                                multiline
                                maxRows={4}
                                name='postalAddress'
                                value={postalAddress.value}
                                onChange={postalAddress.onChange}
                                onBlur={e => postalAddress.onBlur(e)}
                                id="postal-address"
                                label="Почтовый адресс"
                                variant="standard"
                                helperText={(postalAddress.isDirty && postalAddress.isEmpty) &&
                                    <Typography variant="span" style={{color: 'red'}}>Поле не должно быть
                                        пустым</Typography>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                error={(legalAddress.isDirty && legalAddress.isEmpty)}
                                multiline
                                maxRows={4}
                                name='legalAddress'
                                value={legalAddress.value}
                                onChange={legalAddress.onChange}
                                onBlur={legalAddress.onBlur}
                                id="legal-address"
                                label="Юридический адрес"
                                variant="standard"
                                helperText={(legalAddress.isDirty && legalAddress.isEmpty) &&
                                    <Typography variant="span" style={{color: 'red'}}>Поле не должно быть
                                        пустым</Typography>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                error={(email.isDirty && email.isEmpty) || (email.isDirty && email.emailError)}
                                type="email"
                                name="email"
                                value={email.value}
                                onChange={email.onChange}
                                onBlur={email.onBlur}
                                id="email"
                                label="Электронная почта"
                                variant="standard"
                            />
                            {(email.isDirty && email.isEmpty) &&
                                <Typography variant="span" style={{color: 'red', fontSize: '14px'}}>Поле не должно быть
                                    пустым</Typography>}
                            {(email.isDirty && email.emailError) &&
                                <Typography variant="span" style={{color: 'red', fontSize: '14px'}}>Неккоректная запись
                                    электронной почты</Typography>}
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default React.memo(ReportingOrganization);