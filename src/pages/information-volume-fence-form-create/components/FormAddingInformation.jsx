import React, {useContext, useState} from 'react';

// Элементы MUI
import {Box, Button, Container, Grid, MenuItem, Modal, Paper, Stack, TextField, Typography} from "@mui/material";

// Компоненты
import HeadBox from "../../global-components/style/HeadBox";
import styleModal from "../../global-components/style/styleModal";
import FormWaterFeatureSelection from "./FormWaterFeatureSelection";

// Контексты
import NameWaterObjectContext from "./context/NameWaterObjectContext";
import AppContext from "./AppContext";

// Пользовательские хуки
import useForm from "../../global-components/hooks/useForm";

// Блока списков select
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
// (конец) Блока списков select

export default function FormAddingInformation() {

    // Блок открытия и закрытия модального окна
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // (конец) Блок открытия и закрытия модального окна

    // Блок с контекстами
    const globalHooks = useContext(AppContext);
    // (конец) Блок с контекстами

    // Объект формы
    const [values, setValues] = useState({
        nameWaterObjectCode: '',
        nameWaterObjectName: '',
        typeWaterObject: '',
        waterQualityCategory: '',
        waterIntakeNumber: '',
        northernLatitudeDegrees: '',
        northernLatitudeMinutes: '',
        northernLatitudeSeconds: '',
        easternLongitudeDegrees: '',
        easternLongitudeMinutes: '',
        easternLongitudeSeconds: '',
        purposeWaterUse: '',
        volumePermissibleFence: '',
        fullVolume: '',
        firstMonth: '',
        secondMonth: '',
        thirdMonth: ''
    })
    const {handleChange} = useForm(setValues);
    // (конец) Объект формы

    console.log(values)



    // Блок шаблона
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
                                            fullWidth
                                            disabled
                                            id="input-name-water-object"
                                            value={values.nameWaterObjectName + values.nameWaterObjectCode}
                                            label="Наименование водного объекта - водоисточника"
                                            variant="standard" helperText='Выберите водный источник'/>
                                        <NameWaterObjectContext.Provider value={[
                                            values.nameWaterObjectCode,
                                            values.nameWaterObjectName,
                                            handleChange
                                        ]}>
                                            <FormWaterFeatureSelection/>
                                        </NameWaterObjectContext.Provider>
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
                                            name='waterQualityCategory'
                                            value={values.waterQualityCategory}
                                            onChange={handleChange}
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
                                        <TextField
                                            fullWidth id="input-water-intake-number"
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
                                            }}>Северная широта</Typography>
                                            <TextField
                                                id="input-northern-latitude-degrees"
                                                label="Градусы °"
                                                variant="standard"
                                                type="number"
                                                name='northernLatitudeDegrees'
                                                value={values.northernLatitudeDegrees}
                                                onChange={handleChange}
                                            />
                                            <TextField
                                                id="input-northern-latitude-minutes"
                                                label="Минуты '"
                                                variant="standard"
                                                type="number"
                                                name='northernLatitudeMinutes'
                                                value={values.northernLatitudeMinutes}
                                                onChange={handleChange}
                                            />
                                            <TextField
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
                                                id="input-eastern-longitude-degrees"
                                                label="Градусы °"
                                                type="number"
                                                variant="standard"
                                                name='easternLongitudeDegrees'
                                                value={values.easternLongitudeDegrees}
                                                onChange={handleChange}
                                            />
                                            <TextField
                                                id="input-eastern-longitude-minutes"
                                                label="Минуты '"
                                                type="number"
                                                variant="standard"
                                                name='easternLongitudeMinutes'
                                                value={values.easternLongitudeMinutes}
                                                onChange={handleChange}
                                            />
                                            <TextField
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
                                        <TextField
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
                                                id="input-first-month"
                                                type="number"
                                                variant="standard"
                                                name='firstMonth'
                                                value={values.firstMonth}
                                                onChange={handleChange}/>
                                            <TextField
                                                id="input-second-month"
                                                type="number"
                                                variant="standard"
                                                name='secondMonth'
                                                value={values.secondMonth}
                                                onChange={handleChange}/>
                                            <TextField
                                                id="input-third-month"
                                                type="number"
                                                variant="standard"
                                                name='thirdMonth'
                                                value={values.thirdMonth}
                                                onChange={handleChange}/>
                                        </Stack>
                                    </Grid>
                                </Container>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Modal>
        </React.Fragment>
    );
    // (конец) Блок шаблона
}