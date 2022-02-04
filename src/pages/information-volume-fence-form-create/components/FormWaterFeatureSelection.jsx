import React, {useContext, useEffect, useState} from "react";
import AppContext from "./AppContext";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Box, Button, Container, FormControl, InputLabel, Select, Stack, TextField} from "@mui/material";
import Modal from "@mui/material/Modal";
import {AddCircle, Close} from "@mui/icons-material";

export default function FormWaterFeatureSelection() {

    const globalHooks = useContext(AppContext);

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

    const [waterObjectCode, setWaterObjectCode] = useState('');
    const [waterObjectName, setWaterObjectName] = useState('');
    const [dataWaterObjectCode, setDataWaterObjectCode] = useState([]);
    const [dataWaterObjectName, setDataWaterObjectName] = useState([]);

    const [searchWaterObject, setSearchWaterObject] = useState([]);

    const [waterObject, setWaterObject] = useState({});

    useEffect(() => {
        if (waterObjectCode.length === 0) {
            setDataWaterObjectCode([])
            return null
        }
        const fetchData = async () => {
            globalHooks.setIsLoading(true);

            await Liferay.Service(
                '/opendata.setsviews/water-object-filter',
                {
                    filter: `{"waterObjectName":{"searchType":"CONTAIN","value":"${waterObjectName}"},"waterObjectCode":{"searchType":"CONTAIN","value":"${waterObjectCode}"}}`,
                    page: '',
                    size: '',
                    sort: ''
                },
                function (obj) {
                    setDataWaterObjectCode(obj.result.content);
                }
            );

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

            await Liferay.Service(
                '/opendata.setsviews/water-object-filter',
                {
                    filter: `{"waterObjectName":{"searchType":"CONTAIN","value":"${waterObjectName}"},"waterObjectCode":{"searchType":"CONTAIN","value":"${waterObjectCode}"}}`,
                    page: '',
                    size: '',
                    sort: ''
                },
                function (obj) {
                    setDataWaterObjectName(obj.result.content);
                }
            );

            globalHooks.setIsLoading(false);
        };

        fetchData();

    }, [waterObjectName]);

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

    const handlerTransferWaterObject = () => {
        const obj = {
            code: waterObject.code,
            name: waterObject.name
        };
        globalHooks.setNameWaterObject(obj);
        handleClose();
    }

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
                    </Grid>
                    <Grid item={true} xs={0} md={2} xl={2}/>
                </Grid>
            </Modal>
        </React.Fragment>
    );
}