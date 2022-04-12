// ******************************************************
// Компонент для выбора водного объекта (названия / кода)
// ******************************************************


import React, {useContext, useState, useEffect} from 'react';

// MUI
import Grid from "@mui/material/Grid";
import {Box, Button, Container, Dialog, FormControl, InputLabel, Select, Stack, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import {AddCircle, Close} from "@mui/icons-material";

// Стили
import HeadBox from "../style/HeadBox";

// Пользовательские хуки
import useLoading from "../hooks/useLoading";
import useModal from "../hooks/useModal";

// Контекст
import ChoosingWaterFeatureContext from "./context/ChoosingWaterFeatureContext";



const ChoosingWaterFeature = () => {

    // Блок открытия и закрытия модального окна
    const [open, setOpen] = useState(false);
    const [handleOpen, handleClose] = useModal(setOpen);
    // (конец) Блок открытия и закрытия модального окна

    // Получаем хук для вывода загрузки
    const {loading, handleLoading} = useLoading();

    // Получаем данные из родительского компонента
    const setValues = useContext(ChoosingWaterFeatureContext);

    // Состояние полей имени и кода водного объекта
    const [waterObjectCode, setWaterObjectCode] = useState('');
    const [waterObjectName, setWaterObjectName] = useState('');

    // Записываем результат по поиску кода и названия водного объекта
    const [dataWaterObjectCode, setDataWaterObjectCode] = useState([]);
    const [dataWaterObjectName, setDataWaterObjectName] = useState([]);

    // Записываем выбраный пользователем вариант
    const [searchWaterObject, setSearchWaterObject] = useState([]);

    // Получаем из результата код и название и записываем в качестве объекта
    const [waterObject, setWaterObject] = useState({});

    // Блок с запросами к API
    useEffect(() => {
        if (waterObjectCode.length === 0) {
            setDataWaterObjectCode([])
            return null
        }
        const fetchData = async () => {
            handleLoading(true);

            // await Liferay.Service(
            //     '/opendata.setsviews/water-object-filter',
            //     {
            //         filter: `{"waterObjectName":{"searchType":"CONTAIN","value":"${waterObjectName}"},"waterObjectCode":{"searchType":"CONTAIN","value":"${waterObjectCode}"}}`,
            //         page: '',
            //         size: '',
            //         sort: ''
            //     },
            //     function (obj) {
            //         setDataWaterObjectCode(obj.result.content);
            //     }
            // );

            handleLoading(false);
        };
        fetchData();

    }, [waterObjectCode]);

    useEffect(() => {
        if (waterObjectName.length === 0) {
            setDataWaterObjectName([])
            return null
        }
        const fetchData = async () => {
            handleLoading(true);

            // await Liferay.Service(
            //     '/opendata.setsviews/water-object-filter',
            //     {
            //         filter: `{"waterObjectName":{"searchType":"CONTAIN","value":"${waterObjectName}"},"waterObjectCode":{"searchType":"CONTAIN","value":"${waterObjectCode}"}}`,
            //         page: '',
            //         size: '',
            //         sort: ''
            //     },
            //     function (obj) {
            //         setDataWaterObjectName(obj.result.content);
            //     }
            // );

            handleLoading(false);
        };

        fetchData();

    }, [waterObjectName]);
    // (Конец) Блок с запросами к API

    // Функция с выбором одного значения имени и кода водного объекта
    const handleChangeMultiple = (event) => {
        const {options} = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value[0] = options[i].value;
                const as = {
                    code: options[i].value,
                    name: options[i].dataset.name
                };
                setWaterObject(as);
            }
        }
        setSearchWaterObject(value);
    };

    // Сохраняем выбраные значения в родительский компонент
    const handlerTransferWaterObject = () => {
        setValues((value) => ({
            ...value,
            nameWaterObjectCode: waterObject.code,
            nameWaterObjectName: waterObject.name
        }));
        handleClose();
    }

    return (
        <React.Fragment>
            <Grid item pt={2}>
                <Button variant="outlined" onClick={handleOpen}>Выбрать</Button>
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="Выбор водного объекта"
                aria-describedby="Форма для выбора водного объекта"
                maxWidth="xl"
            >
                <Paper>
                    <HeadBox>Выбор водного объекта</HeadBox>
                    <Box p={2}>
                        <Container>
                            <Stack spacing={2} direction='row'>
                                <TextField fullWidth id="input-water=object-code"
                                           value={waterObjectCode}
                                           label="Код вводного объекта"
                                           variant="standard"
                                           helperText='Введите минимум 2 символа для поиска'
                                           onChange={((event) => {
                                               setWaterObjectCode(event.target.value)
                                           })}/>
                                <TextField fullWidth id="input-water-object-name"
                                           value={waterObjectName}
                                           label="Название водного объекта"
                                           variant="standard"
                                           helperText='Введите минимум 2 символа для поиска'
                                           onChange={((event) => {
                                               setWaterObjectName(event.target.value)
                                           })}/>
                            </Stack>
                        </Container>
                        <Container>
                            <FormControl fullWidth sx={{pt: 2}}>
                                <InputLabel shrink htmlFor="select-search-result-water-object" sx={{mt: 2}}>
                                    Результат поиска
                                </InputLabel>
                                <Select
                                    fullWidth
                                    multiple
                                    native
                                    value={searchWaterObject}
                                    // @ts-ignore Typings are not considering `native`
                                    onChange={handleChangeMultiple}
                                    label="Результат поиска"
                                    inputProps={{
                                        id: 'select-search-result-water-object',
                                        style: {
                                            height: '200px',
                                        }
                                    }}
                                >
                                    {loading ? (
                                        <option>Загрузка...</option>
                                    ) : (
                                        dataWaterObjectCode.map((item, index) => (
                                            <option key={"code" + index} value={item.waterObjectCode}
                                                    data-name={item.waterObjectName}>
                                                {item.waterObjectCode} - {item.waterObjectName}
                                            </option>
                                        ))
                                    )}
                                    {dataWaterObjectName.map((item, index) => (
                                        <option key={"name" + index} value={item.waterObjectCode}
                                                data-name={item.waterObjectName}>
                                            {item.waterObjectCode} - {item.waterObjectName}
                                        </option>
                                    ))
                                    }
                                </Select>
                            </FormControl>
                        </Container>
                        <Container>
                            <Stack spacing={2} direction="row" pt={2}>
                                <Button variant="contained" color="success" onClick={handlerTransferWaterObject}
                                        startIcon={<AddCircle/>}>
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
            </Dialog>
        </React.Fragment>
    );
};

export default React.memo(ChoosingWaterFeature);