// *********************************************************************************************************************
// Компонент с добовлением ОКВЭД
// *********************************************************************************************************************


import React, {useState} from "react";

// MUI
import {Box, Button, Dialog, Grid, TextField, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

// Пользовательские хуки
import useModal from "../../../global-components/hooks/useModal";
import useForm from "../../../global-components/hooks/useForm";
import useDisableField from "../../../global-components/hooks/useDisableField";


// Дефолтные input передаваемые в пользовательский хук
const field = {
    classOkved: '',
    subclassOkved: '',
    groupOkved: '',
    subgroupOkved: '',
    viewOkved: ''
};


export default function AddOkved() {

    // Блок открытия и закрытия модального окна
    const [open, setOpen] = useState(false);
    const [handleOpen, handleClose] = useModal(setOpen);
    // (конец) Блок открытия и закрытия модального окна

    // Хук для сохранения данных из input
    const {values, handleChange, handleInputDate} = useForm(field);

    // Функция проверки поля при
    const {emptyField} = useDisableField();

    return (
        <React.Fragment>
            <Button variant="outlined" style={{height: "fit-content", marginTop: '20px'}}
                    onClick={handleOpen}>Выбрать</Button>
            <Dialog
                fullWidth
                open={open}
                onClose={handleClose}
                aria-labelledby="ОКВЭД"
                aria-describedby="Форма выбора ОКВЭД"
                maxWidth="lg"
            >
                <Paper>
                    <Box p={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Typography variant="h5" align='center'>Выбор ОКВЭД</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                    fullWidth
                                    id="select-class-okved"
                                    select
                                    label="Класс"
                                    name='classOkved'
                                    // value={values.subjectRf}
                                    // onChange={handleChange}
                                    variant="standard"
                                >
                                    {/*{loading ? (*/}
                                    {/*    <MenuItem>Загрузка...</MenuItem>*/}
                                    {/*) : (*/}
                                    {/*    subjectRfArray.map((option) => (*/}
                                    {/*        <MenuItem key={option.id} value={option.id}>*/}
                                    {/*            {option.code} - {option.name}*/}
                                    {/*        </MenuItem>*/}
                                    {/*    ))*/}
                                    {/*)}*/}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                    fullWidth
                                    id="select-subclass-okved"
                                    select
                                    label="Подкласс"
                                    name='subclassOkved'
                                    // value={values.subjectRf}
                                    // onChange={handleChange}
                                    variant="standard"
                                >
                                    {/*{loading ? (*/}
                                    {/*    <MenuItem>Загрузка...</MenuItem>*/}
                                    {/*) : (*/}
                                    {/*    subjectRfArray.map((option) => (*/}
                                    {/*        <MenuItem key={option.id} value={option.id}>*/}
                                    {/*            {option.code} - {option.name}*/}
                                    {/*        </MenuItem>*/}
                                    {/*    ))*/}
                                    {/*)}*/}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                    disabled={emptyField(values.subclassOkved)}
                                    fullWidth
                                    id="select-group-okved"
                                    select
                                    label="Группа"
                                    name='groupOkved'
                                    // value={values.subjectRf}
                                    // onChange={handleChange}
                                    variant="standard"
                                >
                                    {/*{loading ? (*/}
                                    {/*    <MenuItem>Загрузка...</MenuItem>*/}
                                    {/*) : (*/}
                                    {/*    subjectRfArray.map((option) => (*/}
                                    {/*        <MenuItem key={option.id} value={option.id}>*/}
                                    {/*            {option.code} - {option.name}*/}
                                    {/*        </MenuItem>*/}
                                    {/*    ))*/}
                                    {/*)}*/}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                    disabled={emptyField(values.groupOkved)}
                                    fullWidth
                                    id="select-subgroup-okved"
                                    select
                                    label="Подгруппа"
                                    name='subgroupOkved'
                                    // value={values.subjectRf}
                                    // onChange={handleChange}
                                    variant="standard"
                                >
                                    {/*{loading ? (*/}
                                    {/*    <MenuItem>Загрузка...</MenuItem>*/}
                                    {/*) : (*/}
                                    {/*    subjectRfArray.map((option) => (*/}
                                    {/*        <MenuItem key={option.id} value={option.id}>*/}
                                    {/*            {option.code} - {option.name}*/}
                                    {/*        </MenuItem>*/}
                                    {/*    ))*/}
                                    {/*)}*/}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <TextField
                                    disabled={emptyField(values.viewOkved)}
                                    fullWidth
                                    id="select-view-okved"
                                    select
                                    label="Вид"
                                    name='viewOkved'
                                    // value={values.subjectRf}
                                    // onChange={handleChange}
                                    variant="standard"
                                >
                                    {/*{loading ? (*/}
                                    {/*    <MenuItem>Загрузка...</MenuItem>*/}
                                    {/*) : (*/}
                                    {/*    subjectRfArray.map((option) => (*/}
                                    {/*        <MenuItem key={option.id} value={option.id}>*/}
                                    {/*            {option.code} - {option.name}*/}
                                    {/*        </MenuItem>*/}
                                    {/*    ))*/}
                                    {/*)}*/}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Button variant="contained" color="success">
                                    Подтвердить выбор
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Dialog>
        </React.Fragment>
    );
};