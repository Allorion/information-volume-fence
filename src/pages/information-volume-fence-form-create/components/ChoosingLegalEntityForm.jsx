import React, {useContext, useState} from "react";
import {Box, Button, FormControl, InputLabel, Select, Stack, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import {AddCircle, Close, Edit, SearchRounded, Send} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import AppContext from "./AppContext";
import axios from "axios";


export default function ChoosingLegalEntityForm() {
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

    const globalHooks = useContext(AppContext);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [searchResultLegalEntity, setSearchResultLegalEntity] = useState([]);
    const [dataSearchResultLegalEntity, setDataSearchResultLegalEntity] = useState({drinks: []});


    const [name, setName] = useState('');

    const handleQuery = () => {
        const fetchData = async () => {
            globalHooks.setIsLoading(true);
            const result = await axios(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
            );

            setDataSearchResultLegalEntity(result.data);
            globalHooks.setIsLoading(false);
        };
        fetchData();
    };

    const handlerSelection = () => {
        const fetchData = async () => {
            globalHooks.setNameOrganization(searchResultLegalEntity[0]);
            handleClose();
        };
        fetchData();
    };


    const handleChangeMultiple = (event) => {
        const {options} = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setSearchResultLegalEntity(value);
    };

    return (
        <React.Fragment>
            <Grid item xs={4} md={2} xl={2} mt={2}>
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
                            <HeadBox>Выбор юридического лица</HeadBox>
                            <Box p={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField fullWidth id="input-naming-search" label="Наименование" value={name}
                                                   variant="standard" onChange={(event) => {
                                            setName(event.target.value);
                                        }}
                                                   helperText="Введите название организации для поиска"/>
                                    </Grid>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField fullWidth id="input-inn-search" label="ИНН"
                                                   variant="standard" helperText="Введите ИНН для поиска"/>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} pt={2}>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField fullWidth id="input-kpp-search" label="КПП"
                                                   variant="standard" helperText="Введите КПП для поиска"/>
                                    </Grid>
                                    <Grid item xs={12} md={6} xl={6}>
                                        <TextField fullWidth id="input-number-first-records-database"
                                                   label="Количество первых выбранных записей из базы"
                                                   variant="standard" helperText="Не обязательный пункт"/>
                                    </Grid>
                                </Grid>
                                <Grid container pt={2}>
                                    <Stack
                                        direction={{xs: 'column', sm: 'row'}}
                                        spacing={{xs: 1, sm: 2, md: 4}}
                                    >
                                        <Button variant="contained" onClick={handleQuery}
                                                startIcon={<SearchRounded/>}>Поиск</Button>
                                        <Button color="success" variant="contained" startIcon={<AddCircle/>}>
                                            Добавить
                                        </Button>
                                        <Button variant="outlined" startIcon={<Edit/>}>Изменить</Button>
                                    </Stack>
                                </Grid>
                                <Grid container pt={2}>
                                    <FormControl fullWidth>
                                        <InputLabel shrink htmlFor="select-search-result-legal-entity">
                                            Результат поиска
                                        </InputLabel>
                                        <Select
                                            multiple
                                            native
                                            value={searchResultLegalEntity}
                                            // @ts-ignore Typings are not considering `native`
                                            onChange={handleChangeMultiple}
                                            label="Результат поиска"
                                            inputProps={{
                                                id: 'select-search-result-legal-entity',
                                                style: {
                                                    height: '200px'
                                                }
                                            }}
                                        >
                                            {globalHooks.isLoading ? (
                                                <option>Загрузка...</option>
                                            ) : (
                                                dataSearchResultLegalEntity.drinks.map(item => (
                                                    <option key={item.strDrink} value={item.strDrink}>
                                                        {item.strDrink}
                                                    </option>
                                                ))
                                            )}
                                        </Select>
                                        <p>{searchResultLegalEntity}</p>
                                    </FormControl>
                                </Grid>
                                <Grid container pt={2}>
                                    <Stack
                                        direction={{xs: 'row', sm: 'row'}}
                                        spacing={{xs: 1, sm: 2, md: 4}}
                                    >
                                        <Button variant="contained" color="success" startIcon={<Send/>}
                                                onClick={handlerSelection}>
                                            Выбрать
                                        </Button>
                                        <Button variant="contained" onClick={handleClose} color="error"
                                                endIcon={<Close/>}>
                                            Отмена
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item={true} xs={0} md={2} xl={2}/>
                </Grid>
            </Modal>
        </React.Fragment>
    )
};