// *********************************************************************************************************************
// Компонент с данными документов отчитывающейся организации
// *********************************************************************************************************************


import React, {useEffect} from "react";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Grid, Stack, TextField} from "@mui/material";

// Пользовательские хуки
import useForm from "../../../global-components/hooks/useForm";

// Компоненты
import AddOkved from "./AddOkved";
import AddOkato from "./AddOkato";


// Дефолтные input передаваемые в пользовательский хук
const field = {
    okpo: '',
    okved: '',
    guiv: '',
    inn: '',
    okato: ''
};


const CodeReportingOrganization = props => {

    // Хук для сохранения данных из input
    const {values, handleChange} = useForm(field);

    // Обновление родительского стейта
    useEffect(() => {
        props.setField(values)
    }, [props, values]);

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                            <TextField
                                fullWidth
                                name='okpo'
                                value={values.okpo}
                                onChange={handleChange}
                                id="okpo"
                                label="Код отчитывающейся организации"
                                variant="standard"
                                helperText='Укажите код по ОКПО отчитывающейся организации'
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Stack spacing={2} direction='row'>
                                <TextField
                                    fullWidth
                                    multiline
                                    disabled
                                    maxRows={4}
                                    name='okved'
                                    value={values.okved}
                                    onChange={handleChange}
                                    id="okved"
                                    label="ОКВЭД"
                                    variant="standard"
                                    helperText='Выберите из списка ОКВЭД'
                                />
                                <AddOkved/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                multiline
                                maxRows={4}
                                name='guiv'
                                value={values.guiv}
                                onChange={handleChange}
                                id="guiv"
                                label="ГУИВ"
                                variant="standard"
                                helperText="Укажите код ГУИВ"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                multiline
                                maxRows={4}
                                name='inn'
                                value={values.inn}
                                onChange={handleChange}
                                id="inn"
                                label="ИНН"
                                variant="standard"
                                helperText="Укажите номер ИНН"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Stack spacing={2} direction='row'>
                                <TextField
                                    fullWidth
                                    multiline
                                    disabled
                                    maxRows={4}
                                    name='okato'
                                    value={values.okato}
                                    onChange={handleChange}
                                    id="okato"
                                    label="ОКАТО"
                                    variant="standard"
                                    helperText='Выберите из списка ОКАТО'
                                />
                                <AddOkato/>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default React.memo(CodeReportingOrganization);