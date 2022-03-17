// ***********************************************************
// Компонент формы для создания отчета по учёту качества воды
// ***********************************************************

import React, {useMemo} from "react";

// Пользовательские хуки
import useForm from "../../../../global-components/hooks/useForm";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// MUI
import {Box, Container, Grid, MenuItem, Stack, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker from "@mui/lab/DateRangePicker";
import Paper from "@mui/material/Paper";

// Дополнительные модули
import {ru} from "date-fns/locale";

// Контекст
import WaterManagementSiteContext from "../../../../global-components/components/context/WaterManagementSiteContext";

// Компоненты
import WaterManagementSite from "../../../../global-components/components/WaterManagementSite";
import useUser from "../../../../global-components/hooks/useUser";


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
// (конец) Блок констант для селектов


const FormAddReportWaterQualityAccounting = () => {

    // Получаем данные из личного кабинета пользователя через API
    const {user} = useUser();

    // Создаем объект с полями для передачи в пользовательский хук заполнения полей формы
    const inputs = {
        structuralDivision: '',
        subject: subjects[0].value,
        number: '',
        period: [null, null],
        nameOrganization: user.jobTitle,
        inn: '',
        kpp: '',
        postalAddressOrganization: '',
        organizationalLegalFormOrganization: '',
        waterManagementSite: '',
        detailsDocumentFence: '',
        nameLaboratory: '',
        numberCertificateAccreditationCenter: '',
        validityPeriodCenterAccreditationCertificate: ''
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
                <HeadBox>Сведения по учёту качества воды</HeadBox>
                <Box p={4}>
                    <Container>
                        <Stack direction='row' spacing={2}>
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
                        </Stack>
                    </Container>
                    <Container>
                        <Grid container spacing={2} pt={2}>
                            <Grid item xs={12} md={4} xl={4}>
                                <TextField
                                    fullWidth
                                    disabled
                                    name='number'
                                    value={values.number}
                                    id="input-number"
                                    label="Номер"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid item xs={12} md={8} xl={8}>
                                <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                                    <DateRangePicker
                                        startText="от"
                                        endText="до"
                                        value={values.period}
                                        onChange={(event) => {
                                            handleInputDate(event, 'period')
                                        }}
                                        mask="__.__.____"
                                        renderInput={(startProps, endProps) => (
                                            <React.Fragment>
                                                <TextField {...startProps} />
                                                <Box sx={{mx: 2}}> период </Box>
                                                <TextField {...endProps} />
                                            </React.Fragment>
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <Grid container spacing={2} pt={2}>
                            <Grid item xs={8} md={4} xl={4}>
                                <TextField
                                    fullWidth
                                    disabled
                                    name='nameOrganization'
                                    id="input-name-organization"
                                    value={inputs.nameOrganization}
                                    label="Наименование организации"
                                    variant="standard" helperText='Выберите из списка свою организацию'
                                />
                            </Grid>
                            <Grid item xs={12} md={3} xl={3}>
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
                            <Grid item xs={12} md={3} xl={3}>
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
                        </Grid>
                    </Container>
                    <Container>
                        <Grid container pt={2}>
                            <Grid item xs={12} md={12} xl={12}>
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
                            <Grid item xs={12} md={12} xl={12}>
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
                            <WaterManagementSiteContext.Provider
                                value={formReportAddMemo}
                            >
                                <WaterManagementSite/>
                            </WaterManagementSiteContext.Provider>
                        </Grid>
                        <Grid container pt={2}>
                            <Grid item xs={12} md={12} xl={12}>
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
                            <Grid item xs={12} md={12} xl={12} pt={2}>
                                <TextField
                                    fullWidth
                                    name='nameLaboratory'
                                    value={values.nameLaboratory}
                                    onChange={handleChange}
                                    id="input-name-laboratory"
                                    label="Наименование лаборатории"
                                    variant="standard"
                                    helperText='Введите наименование лаборатории'
                                />
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <Paper elevation={3} sx={{marginTop: 2}}>
                            <HeadBox>Реквизиты аттестата аккредитации лаборатории (центра)</HeadBox>
                            <Box p={4}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField
                                            fullWidth
                                            name='numberCertificateAccreditationCenter'
                                            value={values.numberCertificateAccreditationCenter}
                                            onChange={handleChange}
                                            id="input-number-certificate-accreditation-center"
                                            label="№"
                                            variant="standard"
                                            helperText='Введите номер аттестата аккредитации лаборатории'
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField
                                            fullWidth
                                            name='validityPeriodCenterAccreditationCertificate'
                                            value={values.validityPeriodCenterAccreditationCertificate}
                                            onChange={handleChange}
                                            id="input-validity-period-center-accreditation-certificate"
                                            label="Срок действия до"
                                            variant="standard"
                                            helperText='Введите срок до окончания аттестата аккредитации лаборатории'
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                        </Paper>
                    </Container>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default React.memo(FormAddReportWaterQualityAccounting);