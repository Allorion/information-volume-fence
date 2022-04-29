// *********************************************************************************************************************
// Форма "Использовано за год по кодам видов использования"
// *********************************************************************************************************************


import React, {useContext, useEffect, useState} from "react";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Grid, IconButton, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Контекст
import UsedForTheYearContext from "../context/UsedForTheYearContext";


const UsedForTheYearForm = props => {

    // Контекст
    const [usedForTheYearField, usedForTheYearFlag, usedForTheYearComponents] = useContext(UsedForTheYearContext);

    // Стейт для записи данных из формы
    const [code, setCode] = useState(props.obj.code);
    const [value, setValue] = useState(props.obj.value);

    // Получаем данные полей при переходе на другую страницу
    useEffect(() => {
        try {
            setCode(usedForTheYearField.current[props.index-1].code);
            setValue(usedForTheYearField.current[props.index-1].value);
        } catch {

        }
    }, [usedForTheYearFlag.current]);

    // Сохранение данных в стейт в родительском компоненте
    useEffect(() => {
        props.obj.code = code;
        props.obj.value = value;
    }, [code, value]);

    return (
        <React.Fragment>
            <Paper sx={{marginTop: 2}} elevation={4}>
                <Box p={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} pt={2}>
                            <TextField
                                disabled={true}
                                fullWidth
                                name='code'
                                id="code"
                                label="Код"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} lg={2} xl={2} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                id="volume"
                                label="Объем"
                                variant="standard"
                                value={value}
                                onChange={e => setValue(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} lg={2} xl={2} mt={2}>
                            <IconButton aria-label="delete" color='error' onClick={() => {
                                props.delete(props.obj, props.index);
                            }}>
                                <DeleteIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default UsedForTheYearForm;