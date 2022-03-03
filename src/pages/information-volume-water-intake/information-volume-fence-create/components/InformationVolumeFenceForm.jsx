import React, {useEffect, useState} from 'react';

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// MUI
import {Box, Container, Grid, MenuItem, Stack, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import {LocalizationProvider} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DateRangePicker from "@mui/lab/DateRangePicker";

// Прочие импорты
import {ru} from "date-fns/locale";

// Пользовательские хуки
import useFormLate from "../../../../global-components/hooks/useFormLate";
import useLoading from "../../../../global-components/hooks/useLoading";
import WaterManagementSiteContext from "../../../../global-components/components/context/WaterManagementSiteContext";
import WaterManagementSite from "../../../../global-components/components/WaterManagementSite2";


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


export default function InformationVolumeFenceForm() {

    // Создаем объект с полями для передачи в пользовательский хук заполнения полей формы
    const [values, setValues] = useState(
        {
            structuralDivision: '',
            subject: subjects[0].value,
            number: '',
            period: [null, null],
            nameOrganization: '',
            inn: '',
            kpp: '',
            postalAddressOrganization: '',
            organizationalLegalFormOrganization: '',
            waterManagementSite: '',
            detailsDocumentFence: '',
            brandWaterAccountingDevices: '',
            dateLastVerification: '',
            frequencyVerification: '',
        }
    );

    // Импортируем в компонент пользовательский хуки
    const {
        handleChange,
        handleInputSelect,
        handleInputDate
    } = useFormLate(setValues);

    const {loading, handleLoading} = useLoading();

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Сведения по объему забора</HeadBox>
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
                                onChange={handleInputSelect}
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
                                    value={values.nameOrganization}
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
                                value={[values, handleInputSelect]}
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
                                    name='brandWaterAccountingDevices'
                                    value={values.brandWaterAccountingDevices}
                                    onChange={handleChange}
                                    id="input-brand-water-accounting-devices"
                                    label="Марка приборов водоучета"
                                    variant="standard"
                                    helperText='Введите марку приборов водоучета'
                                />
                            </Grid>
                            <Grid item xs={12} md={12} xl={12} pt={2}>
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
                            <Grid item xs={12} md={12} xl={12}>
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
                    </Container>
                </Box>
            </Paper>
        </React.Fragment>
    );
}