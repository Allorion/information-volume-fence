// ***********************************************************
// Компонент формы для создания отчета по забору и сбросу воды
// ***********************************************************

import React, {useMemo} from "react";

// Пользовательские хуки
import useForm from "../hooks/useForm";

// Стили
import HeadBox from "../style/HeadBox";

// MUI
import {Box, Grid, MenuItem, Stack, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider, MobileDatePicker} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Paper from "@mui/material/Paper";

// Дополнительные модули
import {ru} from "date-fns/locale";

// Контекст
import WaterManagementSiteContext from "./context/WaterManagementSiteContext";

// Компоненты
import WaterManagementSite from "./WaterManagementSite";
import useUser from "../hooks/useUser";
import AddDetailReportSelects from "./selects/AddDetailReportSelects";


// Блок констант для селектов
const subjects = [
    {
        value: 'Юр.лицо',
        label: 'Юр.лицо',
    },
    {
        value: 'Физ.лицо',
        label: 'Физ.лицо',
    },
    {
        value: 'ИП',
        label: 'ИП',
    },
];

const {listQuartersYear} = AddDetailReportSelects();
// (конец) Блок констант для селектов


const FormReportAdd = () => {

    // Получаем данные из личного кабинета пользователя через API
    const {user} = useUser();

    // Создаем объект с полями для передачи в пользовательский хук заполнения полей формы
    const inputs = {
        structuralDivision: '',
        subject: subjects[0].value,
        dateDispatch: new Date(),
        quartersYear: '',
        nameOrganization: user.jobTitle,
        inn: '',
        kpp: '',
        postalAddressOrganization: '',
        organizationalLegalFormOrganization: '',
        waterManagementSite: '',
        detailsDocumentFence: '',
        brandWaterAccountingDevices: '',
        dateLastVerification: '',
        frequencyVerification: '',
    };

    // Импортируем в компонент пользовательский хук
    const {
        values,
        handleChange,
        handleInputDate
    } = useForm(inputs);

    // Создаем передачу данных в компонент с выбором водного объекта только по изменению поля с объектом
    const formReportAddMemo = useMemo(() => {
        return [values, handleChange];
    }, [values.waterManagementSite]);

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Создание отчета по объему забора</HeadBox>
                <Box p={4}>
                    <Grid container p={3} spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                name='structuralDivision'
                                value={values.structuralDivision}
                                onChange={handleChange}
                                id="select-structural-division"
                                label="Структурное подразделение"
                                helperText="Структурное подразделение"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                id="select-subject"
                                select
                                label="Субъект"
                                name='subject'
                                value={values.subject}
                                onChange={handleChange}
                                helperText="Выберите субъект правоотношения"
                                variant="standard"
                            >
                                {subjects.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                                fullWidth
                                disabled
                                name='nameOrganization'
                                id="input-name-organization"
                                value={inputs.nameOrganization}
                                label="Наименование организации"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                                fullWidth
                                disabled
                                name='inn'
                                value={values.inn}
                                id="input-inn"
                                label="ИНН"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <TextField
                                fullWidth
                                disabled
                                name='kpp'
                                value={values.kpp}
                                id="input-kpp"
                                label="КПП"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} mt={1} textAlign='center'>
                            <LocalizationProvider
                                dateAdapter={AdapterDateFns}
                                locale={ru}
                            >
                                <MobileDatePicker
                                    label="Дата создания отчета"
                                    value={values.dateDispatch}
                                    onChange={(newValue) => {
                                        handleInputDate(newValue, 'dateDispatch');
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} helperText="Укажите дату создания отчета" />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>
                            <TextField
                                fullWidth
                                id="select-quarters-year"
                                select
                                label="Квартал года"
                                name='quartersYear'
                                value={values.quartersYear}
                                onChange={handleChange}
                                helperText="Выберите квартал года"
                                variant="standard"
                            >
                                {listQuartersYear.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                name='postalAddressOrganization'
                                value={values.postalAddressOrganization}
                                onChange={handleChange}
                                id="input-postal-address-organization"
                                label="Почтовый адрес организации"
                                variant="standard"
                                helperText='Введите почтовый адрес организации'
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                name='organizationalLegalFormOrganization'
                                value={values.organizationalLegalFormOrganization}
                                onChange={handleChange}
                                id="input-organizational-legal-form-organization"
                                label="Организационно-правовая форма организации"
                                variant="standard"
                                helperText='Введите организационно-правовую форму организации'
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <WaterManagementSiteContext.Provider
                                value={formReportAddMemo}
                            >
                                <WaterManagementSite/>
                            </WaterManagementSiteContext.Provider>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <TextField
                                fullWidth
                                disabled
                                name='detailsDocumentFence'
                                value={values.detailsDocumentFence}
                                onChange={handleChange}
                                id="input-details-document-fence"
                                label="Реквизиты документа на забор (изъятие водных ресурсов)"
                                variant="standard"
                                helperText='Выберите реквизиты документа на забор (изъятие водных ресурсов)'
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} pt={2}>
                            <TextField
                                fullWidth
                                name='brandWaterAccountingDevices'
                                value={values.brandWaterAccountingDevices}
                                onChange={handleChange}
                                id="input-brand-water-accounting-devices"
                                label="Марка приборов водоучета"
                                variant="standard"
                                helperText='Введите марку приборов водоучета'
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} pt={2}>
                            <TextField
                                fullWidth
                                name='dateLastVerification'
                                value={values.dateLastVerification}
                                onChange={handleChange}
                                id="input-date-last-verification"
                                label="Дата последней поверки"
                                variant="standard"
                                helperText='Введите дату последней поверки'
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} pt={2}>
                            <TextField
                                fullWidth
                                name='frequencyVerification'
                                value={values.frequencyVerification}
                                onChange={handleChange}
                                id="input-frequency-verification"
                                label="Периодичность поверки"
                                variant="standard"
                                helperText='Введите периодичность поверки'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default React.memo(FormReportAdd);