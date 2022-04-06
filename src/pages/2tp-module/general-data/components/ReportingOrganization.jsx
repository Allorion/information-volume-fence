// *********************************************************************************************************************
// Компонент с данными отчитывающейся организации
// *********************************************************************************************************************


import React, {useContext, useEffect} from "react";

// MUI
import {Box, Grid, Stack, TextField, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

// Пользовательские хуки
import useInput from "../../../../global-components/hooks/useInput";

// Компоненты
import AddOkved from "./AddOkved";
import AddOkato from "./AddOkato";
import HeadBox from "../../../../global-components/style/HeadBox";
import GeneralDataContext from "../../context/GeneralDataContext";


const ReportingOrganization = () => {

    const [organizationField, personProvidingInformationField, dateReportingField] = useContext(GeneralDataContext);

    // Создаем состояния для полей
    const nameReportingOrganization = useInput(organizationField.current.nameReportingOrganization, {isEmpty: true});
    const postalAddress = useInput(organizationField.current.postalAddress, {isEmpty: true});
    const legalAddress = useInput(organizationField.current.legalAddress, {isEmpty: true});

    const okpo = useInput(organizationField.current.okpo, {isEmpty: true, isSymbolOkpo: true});
    const okved = useInput(organizationField.current.okved, {isEmpty: true});
    const guiv = useInput(organizationField.current.guiv, {isEmpty: true, isSymbolGuiv: true});
    const inn = useInput(organizationField.current.inn, {isEmpty: true, isSymbolInn: true});
    const okato = useInput(organizationField.current.okato, {isEmpty: true});

    // Обновление стейта родительского компонента
    useEffect(() => {
        organizationField.current = {
            nameReportingOrganization: nameReportingOrganization.value,
            postalAddress: postalAddress.value,
            legalAddress: legalAddress.value,
            okpo: okpo.value,
            okved: okved.value,
            guiv: guiv.value,
            inn: inn.value,
            okato: okato.value
        }
    }, [guiv.value, inn.value, legalAddress.value, nameReportingOrganization.value, okato.value, okpo.value,
        okved.value, postalAddress.value, organizationField]);

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Данные организации предоставляющей отчет</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default ReportingOrganization;


