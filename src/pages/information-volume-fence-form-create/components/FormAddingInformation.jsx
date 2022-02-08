import React, {useContext, useState} from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Box, Button, Container, MenuItem, Snackbar, Stack, TextField, Typography} from "@mui/material";
import Modal from "@mui/material/Modal";
import AppContext from "./AppContext";
import {Close, Send} from "@mui/icons-material";
import MuiAlert from '@mui/material/Alert';
import FormWaterFeatureSelection from "./FormWaterFeatureSelection";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function FormAddingInformation() {

    const listWaterBodies = ['МОРЕ', 'РЕКА', 'РЕКА ПЕРЕСЫХАЮЩАЯ', 'ОЗЕРО', 'БОЛОТО', 'ВОДОХРАНИЛИЩЕ РУСЛОВОЕ, ПРУД РУСЛОВОЙ',
        'Водохранилище наливное, пруд наливной', 'Канал комплексного назначения', 'ПОДЗЕМНЫЙ ВОДНЫЙ ОБЪЕКТ',
        'ШАХТА, РУДНИК, НЕФТЕПРОМЫСЕЛ, КАРЬЕР', 'СКВАЖИНА ВЕРТИКАЛЬНОГО ДРЕНАЖА ДЛЯ ПОНИЖЕНИЯ УРОВНЯ ГРУНТОВЫХ ВОД',
        'Коллектор оросительной системы', 'Земледельческие поля орошения', 'НАКОПИТЕЛЬ', 'РЕЛЬЕФ МЕСТНОСТИ',
        'ПОЛЯ ФИЛЬТРАЦИИ', 'СЕТЬ КАНАЛИЗАЦИИ', 'ЛИВНЕВОЙ КОЛЛЕКТОР'];

    const listWaterQualityCategories = ['- Питьевая пресная',
        'ПО - ЗАБРАННАЯ ИЗ ПРИРОДНЫХ ВОДНЫХ ОБЪЕКТОВ (КРОМЕ МОРЕЙ), В ТОМ ЧИСЛЕ ПОСЛЕ ВОДОПОДГОТОВКИ',
        'ПК - ПОЛУЧЕННАЯ И (ИЛИ) ПЕРЕДАННАЯ ИЗ СИСТЕМ ВОДОСНАБЖЕНИЯ КОММУНАЛЬНОГО НАЗНАЧЕНИЯ',
        'ПД - ПОЛУЧЕННАЯ И (ИЛИ) ПЕРЕДАННАЯ ИЗ ПРОЧИХ СИСТЕМ ВОДОСНАБЖЕНИЯ', '- Техническая пресная',
        'ТН - ЗАБРАННАЯ ИЗ ПРИРОДНЫХ ВОДНЫХ ОБЪЕКТОВ (КРОМЕ МОРЕЙ)',
        'ТД - ПОЛУЧЕННАЯ И (ИЛИ) ПЕРЕДАННАЯ ИЗ СИСТЕМ ВОДОСНАБЖЕНИЯ (ВОДООБЕСПЕЧЕНИЯ, ОБВОДНЕНИЯ)',
        'ТР - Переданная для перераспределения (переброски) стока', 'ТП - Переданная для пополнения запасов подземных вод',
        '- Морская', 'МР - ИЗ МОРЕЙ', '- Сточная', 'СК - В СИСТЕМАХ ВОДООТВЕДЕНИЯ КОММУНАЛЬНОГО НАЗНАЧЕНИЯ',
        'СД - В ПРОЧИХ СИСТЕМАХ ВОДООТВЕДЕНИЯ',
        'СТ - ВОДА СТОЧНАЯ ТРАНЗИТНАЯ, ПЕРЕДАННАЯ НА ОЧИСТНЫЕ СООРУЖЕНИЯ ДРУГИМ РЕСПОНДЕНТАМ', '- Прочие категории',
        'МН - МИНЕРАЛЬНАЯ', 'ТМ - ТЕРМАЛЬНАЯ', 'РВ - СБРОСНАЯ С РЫБОВОДНЫХ ПРУДОВ', 'КД - КОЛЛЕКТОРНО-ДРЕНАЖНАЯ',
        'РС - Сбросная с рисовых систем', 'КР - КАРЬЕРНАЯ', 'ШР - ШАХТНО-РУДНИЧНАЯ', 'БЛ - БАЛЛАСТНАЯ, ЛЬЯЛЬНАЯ',
        'ЛВ - ЛИВНЕВАЯ'];

    const listWaterUseGoals = ['1.1. забор (изъятие) водных ресурсов из водных объектов, тыс.куб.м.',
        '1.2. забор (изъятие) водных ресурсов из поверхностных водных объектов или их частей (за исключением морей) ' +
        'для целей производства тепловой и (или) электрической энергии субъектами электроэнергетики, использующими ' +
        'прямоточные системы технического водоснабжения, тыс.куб.м. ', '1.3. забор морской воды, тыс.куб.м',
        '1.4. забор воды из водных объектов для водоснабжения населения, тыс.куб.м.',
        '2. Производство электрической энергии без забора (изъятия) водных ресурсов из водных объектов, тыс.кВт/ч',
        '3. Использование акватории водных объектов, кв.км'

    ];

    const globalHooks = useContext(AppContext);

    const [typeWaterObject, setTypeWaterObject] = useState(listWaterBodies[0]);

    const [waterQualityCategory, setWaterQualityCategory] = useState(listWaterQualityCategories[0]);

    const [waterIntakeNumber, setWaterIntakeNumber] = useState('');

    const [northernLatitudeDegrees, setNorthernLatitudeDegrees] = useState('');
    const [northernLatitudeMinutes, setNorthernLatitudeMinutes] = useState('');
    const [northernLatitudeSeconds, setNorthernLatitudeSeconds] = useState('');

    const [easternLongitudeDegrees, setEasternLongitudeDegrees] = useState('');
    const [easternLongitudeMinutes, setEasternLongitudeMinutes] = useState('');
    const [easternLongitudeSeconds, setEasternLongitudeSeconds] = useState('');

    const [purposeWaterUse, setPurposeWaterUse] = useState(listWaterUseGoals[0]);

    const [volumePermissibleFence, setVolumePermissibleFence] = useState('');

    const [fullVolume, setFullVolume] = useState('');

    const [firstMonth, setFirstMonth] = useState('');
    const [secondMonth, setSecondMonth] = useState('');
    const [thirdMonth, setThirdMonth] = useState('');

    const [errorNameWaterObject, setErrorNameWaterObject] = useState(false);

    const [errorWaterIntakeNumber, setErrorWaterIntakeNumber] = useState(false);

    const [errorNorthernLatitudeDegrees, setErrorNorthernLatitudeDegrees] = useState(false);
    const [errorNorthernLatitudeMinutes, setErrorNorthernLatitudeMinutes] = useState(false);
    const [errorNorthernLatitudeSeconds, setErrorNorthernLatitudeSeconds] = useState(false);

    const [errorEasternLongitudeDegrees, setErrorEasternLongitudeDegrees] = useState(false);
    const [errorEasternLongitudeMinutes, setErrorEasternLongitudeMinutes] = useState(false);
    const [errorEasternLongitudeSeconds, setErrorEasternLongitudeSeconds] = useState(false);

    const [errorVolumePermissibleFence, setErrorVolumePermissibleFence] = useState(false);

    const [errorFullVolume, setErrorFullVolume] = useState(false);

    const [errorFirstMonth, setErrorFirstMonth] = useState(false);
    const [errorSecondMonth, setErrorSecondMonth] = useState(false);
    const [errorThirdMonth, setErrorThirdMonth] = useState(false);

    const styleModal = {
        position: 'absolute',
        top: '52%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 0,
        p: 1,
        overflowY: 'auto'
    };

    const HeadBox = styled(Paper)(({theme}) => ({
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        background: '#eceff1',
        fontSize: '18px'
    }));

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [openAlert, setOpenAlert] = useState(false);
    const [textAlert, setTextAlert] = useState({
        severity: '',
        text: ''
    });

    function handlerAddDetails() {

        if(globalHooks.nameWaterObject.code === "Код водного объект" || globalHooks.nameWaterObject.code === ''){
            setTextAlert({
                severity: 'warning',
                text: 'Не выбран водный источник'
            });
            setErrorNameWaterObject(true);
            setOpenAlert(true);
            return;
        }else{
            setErrorNameWaterObject(false);
        }

        if (waterIntakeNumber === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Не указан номер водозабора'
            });
            setErrorWaterIntakeNumber(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorWaterIntakeNumber(false);
        }

        if (northernLatitudeDegrees === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Не указаны градусы северной широты'
            });
            setErrorNorthernLatitudeDegrees(true);
            setOpenAlert(true);
            return;
        } else if (northernLatitudeDegrees > 180 || northernLatitudeDegrees < 0) {
            setTextAlert({
                severity: 'warning',
                text: 'Градусы не должны быть больше 180 и меньше 0'
            });
            setErrorNorthernLatitudeDegrees(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorNorthernLatitudeDegrees(false);
        }

        if (northernLatitudeMinutes === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Не указаны минуты северной широты'
            });
            setErrorNorthernLatitudeMinutes(true);
            setOpenAlert(true);
            return;
        } else if (northernLatitudeMinutes > 60 || northernLatitudeMinutes < 0) {
            setTextAlert({
                severity: 'warning',
                text: 'Минуты не должны быть больше 60 и меньше 0'
            });
            setErrorNorthernLatitudeMinutes(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorNorthernLatitudeMinutes(false);
        }

        if (northernLatitudeSeconds === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Не указаны секунды северной широты'
            })
            setErrorNorthernLatitudeSeconds(true);
            setOpenAlert(true);
            return;
        } else if (northernLatitudeSeconds > 60 || northernLatitudeSeconds < 0) {
            setTextAlert({
                severity: 'warning',
                text: 'Секунды не должны быть больше 60 и меньше 0'
            })
            setErrorNorthernLatitudeSeconds(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorNorthernLatitudeSeconds(false);
        }

        if (easternLongitudeDegrees === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Не указаны градусы восточной долготы'
            });
            setErrorEasternLongitudeDegrees(true);
            setOpenAlert(true);
            return;
        } else if (easternLongitudeDegrees > 180 || easternLongitudeDegrees < 0) {
            setTextAlert({
                severity: 'warning',
                text: 'Градусы не должны быть больше 180 и меньше 0'
            });
            setErrorEasternLongitudeDegrees(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorEasternLongitudeDegrees(false);
        }

        if (easternLongitudeMinutes === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Не указаны минуты восточной долготы'
            });
            setErrorEasternLongitudeMinutes(true);
            setOpenAlert(true);
            return;
        } else if (easternLongitudeMinutes > 60 || easternLongitudeMinutes < 0) {
            setTextAlert({
                severity: 'warning',
                text: 'Минуты не должны быть больше 60 и меньше 0'
            });
            setErrorEasternLongitudeMinutes(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorEasternLongitudeMinutes(false);
        }

        if (easternLongitudeSeconds === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Не указаны секунды восточной долготы'
            });
            setErrorEasternLongitudeSeconds(true);
            setOpenAlert(true);
            return;
        } else if (easternLongitudeSeconds > 60 || easternLongitudeSeconds < 0) {
            setTextAlert({
                severity: 'warning',
                text: 'Секунды не должны быть больше 60 и меньше 0'
            });
            setErrorEasternLongitudeSeconds(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorEasternLongitudeSeconds(false);
        }

        if (volumePermissibleFence === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Объем допустимого забора не указан'
            });
            setErrorVolumePermissibleFence(true);
            setOpenAlert(true);
            return;
        } else if (volumePermissibleFence < 0) {
            setTextAlert({
                severity: 'warning',
                text: 'Объем допустимого забора не должен быть меньше 0'
            });
            setErrorVolumePermissibleFence(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorVolumePermissibleFence(false);
        }

        if (fullVolume === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Полный объем не указан'
            });
            setErrorFullVolume(true);
            setOpenAlert(true);
            return;
        } else if (fullVolume < 0) {
            setTextAlert({
                severity: 'warning',
                text: 'Полный объем не должен быть меньше 0'
            });
            setErrorFullVolume(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorFullVolume(false);
        }

        if (firstMonth === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Объем за первый месяц не указан'
            });
            setErrorFirstMonth(true);
            setOpenAlert(true);
            return;
        } else if (firstMonth < 0) {
            setTextAlert({
                severity: 'warning',
                text: 'Объем за первый месяц не должен быть меньше 0'
            });
            setErrorFirstMonth(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorFirstMonth(false);
        }

        if (secondMonth === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Объем за второй месяц не указан'
            });
            setErrorSecondMonth(true);
            setOpenAlert(true);
            return;
        } else if (secondMonth < 0) {
            setTextAlert({
                severity: 'warning',
                text: 'Объем за второй месяц не должен быть меньше 0'
            });
            setErrorSecondMonth(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorSecondMonth(false);
        }

        if (thirdMonth === "") {
            setTextAlert({
                severity: 'warning',
                text: 'Объем за третий месяц не указан'
            });
            setErrorThirdMonth(true);
            setOpenAlert(true);
            return;
        } else if (thirdMonth < 0) {
            setTextAlert({
                severity: 'warning',
                text: 'Объем за третий месяц не должен быть меньше 0'
            });
            setErrorThirdMonth(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorThirdMonth(false);
        }

        if (+firstMonth + +secondMonth + +thirdMonth > +fullVolume) {
            setTextAlert({
                severity: 'warning',
                text: 'Объем за три месяца больше чем полный объем'
            });
            setErrorFullVolume(true);
            setErrorFirstMonth(true);
            setErrorSecondMonth(true);
            setErrorThirdMonth(true);
            setOpenAlert(true);
            return;
        } else if(+firstMonth + +secondMonth + +thirdMonth < +fullVolume){
            setTextAlert({
                severity: 'warning',
                text: 'Объем за три месяца меньше чем полный объем'
            });
            setErrorFullVolume(true);
            setErrorFirstMonth(true);
            setErrorSecondMonth(true);
            setErrorThirdMonth(true);
            setOpenAlert(true);
            return;
        } else {
            setErrorFullVolume(false);
            setErrorFirstMonth(false);
            setErrorSecondMonth(false);
            setErrorThirdMonth(false);
        }

        const obj = {
            "nameWaterObject": globalHooks.nameWaterObject.name,
            "codeWaterObject": globalHooks.nameWaterObject.code,
            'typeWaterObject': typeWaterObject,
            'waterQualityCategory': waterQualityCategory,
            'waterIntakeNumber': waterIntakeNumber,
            'northernLatitudeDegrees': northernLatitudeDegrees,
            'northernLatitudeMinutes': northernLatitudeMinutes,
            'northernLatitudeSeconds': northernLatitudeSeconds,
            'easternLongitudeDegrees': easternLongitudeDegrees,
            'easternLongitudeMinutes': easternLongitudeMinutes,
            'easternLongitudeSeconds': easternLongitudeSeconds,
            'purposeWaterUse': purposeWaterUse,
            'volumePermissibleFence': volumePermissibleFence,
            'fullVolume': fullVolume,
            'firstMonth': firstMonth,
            'secondMonth': secondMonth,
            'thirdMonth': thirdMonth
        }

        globalHooks.setDetailsTable([obj]);
        setTypeWaterObject('');
        setWaterQualityCategory('');
        setWaterIntakeNumber('');
        setNorthernLatitudeDegrees('');
        setNorthernLatitudeMinutes('');
        setNorthernLatitudeSeconds('');
        setEasternLongitudeDegrees('');
        setEasternLongitudeMinutes('');
        setEasternLongitudeSeconds('');
        setPurposeWaterUse('');
        setVolumePermissibleFence('');
        setFullVolume('');
        setFirstMonth('');
        setSecondMonth('');
        setThirdMonth('');
        globalHooks.setNameWaterObject({
            code: 'Код водного объекта',
            name: 'Название водного объекта'
        })

        handleClose();
    }

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
                                        <TextField error={errorNameWaterObject} fullWidth disabled
                                                   id="input-name-water-object"
                                                   value={globalHooks.nameWaterObject.name + " / " + globalHooks.nameWaterObject.code}
                                                   label="Наименование водного объекта - водоисточника"
                                                   variant="standard" helperText='Выберите водный источник'/>
                                        <FormWaterFeatureSelection/>
                                    </Stack>
                                </Container>
                                <Container>
                                    <Grid item xs={12} md={12} xl={12}>
                                        <TextField
                                            fullWidth
                                            id="select-type-water-object"
                                            select
                                            label="Вид водного объекта - водоисточника"
                                            value={typeWaterObject}
                                            onChange={(event) => {
                                                setTypeWaterObject(event.target.value)
                                            }}
                                            helperText="Выберите вид водного объекта - водоисточника"
                                            variant="standard"
                                        >
                                            {globalHooks.isLoading ? (
                                                <MenuItem>Загрузка...</MenuItem>
                                            ) : (
                                                listWaterBodies.map((option, count) => (
                                                    <MenuItem key={count + 1} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))
                                            )}
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
                                            value={waterQualityCategory}
                                            onChange={(event) => {
                                                setWaterQualityCategory(event.target.value)
                                            }}
                                            helperText="Выберите категорию качества воды"
                                            variant="standard"
                                        >
                                            {globalHooks.isLoading ? (
                                                <MenuItem>Загрузка...</MenuItem>
                                            ) : (
                                                listWaterQualityCategories.map((option, count) => (
                                                    <MenuItem key={count + 1} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))
                                            )}
                                        </TextField>
                                    </Grid>
                                </Container>
                                <Container>
                                    <Grid item xs={12} md={12} xl={12}>
                                        <TextField fullWidth id="input-water-intake-number"
                                                   error={errorWaterIntakeNumber}
                                                   value={waterIntakeNumber}
                                                   onChange={(event) => {
                                                       setWaterIntakeNumber(event.target.value)
                                                   }}
                                                   label="Номер водозабора"
                                                   variant="standard" helperText='Введите номер водозабора'/>
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
                                            }}>Северная широта</Typography>
                                            <TextField error={errorNorthernLatitudeDegrees}
                                                       id="input-northern-latitude-degrees"
                                                       label="Градусы °"
                                                       variant="standard"
                                                       type="number"
                                                       value={northernLatitudeDegrees} onChange={
                                                (event) => {
                                                    setNorthernLatitudeDegrees(event.target.value);
                                                }}/>
                                            <TextField error={errorNorthernLatitudeMinutes}
                                                       id="input-northern-latitude-minutes"
                                                       label="Минуты '"
                                                       variant="standard"
                                                       type="number"
                                                       value={northernLatitudeMinutes} onChange={
                                                (event) => {
                                                    setNorthernLatitudeMinutes(event.target.value);
                                                }}/>
                                            <TextField error={errorNorthernLatitudeSeconds}
                                                       id="input-northern-latitude-seconds"
                                                       label='Секунды "'
                                                       variant="standard"
                                                       type="number"
                                                       value={northernLatitudeSeconds} onChange={
                                                (event) => {
                                                    setNorthernLatitudeSeconds(event.target.value);
                                                }}/>
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
                                            }}>Восточная долгота</Typography>
                                            <TextField error={errorEasternLongitudeDegrees}
                                                       id="input-eastern-longitude-degrees"
                                                       label="Градусы °"
                                                       type="number"
                                                       variant="standard"
                                                       value={easternLongitudeDegrees} onChange={
                                                (event) => {
                                                    setEasternLongitudeDegrees(event.target.value);
                                                }}/>
                                            <TextField error={errorEasternLongitudeMinutes}
                                                       id="input-eastern-longitude-minutes"
                                                       label="Минуты '"
                                                       type="number"
                                                       variant="standard"
                                                       value={easternLongitudeMinutes} onChange={
                                                (event) => {
                                                    setEasternLongitudeMinutes(event.target.value);
                                                }}/>
                                            <TextField error={errorEasternLongitudeSeconds}
                                                       id="input-eastern-longitude-seconds"
                                                       label='Секунды "'
                                                       type="number"
                                                       variant="standard"
                                                       value={easternLongitudeSeconds} onChange={
                                                (event) => {
                                                    setEasternLongitudeSeconds(event.target.value);
                                                }}/>
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
                                            value={purposeWaterUse}
                                            onChange={(event) => {
                                                setPurposeWaterUse(event.target.value);
                                            }}
                                            helperText="Выберите цель водопользования"
                                            variant="standard"
                                        >
                                            {globalHooks.isLoading ? (
                                                <MenuItem>Загрузка...</MenuItem>
                                            ) : (
                                                listWaterUseGoals.map((option, count) => (
                                                    <MenuItem key={count + 1} value={option}>
                                                        {option}
                                                    </MenuItem>
                                                ))
                                            )}
                                        </TextField>
                                    </Grid>
                                </Container>
                                <Container>
                                    <Grid item xs={12} md={12} xl={12}>
                                        <TextField error={errorVolumePermissibleFence} fullWidth
                                                   id="input-volume-permissible-fence"
                                                   value={volumePermissibleFence}
                                                   onChange={(event) => {
                                                       setVolumePermissibleFence(event.target.value)
                                                   }}
                                                   type="number"
                                                   label="Объем допустимого забора, тыс. м3"
                                                   variant="standard"
                                                   helperText='Введите объем допустимого забора, тыс. м3'/>
                                    </Grid>
                                </Container>
                                <Container>
                                    <Typography variant="h5" pt={2}>Фактический объем забора, тыс. м3</Typography>
                                </Container>
                                <Container>
                                    <Grid item xs={12} md={12} xl={12}>
                                        <TextField error={errorFullVolume} fullWidth id="input-full-volume"
                                                   value={fullVolume}
                                                   onChange={(event) => {
                                                       setFullVolume(event.target.value)
                                                   }}
                                                   type='number'
                                                   label="Всего"
                                                   variant="standard" helperText='Введите полный объем'/>
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
                                            <TextField error={errorFirstMonth} id="input-first-month" type="number"
                                                       variant="standard"
                                                       value={firstMonth} onChange={
                                                (event) => {
                                                    setFirstMonth(event.target.value);
                                                }}/>
                                            <TextField error={errorSecondMonth} id="input-second-month" type="number"
                                                       variant="standard"
                                                       value={secondMonth} onChange={
                                                (event) => {
                                                    setSecondMonth(event.target.value);
                                                }}/>
                                            <TextField error={errorThirdMonth} id="input-third-month" type="number"
                                                       variant="standard"
                                                       value={thirdMonth} onChange={
                                                (event) => {
                                                    setThirdMonth(event.target.value);
                                                }}/>
                                        </Stack>
                                    </Grid>
                                </Container>
                                <Container>
                                    <Stack spacing={2} direction="row" pt={2}>
                                        <Button variant="contained" color="success" onClick={handlerAddDetails}
                                                startIcon={<Send/>}>
                                            Добавить
                                        </Button>
                                        <Button variant="contained" onClick={handleClose} color="error"
                                                endIcon={<Close/>}>
                                            Отмена
                                        </Button>
                                    </Stack>
                                </Container>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={0} md={2} xl={2}/>
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
                }} severity={textAlert.severity} sx={{width: '100%'}}>
                    {textAlert.text}
                </Alert>
            </Snackbar>
        </React.Fragment>
    );
}