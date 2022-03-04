import React, {useContext, useMemo, useState} from "react";

// Пользовательские хуки
import useModal from '../../../../global-components/hooks/useModal'
import useFormLate from "../../../../global-components/hooks/useFormLate";

// Компоненты
import validate from './ValidateFormAddingInformation';
import AddDetailReportSelects from "../../../../global-components/components/selects/AddDetailReportSelects";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";
import styleModal from "../../../../global-components/style/styleModal";

// Контекст
import FormAddingInformationContext from "../context/FormAddingInformationContext";

// MUI
import {Box, Button, Container, Grid, MenuItem, Modal, Snackbar, Stack, TextField, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import MuiAlert from "@mui/material/Alert";
import FormWaterFeatureSelectionContext from "../context/FormWaterFeatureSelectionContext";
import FormWaterFeatureSelection from "./FormWaterFeatureSelection";


const {listWaterBodies, listWaterQualityCategories, listWaterUseGoals} = AddDetailReportSelects();

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FormAddingInformation = () => {

    // Блок открытия и закрытия модального окна
    const [open, setOpen] = useState(false);
    const [handleOpen, handleClose] = useModal(setOpen);
    // (конец) Блок открытия и закрытия модального окна

    // Отображение окна с ошибками
    const [openAlert, setOpenAlert] = useState(false);

    // Пустые значения стейта
    const initialState = {
        nameWaterObjectCode: 'Код водного объекта',
        nameWaterObjectName: 'Наименование водного объекта',
        typeWaterObject: listWaterBodies[0],
        waterQualityCategory: listWaterQualityCategories[0],
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

    // Стейт с данными
    const [values, setValues] = useState({
        nameWaterObjectCode: 'Код водного объекта',
        nameWaterObjectName: 'Наименование водного объекта',
        typeWaterObject: listWaterBodies[0],
        waterQualityCategory: listWaterQualityCategories[0],
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
    });

    // Стейт с ошибками
    const [errors, setErrors] = useState({});
    const [textAlert, setTextAlert] = useState([]);

    // Пользовательский хук для добавления данных из полей формы в стейт
    const {handleChange} = useFormLate(setValues);

    // Получение стейта из родительского компонента через контекст
    const [addingInformation, setAddingInformation] = useContext(FormAddingInformationContext)

    // Функция для сохранения новых данных в глобальный масив
    function handleAdd() {
        const [errors, textErrors] = validate(values);
        if (Object.keys(errors).length === 0) {
            setAddingInformation([...addingInformation, values]);
            setValues(initialState)
            handleClose();
        } else {
            setTextAlert(textErrors);
            setOpenAlert(true);
            setErrors(errors);
        }
    }

    const formWaterFeatureSelectionMemo = useMemo(() =>{
        return setValues;
    }, [values.nameWaterObjectName, values.nameWaterObjectCode])

    return (
        <React.Fragment>
            <Button variant="contained" color="secondary" onClick={handleOpen}>Добавить детали</Button>
            <Modal
                sx={{overflowY: 'auto'}}
                disableEnforceFocus
                keepMounted
                open={open}
                onClose={handleClose}
            >
                <Grid container sx={styleModal}>
                    <Grid item={true} xs={0} md={2} xl={2}/>
                    <Grid item={true} xs={12} md={8} xl={8}>
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
                                            label="Наименование водного объекта - водоисточника / код водного объекта"
                                            variant="standard" helperText='Выберите водный источник'/>
                                        <FormWaterFeatureSelectionContext.Provider value={
                                            formWaterFeatureSelectionMemo
                                        }>
                                            <FormWaterFeatureSelection/>
                                        </FormWaterFeatureSelectionContext.Provider>
                                    </Stack>
                                </Container>
                                <Container>
                                    <Grid item xs={12} md={12} xl={12}>
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
                                    <Grid item xs={12} md={12} xl={12}>
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
                                </Container>
                                <Container>
                                    <Grid item xs={12} md={12} xl={12}>
                                        <TextField
                                            error={errors.volumePermissibleFence}
                                            fullWidth
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
                                </Container>
                                <Container>
                                    <Typography variant="h5" pt={2}>Фактический объем забора, тыс. м3</Typography>
                                </Container>
                                <Container>
                                    <Grid item xs={12} md={12} xl={12}>
                                        <TextField
                                            error={errors.fullVolume}
                                            fullWidth
                                            id="input-full-volume"
                                            name='fullVolume'
                                            value={values.fullVolume}
                                            onChange={handleChange}
                                            type='number'
                                            label="Всего"
                                            variant="standard" helperText='Введите полный объем'
                                        />
                                    </Grid>
                                </Container>
                                <Container>
                                    <Grid item>
                                        <Stack spacing={3} direction="row" sx={{
                                            lineHeight: '40px'
                                        }}>
                                            <Typography variant="span" textAlign="center" pt={1} sx={{
                                                color: 'rgba(0, 0, 0, 0.6)',
                                                whiteSpace: 'nowrap'
                                            }}>По месяцам квартала</Typography>
                                            <TextField
                                                error={errors.firstMonth}
                                                id="input-first-month"
                                                type="number"
                                                variant="standard"
                                                name='firstMonth'
                                                value={values.firstMonth}
                                                onChange={handleChange}/>
                                            <TextField
                                                error={errors.secondMonth}
                                                id="input-second-month"
                                                type="number"
                                                variant="standard"
                                                name='secondMonth'
                                                value={values.secondMonth}
                                                onChange={handleChange}/>
                                            <TextField
                                                error={errors.thirdMonth}
                                                id="input-third-month"
                                                type="number"
                                                variant="standard"
                                                name='thirdMonth'
                                                value={values.thirdMonth}
                                                onChange={handleChange}/>
                                        </Stack>
                                    </Grid>
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
                    </Grid>
                </Grid>
            </Modal>
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

export default React.memo(FormAddingInformation);