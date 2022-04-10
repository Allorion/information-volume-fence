// *********************************************************************************************************************
// Компонент с выбором разрешающего документа или поставщика
// *********************************************************************************************************************


import React, {useContext, useEffect} from "react";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Grid, MenuItem, TextField, Typography} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {LocalizationProvider, MobileDatePicker} from "@mui/lab";

// Пользовательские хуки
import useInput from "../../../../global-components/hooks/useInput";
import useInputDate from "../../../../global-components/hooks/useInputDate";

// Доп. модули
import {ru} from "date-fns/locale";
import MovementWaterResourcesContext from "../../context/MovementWaterResourcesContext";


const AuthorizationDocument = (props) => {

    const {authorizationDocumentField} = useContext(MovementWaterResourcesContext);

    // Стейты для сохранения данных из полей формы
    const typeDocument = useInput(authorizationDocumentField.current.typeDocument);
    const numberDocument = useInput(authorizationDocumentField.current.numberDocument);
    const dateDocument = useInputDate(authorizationDocumentField.current.dateDocument);
    const codeGuivProvider = useInput(authorizationDocumentField.current.codeGuivProvider, {isSymbolGuiv: true});

    // Записываем данные в родительский компонент
    useEffect(() =>{
        authorizationDocumentField.current = {
            typeDocument: typeDocument.value,
            numberDocument: numberDocument.value,
            dateDocument: dateDocument.value,
            codeGuivProvider: codeGuivProvider.value
        };
    }, [authorizationDocumentField, codeGuivProvider, dateDocument, numberDocument, typeDocument]);

    
    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                    <Paper elevation={3}>
                        <HeadBox>Разрешающий документ</HeadBox>
                        <Box p={4}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                                    <TextField
                                        fullWidth
                                        disabled={codeGuivProvider.value !== ''}
                                        id="select-document-type"
                                        select
                                        label="Тип документа"
                                        name='documentType'
                                        helperText="Выберите цель водопользования"
                                        variant="standard"
                                        value={typeDocument.value}
                                        onChange={e => typeDocument.onChange(e)}
                                    >
                                        <MenuItem value='null'>
                                            <em>-</em>
                                        </MenuItem>
                                        <MenuItem value='contract'>
                                            Д - Договор
                                        </MenuItem>
                                        <MenuItem value='license'>
                                            Л - Лицензия
                                        </MenuItem>
                                        <MenuItem value='decision'>
                                            Р - Решение
                                        </MenuItem>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <TextField
                                        disabled={typeDocument.value === 'null'}
                                        fullWidth
                                        multiline
                                        maxRows={4}
                                        name='numberDocument'
                                        id="number-document"
                                        label="Номер документа"
                                        variant="standard"
                                        value={numberDocument.value}
                                        onChange={numberDocument.onChange}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                        locale={ru}
                                    >
                                        <MobileDatePicker
                                            disabled={typeDocument.value === 'null'}
                                            label="Дата"
                                            value={typeDocument.value === 'null' ? null : dateDocument.value}
                                            onChange={(newValue) => {
                                                dateDocument.onChange(newValue);
                                            }}
                                            renderInput={(params) => (
                                                <TextField {...params} helperText=""/>
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
                {/*<Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>*/}
                {/*    <Paper elevation={3}>*/}
                {/*        <HeadBox>Поставщик</HeadBox>*/}
                {/*        <Box p={4}>*/}
                {/*            <Grid container spacing={2}>*/}
                {/*                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>*/}
                {/*                    <TextField*/}
                {/*                        disabled={typeDocument.value !== 'null'}*/}
                {/*                        error={(codeGuivProvider.isDirty && codeGuivProvider.checkNumberSymbolGuiv)}*/}
                {/*                        onInput={(e) => {*/}
                {/*                            e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6)*/}
                {/*                        }}*/}
                {/*                        type='number'*/}
                {/*                        fullWidth*/}
                {/*                        name='codeGuivProvider'*/}
                {/*                        id="code-guiv-provider"*/}
                {/*                        label="Код поставщика по ГУИВ"*/}
                {/*                        variant="standard"*/}
                {/*                        value={codeGuivProvider.value}*/}
                {/*                        onChange={codeGuivProvider.onChange}*/}
                {/*                        onBlur={e => codeGuivProvider.onBlur(e)}*/}
                {/*                    />*/}
                {/*                    {(codeGuivProvider.isDirty && codeGuivProvider.checkNumberSymbolGuiv) &&*/}
                {/*                        <Typography variant="span" style={{color: 'red'}}>Код ГУИВ должен быть 6*/}
                {/*                            цифр</Typography>}*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </Box>*/}
                {/*    </Paper>*/}
                {/*</Grid>*/}
            </Grid>
        </React.Fragment>
    );
};

export default AuthorizationDocument;