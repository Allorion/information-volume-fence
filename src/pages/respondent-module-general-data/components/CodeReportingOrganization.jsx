// *********************************************************************************************************************
// Компонент с данными документов отчитывающейся организации
// *********************************************************************************************************************


import React, {useEffect} from "react";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Grid, Stack, TextField, Typography} from "@mui/material";

// Пользовательские хуки
import useInput from "../../../global-components/hooks/useInput";

// Компоненты
import AddOkved from "./AddOkved";
import AddOkato from "./AddOkato";


const CodeReportingOrganization = props => {

    // Хук для сохранения данных из input
    const okpo = useInput('', {isEmpty: true, isSymbolOkpo: true});
    const okved = useInput('', {isEmpty: true});
    const guiv = useInput('', {isEmpty: true, isSymbolGuiv: true});
    const inn = useInput('', {isEmpty: true, isSymbolInn: true});
    const okato = useInput('', {isEmpty: true});

    // Обновление родительского стейта
    useEffect(() => {
        props.setField.current = {
            okpo: okpo.value,
            okved: okved.value,
            guiv: guiv.value,
            inn: inn.value,
            okato: okato.value
        }
    }, [guiv.value, inn.value, okato.value, okpo.value, okved.value, props]);

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                            <Stack>
                                <TextField
                                    fullWidth
                                    error={(okpo.isDirty && okpo.isEmpty) || (okpo.isDirty && okpo.checkNumberSymbolOkpo)}
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 14)
                                    }}
                                    type='number'
                                    name='okpo'
                                    value={okpo.value}
                                    onChange={okpo.onChange}
                                    onBlur={(e) => okpo.onBlur(e)}
                                    id="okpo"
                                    label="Код отчитывающейся организации"
                                    variant="standard"
                                />
                                {(okpo.isDirty && okpo.isEmpty) &&
                                    <Typography variant="span" style={{color: 'red'}}>Поле не должно быть
                                        пустым</Typography>}
                                {(okpo.isDirty && okpo.checkNumberSymbolOkpo) &&
                                    <Typography variant="span" style={{color: 'red'}}>Код ОКПО должен быть 8, 10 или 14
                                        цифр</Typography>}
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Stack spacing={2} direction='row'>
                                <TextField
                                    fullWidth
                                    multiline
                                    disabled
                                    maxRows={4}
                                    name='okved'
                                    id="okved"
                                    label="ОКВЭД"
                                    variant="standard"
                                    helperText='Выберите из списка ОКВЭД'
                                />
                                <AddOkved/>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Stack>
                                <TextField
                                    fullWidth
                                    error={(guiv.isDirty && guiv.isEmpty) || (guiv.isDirty && guiv.checkNumberSymbolGuiv)}
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6)
                                    }}
                                    type='number'
                                    name='guiv'
                                    value={guiv.value}
                                    onChange={guiv.onChange}
                                    onBlur={(e) => guiv.onBlur(e)}
                                    id="guiv"
                                    label="ГУИВ"
                                    variant="standard"
                                />
                                {(guiv.isDirty && guiv.isEmpty) &&
                                    <Typography variant="span" style={{color: 'red'}}>Поле не должно быть
                                        пустым</Typography>}
                                {(guiv.isDirty && guiv.checkNumberSymbolGuiv) &&
                                    <Typography variant="span" style={{color: 'red'}}>Код ГУИВ должен быть 6
                                        цифр</Typography>}
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Stack>
                                <TextField
                                    maxLength={12}
                                    fullWidth
                                    error={(inn.isDirty && inn.isEmpty) || (inn.isDirty && inn.checkNumberSymbolInn)}
                                    onInput={(e) => {
                                        e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 12)
                                    }}
                                    type='number'
                                    name='inn'
                                    value={inn.value}
                                    onChange={inn.onChange}
                                    onBlur={(e) => inn.onBlur(e)}
                                    id="inn"
                                    label="ИНН"
                                    variant="standard"
                                />
                                {(inn.isDirty && inn.isEmpty) &&
                                    <Typography variant="span" style={{color: 'red'}}>Поле не должно быть
                                        пустым</Typography>}
                                {(inn.isDirty && inn.checkNumberSymbolInn) &&
                                    <Typography variant="span" style={{color: 'red'}}>Код ИНН должен быть 10 или 12
                                        цифр</Typography>}
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Stack spacing={2} direction='row'>
                                <TextField
                                    fullWidth
                                    multiline
                                    disabled
                                    maxRows={4}
                                    name='okato'
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