// *********************************************************************************************************************
// Форма "Передано для использования или отведения без использования, по кодам категории воды"
// *********************************************************************************************************************


import React, {useContext, useEffect, useState} from "react";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Grid, IconButton, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Контекст
import TransmittedWithoutUseContext from "../context/TransmittedWithoutUseContext";

export default function TransmittedWithoutUseForm(props) {

    // Получаем данные из родительского компонента
    const [transmittedWithoutUseField,
        transmittedWithoutUseFlag,
        transmittedWithoutUseComponents] = useContext(TransmittedWithoutUseContext);

    // Стейт для записи данных из формы
    const [code, setCode] = useState(props.obj.code);
    const [value, setValue] = useState(props.obj.value);

    // Получаем данные полей при переходе на другую страницу
    useEffect(() => {
        try {
            setCode(transmittedWithoutUseField.current[props.index-1].code);
            setValue(transmittedWithoutUseField.current[props.index-1].value);
        } catch {

        }
    }, [transmittedWithoutUseFlag.current]);

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