import React, {useContext, useEffect, useState} from 'react';

// Элементы MUI
import {
    Box,
    Button,
    Modal,
    Paper,
    Grid,
    Container,
    Stack,
    TextField,
    FormControl,
    InputLabel,
    Select
} from "@mui/material";

// Компоненты
import styleModal from "../../global-components/style/styleModal";
import HeadBox from "../../global-components/style/HeadBox";

//Контексты
import AppContext from "./AppContext";
import NameWaterObjectContext from "./context/NameWaterObjectContext";

export default function FormWaterFeatureSelection() {

    // Блок открытия и закрытия модального окна
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // (конец) Блок открытия и закрытия модального окна

    // Блок с контекстами
    const globalHooks = useContext(AppContext);
    const [nameWaterObjectCode, nameWaterObjectName, handleChange] = useContext(NameWaterObjectContext);
    // (конец) Блок с контекстами

    // Объект формы
    const [waterObjectCode, setWaterObjectCode] = useState('');
    const [waterObjectName, setWaterObjectName] = useState('');
    const [dataWaterObjectCode, setDataWaterObjectCode] = useState([]);
    const [dataWaterObjectName, setDataWaterObjectName] = useState([]);
    // (конец) Объект формы

    // Блок запросов к API
    useEffect(() => {
        if (waterObjectCode.length === 0) {
            setDataWaterObjectCode([])
            return null
        }
        const fetchData = async () => {
            globalHooks.setIsLoading(true);

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

            globalHooks.setIsLoading(false);
        };
        fetchData();

    }, [waterObjectCode]);

    useEffect(() => {
        if (waterObjectName.length === 0) {
            setDataWaterObjectName([])
            return null
        }
        const fetchData = async () => {
            globalHooks.setIsLoading(true);

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

            globalHooks.setIsLoading(false);
        };

        fetchData();

    }, [waterObjectName]);

    // (конец) Блок запросов к API

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


    // Блок шаблона
    return (
        <React.Fragment>
            <Grid item pt={2}>
                <Button variant="outlined" onClick={handleOpen}>Выбрать</Button>
            </Grid>
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
                            <HeadBox>Выбор водного объекта</HeadBox>
                            <Box p={2}>
                                <Container>
                                    <Stack spacing={2} direction='row'>
                                        <TextField
                                            fullWidth
                                            id="input-water=object-code"
                                            label="Код вводного объекта"
                                            variant="standard"
                                            helperText='Введите минимум 2 символа для поиска'
                                            name='nameWaterObjectCode'
                                            value={nameWaterObjectCode}
                                            onChange={handleChange}/>
                                        <TextField
                                            fullWidth
                                            id="input-water-object-name"
                                            label="Название водного объекта"
                                            variant="standard"
                                            helperText='Введите минимум 2 символа для поиска'
                                            name='nameWaterObjectName'
                                            value={nameWaterObjectName}
                                            onChange={handleChange}/>
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
                                            {globalHooks.isLoading ? (
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
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Modal>
        </React.Fragment>
    );
    // (конец) Блок шаблона
}