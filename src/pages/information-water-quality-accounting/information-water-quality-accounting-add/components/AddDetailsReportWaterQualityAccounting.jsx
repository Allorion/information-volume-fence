// ***************************************************************
// Компонент с добавлением деталей к отчету по учету качества воды
// ***************************************************************


import React, {useContext, useMemo, useState} from 'react';

// MUI
import {Box, Button, Container, Dialog, Grid, MenuItem, Snackbar, Stack, TextField, Typography} from "@mui/material";
import HeadBox from "../../../../global-components/style/HeadBox";
import Paper from "@mui/material/Paper";

// Стили
import Alert from "../../../../global-components/style/Alert";

// Пользовательские хуки
import useModal from "../../../../global-components/hooks/useModal";
import useForm from "../../../../global-components/hooks/useForm";

// Компоненты
import AddDetailReportSelects from "../../../../global-components/components/selects/AddDetailReportSelects";
import ChoosingWaterFeature from "../../../../global-components/components/ChoosingWaterFeature";
import validate
    from "../components/ValidateDetailsReportWaterQualityAccounting";

// Контекст
import AddDetailsReportWaterQualityAccountingContext from "../context/AddDetailsReportWaterQualityAccountingContext";
import ChoosingWaterFeatureContext from "../../../../global-components/components/context/ChoosingWaterFeatureContext";


// Получаем данные из компонента с глобальными select
const {listWaterBodies, listWaterQualityCategories} = AddDetailReportSelects();

const AddDetailsReportWaterQualityAccounting = () => {

    // Блок открытия и закрытия модального окна
    const [open, setOpen] = useState(false);
    const [handleOpen, handleClose] = useModal(setOpen);
    // (конец) Блок открытия и закрытия модального окна

    // Отображение окна с ошибками
    const [openAlert, setOpenAlert] = useState(false);

    // Значения стейта
    const initialState = {
        nameWaterObjectCode: 'Код водного объекта',
        nameWaterObjectName: 'Наименование водного объекта',
        typeWaterObject: listWaterBodies[0],
        waterQualityCategory: listWaterQualityCategories[0],
        waterOutletNumber: '',
        northernLatitudeDegrees: '',
        northernLatitudeMinutes: '',
        northernLatitudeSeconds: '',
        easternLongitudeDegrees: '',
        easternLongitudeMinutes: '',
        easternLongitudeSeconds: '',
        pollutingSubstance: '',
        actualDischargePollutantMgDm3: '',
        actualDischargePollutantKg: '',
        actualDischargePollutantT: '',
        legallyPermissibleMgDm3: '',
        legallyPermissibleKg: '',
        legallyPermissibleT: '',
        limitSetMgDm3: '',
        limitSetKg: '',
        limitSetT: ''
    }

    // Добавляем кастомный хук формы
    const {values, setValues, handleChange} = useForm(initialState);

    // Получение стейта из родительского компонента через контекст
    const [addingWaterQualityAccounting, setAddingWaterQualityAccounting] = useContext(
        AddDetailsReportWaterQualityAccountingContext);

    // Стейт с ошибками
    const [errors, setErrors] = useState({});
    const [textAlert, setTextAlert] = useState([]);

    // Функция рендерит результат только при изменении поля с кодом и названием водного объекта
    const formWaterFeatureSelectionMemo = useMemo(() => {
        return setValues;
    }, [values.nameWaterObjectName, values.nameWaterObjectCode]);

    // Функция для сохранения новых данных в глобальный масив
    function handleAdd() {
        const [errors, textErrors] = validate(values);
        if (Object.keys(errors).length === 0) {
            setAddingWaterQualityAccounting([...addingWaterQualityAccounting, values]);
            handleClose();
            setValues(initialState);
            setErrors({});
        } else {
            setTextAlert(textErrors);
            setOpenAlert(true);
            setErrors(errors);
        }
    }

    return (
        <React.Fragment>
            <Button variant="contained" color="secondary" onClick={handleOpen}>Добавить детали</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="Дополнительные детали сброса воды"
                aria-describedby="Форма для заполнения таблицы с бополнительными деталями при сбросе воды"
                maxWidth="xl"
            >
                <Paper>
                    <HeadBox>Форма добавления сведений</HeadBox>
                    <Box p={2}>
                        <Container>
                            <Stack spacing={2} direction="row">
                                <TextField
                                    error={errors.nameWaterObjectCode}
                                    fullWidth
                                    disabled
                                    id="input-name-water-object"
                                    value={values.nameWaterObjectName + ' / ' + values.nameWaterObjectCode}
                                    label="Наименование водного объекта - водоприемника / код водного объекта"
                                    variant="standard" helperText='Выберите водный источник'/>
                                <ChoosingWaterFeatureContext.Provider value={
                                    formWaterFeatureSelectionMemo
                                }>
                                    <ChoosingWaterFeature/>
                                </ChoosingWaterFeatureContext.Provider>
                            </Stack>
                        </Container>
                        <Container>
                            <Grid item xs={12} md={12} xl={12}>
                                <TextField
                                    fullWidth
                                    id="select-type-water-object"
                                    select
                                    label="Вид водного объекта - водоприемника"
                                    value={values.typeWaterObject}
                                    name='typeWaterObject'
                                    onChange={handleChange}
                                    helperText="Выберите вид водного объекта - водоисточника"
                                    variant="standard"
                                >
                                    {listWaterBodies.map((option, count) => (
                                        <MenuItem key={count + 1} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Container>
                        <Container>
                            <Grid item xs={12} md={12} xl={12}>
                                <TextField
                                    fullWidth
                                    id="select-water-quality-category"
                                    select
                                    label="Категория качества воды"
                                    name='waterQualityCategory'
                                    value={values.waterQualityCategory}
                                    onChange={handleChange}
                                    helperText="Выберите категорию качества воды"
                                    variant="standard"
                                >
                                    {listWaterQualityCategories.map((option, count) => (
                                        <MenuItem key={count + 1} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                        </Container>
                        <Container>
                            <Grid item xs={12} md={12} xl={12}>
                                <TextField
                                    error={errors.waterOutletNumber}
                                    fullWidth
                                    id="input-water-outlet-number"
                                    name='waterOutletNumber'
                                    value={values.waterOutletNumber}
                                    onChange={handleChange}
                                    label="Номер водовыпуска"
                                    variant="standard"
                                    helperText='Введите номер водозабора'/>
                            </Grid>
                        </Container>
                        <Container>
                            <Grid item>
                                <Stack spacing={2} direction="row" sx={{
                                    lineHeight: '40px'
                                }}>
                                    <Typography variant="span" textAlign="center" pt={2} sx={{
                                        color: 'rgba(0, 0, 0, 0.6)',
                                        whiteSpace: 'nowrap'
                                    }}
                                    >
                                        Северная широта
                                    </Typography>
                                    <TextField
                                        error={errors.northernLatitudeDegrees}
                                        id="input-northern-latitude-degrees"
                                        label="Градусы °"
                                        variant="standard"
                                        type="number"
                                        name='northernLatitudeDegrees'
                                        value={values.northernLatitudeDegrees}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        error={errors.northernLatitudeMinutes}
                                        id="input-northern-latitude-minutes"
                                        label="Минуты '"
                                        variant="standard"
                                        type="number"
                                        name='northernLatitudeMinutes'
                                        value={values.northernLatitudeMinutes}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        error={errors.northernLatitudeSeconds}
                                        id="input-northern-latitude-seconds"
                                        label='Секунды "'
                                        variant="standard"
                                        type="number"
                                        name='northernLatitudeSeconds'
                                        value={values.northernLatitudeSeconds}
                                        onChange={handleChange}
                                    />
                                </Stack>
                            </Grid>
                        </Container>
                        <Container>
                            <Grid item>
                                <Stack spacing={2} direction="row" sx={{
                                    lineHeight: '40px'
                                }}>
                                    <Typography variant="span" textAlign="center" pt={2} sx={{
                                        color: 'rgba(0, 0, 0, 0.6)',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        Восточная долгота
                                    </Typography>
                                    <TextField
                                        error={errors.easternLongitudeDegrees}
                                        id="input-eastern-longitude-degrees"
                                        label="Градусы °"
                                        type="number"
                                        variant="standard"
                                        name='easternLongitudeDegrees'
                                        value={values.easternLongitudeDegrees}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        error={errors.easternLongitudeMinutes}
                                        id="input-eastern-longitude-minutes"
                                        label="Минуты '"
                                        type="number"
                                        variant="standard"
                                        name='easternLongitudeMinutes'
                                        value={values.easternLongitudeMinutes}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        error={errors.easternLongitudeSeconds}
                                        id="input-eastern-longitude-seconds"
                                        label='Секунды "'
                                        type="number"
                                        variant="standard"
                                        name='easternLongitudeSeconds'
                                        value={values.easternLongitudeSeconds}
                                        onChange={handleChange}
                                    />
                                </Stack>
                            </Grid>
                        </Container>
                        <Container>
                            <TextField
                                disabled
                                fullWidth
                                id="input-polluting-substance"
                                onChange={handleChange}
                                label="Загрязняющее вещество"
                                variant="standard"
                                helperText='Введите загрязняющее вещество'/>
                        </Container>
                        <Container>
                            <Paper elevation={3} sx={{marginTop: 2}}>
                                <HeadBox>Фактический сброс загрязняющих веществ</HeadBox>
                                <Box p={4}>
                                    <TextField
                                        fullWidth
                                        error={errors.actualDischargePollutantMgDm3}
                                        id="input-actual-discharge-pollutant-mg-dm3"
                                        label='мг/дм3'
                                        type="number"
                                        variant="standard"
                                        name='actualDischargePollutantMgDm3'
                                        value={values.actualDischargePollutantMgDm3}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        error={errors.actualDischargePollutantKg}
                                        id="input-actual-discharge-pollutant-kg"
                                        label='кг'
                                        type="number"
                                        variant="standard"
                                        name='actualDischargePollutantKg'
                                        value={values.actualDischargePollutantKg}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        error={errors.actualDischargePollutantT}
                                        id="input-actual-discharge-pollutant-t"
                                        label='т'
                                        type="number"
                                        variant="standard"
                                        name='actualDischargePollutantT'
                                        value={values.actualDischargePollutantT}
                                        onChange={handleChange}
                                    />
                                </Box>
                            </Paper>
                        </Container>
                        <Container>
                            <Typography variant="h5" pt={2}>Разрешенный сброс загрязняющих веществ</Typography>
                        </Container>
                        <Container>
                            <Paper elevation={3} sx={{marginTop: 2}}>
                                <HeadBox>Нормативно допустимый</HeadBox>
                                <Box p={4}>
                                    <TextField
                                        fullWidth
                                        error={errors.legallyPermissibleMgDm3}
                                        id="input-legally-permissible-mg-dm3"
                                        label='мг/дм3'
                                        type="number"
                                        variant="standard"
                                        name='legallyPermissibleMgDm3'
                                        value={values.legallyPermissibleMgDm3}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        error={errors.legallyPermissibleKg}
                                        id="input-legally-permissible-kg"
                                        label='кг'
                                        type="number"
                                        variant="standard"
                                        name='legallyPermissibleKg'
                                        value={values.legallyPermissibleKg}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        error={errors.legallyPermissibleT}
                                        id="input-legally-permissible-t"
                                        label='т'
                                        type="number"
                                        variant="standard"
                                        name='legallyPermissibleT'
                                        value={values.legallyPermissibleT}
                                        onChange={handleChange}
                                    />
                                </Box>
                            </Paper>
                        </Container>
                        <Container>
                            <Paper elevation={3} sx={{marginTop: 2}}>
                                <HeadBox>Установленный лимит</HeadBox>
                                <Box p={4}>
                                    <TextField
                                        fullWidth
                                        error={errors.limitSetMgDm3}
                                        id="input-limit-set-mg-dm3"
                                        label='мг/дм3'
                                        type="number"
                                        variant="standard"
                                        name='limitSetMgDm3'
                                        value={values.limitSetMgDm3}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        error={errors.limitSetKg}
                                        id="input-limit-set-kg"
                                        label='кг'
                                        type="number"
                                        variant="standard"
                                        name='limitSetKg'
                                        value={values.limitSetKg}
                                        onChange={handleChange}
                                    />
                                    <TextField
                                        fullWidth
                                        error={errors.limitSetT}
                                        id="input-limit-set-t"
                                        label='т'
                                        type="number"
                                        variant="standard"
                                        name='limitSetT'
                                        value={values.limitSetT}
                                        onChange={handleChange}
                                    />
                                </Box>
                            </Paper>
                        </Container>
                        <Container>
                            <Stack direction='row' spacing={2} mt={1}>
                                <Button variant="contained" color="success"
                                        onClick={handleAdd}>Добавить</Button>
                                <Button variant="contained" color="error" onClick={() => {
                                    handleClose();
                                    setValues(initialState);
                                }}
                                >
                                    Отмена
                                </Button>
                            </Stack>
                        </Container>
                    </Box>
                </Paper>
            </Dialog>
            <Snackbar open={openAlert}
                      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                      onClose={() => {
                          setOpenAlert(false);
                      }}
                      autoHideDuration={6000}
            >
                <Alert onClose={() => {
                    setOpenAlert(false);
                }} severity="warning" sx={{width: '100%'}}>
                    {textAlert.map((option, count) => (
                        <Container key={count}>
                            {option}
                        </Container>
                    ))}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
};

export default React.memo(AddDetailsReportWaterQualityAccounting);