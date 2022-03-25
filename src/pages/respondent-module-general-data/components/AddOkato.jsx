// *********************************************************************************************************************
// Компонент с формой добавления ОКАТО
// *********************************************************************************************************************


import React, {useState} from "react";

// MUI
import {Box, Button, Dialog, Grid, MenuItem, TextField, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

// Пользовательские хуки
import useModal from "../../../global-components/hooks/useModal";
import useForm from "../../../global-components/hooks/useForm";
import useDisableField from "../../../global-components/hooks/useDisableField";


// Дефолтные input передаваемые в пользовательский хук
const field = {
    subjectRf: '',
    districtOrCity: '',
    villageOrCouncilSettlement: ''
};

export default function AddOkato() {

    // Блок открытия и закрытия модального окна
    const [open, setOpen] = useState(false);
    const [handleOpen, handleClose] = useModal(setOpen);
    // (конец) Блок открытия и закрытия модального окна

    // Функция для сохранения данных из формы
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
                aria-labelledby="ОКАТО"
                aria-describedby="Форма выбора ОКАТО"
                maxWidth="lg"
            >
                <Paper>
                    <Box p={4}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Typography variant="h5" align='center'>Выбор ОКАТО</Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <TextField
                                    fullWidth
                                    id="select-subject-rf"
                                    select
                                    label="Субъект РФ"
                                    name='subjectRf'
                                    // value={values.subjectRf}
                                    // onChange={handleChange}
                                    variant="standard"
                                >
                                    <MenuItem>Загрузка...</MenuItem>
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
                                    id="select-district-or-city"
                                    select
                                    label="Район/город"
                                    name='districtOrCity'
                                    // value={values.subjectRf}
                                    // onChange={handleChange}
                                    variant="standard"
                                >
                                    <MenuItem>Загрузка...</MenuItem>
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
                                    id="select-village-or-council-settlement"
                                    select
                                    label="Рабочий поселок/сельсовет"
                                    name='villageOrCouncilSettlement'
                                    // value={values.subjectRf}
                                    // onChange={handleChange}
                                    variant="standard"
                                >
                                    <MenuItem>Загрузка...</MenuItem>
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