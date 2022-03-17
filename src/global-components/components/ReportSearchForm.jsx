// *********************************************************
// Компонент формы для поиска отчета по забору и сбросу воды
// *********************************************************

import React, {useMemo} from "react";

// MUI
import {Box, Button, Grid, Stack, TextField, Typography} from "@mui/material";
import {LocalizationProvider} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker from "@mui/lab/DateRangePicker";

// Пользовательские хуки
import useForm from '../../global-components/hooks/useForm';

// Контекст
import WaterManagementSiteContext from "../../global-components/components/context/WaterManagementSiteContext";

// Сторонние модули
import {ru} from "date-fns/locale";

// Компоненты
import WaterManagementSite from "../../global-components/components/WaterManagementSite";


const ReportSearchForm = () => {

    // Указывем поля формы для передачи в кастомный хук формы
    const parentsValues = {
        division: '',
        waterUserDirectory: '',
        waterUserNames: '',
        permitDocument: '',
        waterObject: '',
        waterManagementSite: '',
        reportDate: [null, null],
        periodYear: '',
        periodQuarter: ''
    };

    // Добавляем кастомный хук формы
    const {values, handleChange, handleInputDate} = useForm(parentsValues);

    // Создаем передачу данных в компонент с выбором водного объекта только по изменению поля с объектом
    const waterManagementSiteMemo = useMemo(() => {
        return [values, handleChange];
    }, [values.waterManagementSite]);

    return (
        <React.Fragment>
            <Grid container p={4} spacing={2}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField
                        fullWidth
                        disabled
                        id="input-division"
                        label="Структурное подразделение"
                        variant="standard"
                        helperText='Структурное подразделение выбирается автоматически в
                                соответствии с данными аккаунта пользователя'
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>
                    <TextField
                        fullWidth
                        disabled
                        id="input-water-user-directory"
                        label="Водопользователь (по справочнику)"
                        variant="standard"
                        helperText='Выберите водопользователя из справочника'
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>
                    <TextField
                        fullWidth
                        id="input-water-user-names"
                        name='waterUserNames'
                        value={values.waterUserNames}
                        onChange={handleChange}
                        label="Водопользователь (по части наименования)"
                        variant="standard"
                        helperText='Выберите водопользователя из справочника'
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                    <TextField
                        fullWidth
                        disabled
                        id="input-permit-document"
                        label="Разрешительный документ"
                        variant="standard"
                        helperText='Выберите разрешительный документ'
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                    <TextField
                        fullWidth
                        disabled
                        id="input-water-object"
                        label="Водный объект"
                        variant="standard"
                        helperText='Укажите водный объект'
                    />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <WaterManagementSiteContext.Provider
                        value={waterManagementSiteMemo}
                    >
                        <WaterManagementSite/>
                    </WaterManagementSiteContext.Provider>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Stack spacing={1}>
                        <Typography
                            variant='span'
                            sx={{
                                fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                                fontWeight: 400,
                                fontSize: '1rem'
                            }}
                        >
                            Дата отчета
                        </Typography>
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            locale={ru}
                        >
                            <DateRangePicker
                                startText="от"
                                endText="до"
                                value={values.reportDate}
                                onChange={(event) => {
                                    handleInputDate(event, 'reportDate')
                                }}
                                mask="__.__.____"
                                renderInput={(startProps, endProps) => (
                                    <React.Fragment>
                                        <TextField {...startProps} />
                                        <Box sx={{
                                            mx: 2,
                                            fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                                            fontWeight: 400,
                                            fontSize: '1rem'
                                        }}> период </Box>
                                        <TextField {...endProps} />
                                    </React.Fragment>
                                )}
                            />
                        </LocalizationProvider>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>

                    <TextField
                        fullWidth
                        type='number'
                        id="input-period-year"
                        name='periodYear'
                        value={values.periodYear}
                        onChange={handleChange}
                        label="Период (Год)"
                        variant="standard"
                        helperText='Выберите год за который требуется отчет'
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>
                    <TextField
                        fullWidth
                        type='number'
                        id="input-period-quarter"
                        name='periodQuarter'
                        value={values.periodQuarter}
                        onChange={handleChange}
                        label="Период (Квартал)"
                        variant="standard"
                        helperText='Выберите квартал за который требуется отчет'
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" color="info">Поиск</Button>
                    </Stack>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default ReportSearchForm;