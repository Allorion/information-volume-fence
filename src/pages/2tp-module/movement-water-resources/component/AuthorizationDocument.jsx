// *********************************************************************************************************************
// Компонент с выбором разрешающего документа или поставщика
// *********************************************************************************************************************


import React, {useEffect} from "react";

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

const AuthorizationDocument = (props) => {

    // Используя пользовательский хук создаем стейты для записи данных из полей ввода
    const typeDocument = useInput(props.authorizationDocumentField.current.typeDocument);
    const numberDocument = useInput(props.authorizationDocumentField.current.numberDocument);
    const dateDocument = useInputDate(props.authorizationDocumentField.current.dateDocument);
    const codeGuivProvider = useInput(props.authorizationDocumentField.current.codeGuivProvider, {isSymbolGuiv: true});

    // При создании новой формы обновляем данные стейтов
    useEffect(() => {
        typeDocument.setValue(props.authorizationDocumentField.current.typeDocument);
        numberDocument.setValue(props.authorizationDocumentField.current.numberDocument);
        dateDocument.onChange(props.authorizationDocumentField.current.dateDocument);
        codeGuivProvider.setValue(props.authorizationDocumentField.current.codeGuivProvider);
        props.authorizationDocumentFlag.current = false;
    }, [props.authorizationDocumentFlag.current]);

    // Записываем данные в родительский компонент
    useEffect(() =>{
        props.authorizationDocumentFieldGlobal.typeDocument = typeDocument.value
        props.authorizationDocumentFieldGlobal.numberDocument = numberDocument.value
        props.authorizationDocumentFieldGlobal.dateDocument = dateDocument.value
        props.authorizationDocumentFieldGlobal.codeGuivProvider = codeGuivProvider.value
    }, [codeGuivProvider.value, dateDocument.value, numberDocument.value, typeDocument.value]);

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
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
                                        label="[1] Тип документа"
                                        name='documentType'
                                        helperText="Выберите вид документа"
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
                                        label="[2] Номер документа"
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
                                            label="[3] Дата"
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
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
                    <Paper elevation={3}>
                        <HeadBox>Поставщик</HeadBox>
                        <Box p={4}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <TextField
                                        sx={{paddingBottom: '15px'}}
                                        disabled={typeDocument.value !== 'null'}
                                        error={(codeGuivProvider.isDirty && codeGuivProvider.checkNumberSymbolGuiv)}
                                        onInput={(e) => {
                                            e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 6)
                                        }}
                                        type='number'
                                        fullWidth
                                        name='codeGuivProvider'
                                        id="code-guiv-provider"
                                        label="[7] Код поставщика по ГУИВ"
                                        variant="standard"
                                        value={codeGuivProvider.value}
                                        onChange={codeGuivProvider.onChange}
                                        onBlur={e => codeGuivProvider.onBlur(e)}
                                    />
                                    {(codeGuivProvider.isDirty && codeGuivProvider.checkNumberSymbolGuiv) &&
                                        <Typography variant="span" style={{color: 'red'}}>Код ГУИВ должен быть 6
                                            цифр</Typography>}
                                </Grid>
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default AuthorizationDocument;