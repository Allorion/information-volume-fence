// *******************************************************
// Компонент с добавлением деталей к отчету по забору воды
// *******************************************************


import React, {useContext, useMemo, useState} from "react";

// Пользовательские хуки
import useModal from '../../../../global-components/hooks/useModal';
import useForm from "../../../../global-components/hooks/useForm";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";
import Alert from '../../../../global-components/style/Alert';

// Контекст
import AddDetailsReportsVolumeIntakeContext from "../context/AddDetailsReportsVolumeIntakeContext";
import ChoosingWaterFeatureContext from "../../../../global-components/components/context/ChoosingWaterFeatureContext";

// MUI
import {Box, Button, Container, Dialog, Grid, MenuItem, Snackbar, Stack, TextField, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

// Компоненты
import validate from './ValidateDetailsReportsVolumeIntake';
import AddDetailReportSelects from "../../../../global-components/components/selects/AddDetailReportSelects";
import ChoosingWaterFeature from "../../../../global-components/components/ChoosingWaterFeature";

// Select
import ListWaterBodies from "../../../../global-components/components/selects/ListWaterBodies";
import ListWaterQualityCategories from "../../../../global-components/components/selects/ListWaterQualityCategories";


// Получаем данные из компонента с глобальными select
const {listWaterUseGoals} = AddDetailReportSelects();



const AddDetailsReportsVolumeIntake = () => {

    // Получаем данные из компонента с глобальными select
    const {arrayObj, loadingListWaterBodies} = ListWaterBodies();
    const copyArrayObj = arrayObj.filter((n) => {
        return n.inCode !== null
    });
    const {listWaterQualityCategories, loadingListWaterQualityCategories} = ListWaterQualityCategories();
    const copyListWaterQualityCategories = listWaterQualityCategories.filter((n) => {
        return n.withdrawal !== null
    });
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
        typeWaterObject: '',
        waterQualityCategory: '',
        waterIntakeNumber: '',
        northernLatitudeDegrees: '',
        northernLatitudeMinutes: '',
        northernLatitudeSeconds: '',
        easternLongitudeDegrees: '',
        easternLongitudeMinutes: '',
        easternLongitudeSeconds: '',
        purposeWaterUse: listWaterUseGoals[0],
        volumePermissibleFence: '',
        fullVolume: '',
        firstMonth: '',
        secondMonth: '',
        thirdMonth: ''
    }

    // Добавляем кастомный хук формы
    const {values, setValues, handleChange} = useForm(initialState);

    // Стейт с ошибками
    const [errors, setErrors] = useState({});
    const [textAlert, setTextAlert] = useState([]);

    // Получение стейта из родительского компонента через контекст
    const [addingInformation, setAddingInformation] = useContext(AddDetailsReportsVolumeIntakeContext)

    // Функция рендерит результат только при изменении поля с кодом и названием водного объекта
    const formWaterFeatureSelectionMemo = useMemo(() => {
        return setValues;
    }, [values.nameWaterObjectName, values.nameWaterObjectCode]);


    // Функция для сохранения новых данных в глобальный масив
    function handleAdd() {
        const [errors, textErrors] = validate(values);
        if (Object.keys(errors).length === 0) {
            setAddingInformation([...addingInformation, values]);
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
                    <Box>
                        <Container>
                            <Grid container p={4} spacing={2}>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                                    <Stack spacing={2} direction="row">
                                        <TextField
                                            error={errors.nameWaterObjectCode}
                                            fullWidth
                                            disabled
                                            id="input-name-water-object"
                                            value={values.nameWaterObjectName + ' / ' + values.nameWaterObjectCode}
                                            label="Наименование водного объекта - водоисточника / код водного объекта"
                                            variant="standard" helperText='Выберите водный источник'/>
                                        <ChoosingWaterFeatureContext.Provider value={
                                            formWaterFeatureSelectionMemo
                                        }>
                                            <ChoosingWaterFeature/>
                                        </ChoosingWaterFeatureContext.Provider>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} pt={2}>
                                    <TextField
                                        fullWidth
                                        id="select-type-water-object"
                                        select
                                        label="Вид водного объекта - водоисточника"
                                        value={values.typeWaterObject}
                                        name='typeWaterObject'
                                        onChange={handleChange}
                                        helperText="Выберите вид водного объекта - водоисточника"
                                        variant="standard"
                                    >
                                        {loadingListWaterBodies ? (
                                            <MenuItem>Загрузка...</MenuItem>
                                        ) : (
                                            copyArrayObj.map((option) => (
                                                <MenuItem key={option.id} value={option.id}>
                                                    {option.name}
                                                </MenuItem>
                                            ))
                                        )}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} pt={2}>
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
                                        {loadingListWaterQualityCategories ? (
                                            <MenuItem>Загрузка...</MenuItem>
                                        ) : (
                                            copyListWaterQualityCategories.map((option) => (
                                                <MenuItem key={option.id} value={option.id}>
                                                    {option.getCode} - {option.name}
                                                </MenuItem>
                                            ))
                                        )}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} pt={2}>
                                    <TextField
                                        error={errors.waterIntakeNumber}
                                        fullWidth
                                        id="input-water-intake-number"
                                        name='waterIntakeNumber'
                                        value={values.waterIntakeNumber}
                                        onChange={handleChange}
                                        label="Номер водозабора"
                                        variant="standard"
                                        helperText='Введите номер водозабора'/>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
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
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
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
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                                    <TextField
                                        fullWidth
                                        id="select-purpose-water-use"
                                        select
                                        label="Цель водопользования"
                                        name='purposeWaterUse'
                                        value={values.purposeWaterUse}
                                        onChange={handleChange}
                                        helperText="Выберите цель водопользования"
                                        variant="standard"
                                    >
                                        {listWaterUseGoals.map((option, count) => (
                                            <MenuItem key={count + 1} value={option}>
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} pt={2}>
                                    <TextField
                                        fullWidth
                                        error={errors.volumePermissibleFence}
                                        id="input-volume-permissible-fence"
                                        name='volumePermissibleFence'
                                        value={values.volumePermissibleFence}
                                        onChange={handleChange}
                                        type="number"
                                        label="Объем допустимого забора, тыс. м3"
                                        variant="standard"
                                        helperText='Введите объем допустимого забора, тыс. м3'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                                    <Typography variant="h5" pt={2}>Фактический объем забора, тыс. м3</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                                    <TextField
                                        error={errors.fullVolume}
                                        sx={{width: '50%'}}
                                        id="input-full-volume"
                                        name='fullVolume'
                                        value={values.fullVolume}
                                        onChange={handleChange}
                                        type='number'
                                        label="Всего"
                                        variant="standard" helperText='Введите полный объем'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                                    <Stack spacing={3} direction="row" sx={{
                                        lineHeight: '40px'
                                    }}>
                                        <Typography variant="span" textAlign="center" mt={2} sx={{
                                            color: 'rgba(0, 0, 0, 0.6)',
                                            whiteSpace: 'nowrap'
                                        }}>По месяцам квартала</Typography>
                                        <TextField
                                            error={errors.firstMonth}
                                            id="input-first-month"
                                            type="number"
                                            variant="standard"
                                            label="За первый месяц"
                                            name='firstMonth'
                                            value={values.firstMonth}
                                            onChange={handleChange}/>
                                        <TextField
                                            error={errors.secondMonth}
                                            id="input-second-month"
                                            type="number"
                                            label="За второй месяц"
                                            variant="standard"
                                            name='secondMonth'
                                            value={values.secondMonth}
                                            onChange={handleChange}/>
                                        <TextField
                                            error={errors.thirdMonth}
                                            id="input-third-month"
                                            type="number"
                                            label="За третий месяц"
                                            variant="standard"
                                            name='thirdMonth'
                                            value={values.thirdMonth}
                                            onChange={handleChange}/>
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                                    <Stack direction='row' spacing={2}>
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
                                </Grid>
                            </Grid>
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

export default React.memo(AddDetailsReportsVolumeIntake);