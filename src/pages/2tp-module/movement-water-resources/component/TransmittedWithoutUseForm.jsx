// *********************************************************************************************************************
// Форма "Передано для использования или отведения без использования, по кодам категории воды"
// *********************************************************************************************************************


import React, {useContext, useEffect} from "react";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Grid, IconButton, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Пользовательские хуки
import useInput from "../../../../global-components/hooks/useInput";

// Контекст
import MovementWaterResourcesContext from "../../context/MovementWaterResourcesContext";

export default function TransmittedWithoutUseForm(props) {

    // Получаем стейт из родительского компонента
    const {transmittedWithoutUseField} = useContext(MovementWaterResourcesContext);

    // Стейт для записи данных из формы
    const volume = useInput('');

    // Сохранение данных в стейт в родительском компоненте
    useEffect(() => {
        transmittedWithoutUseField.current[props.keyCount] = {
            code: Object.keys(transmittedWithoutUseField.current).length,
            volume: volume.value
        };
    }, [volume])

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
                                value={volume.value}
                                onChange={volume.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={2} lg={2} xl={2} mt={2}>
                            <IconButton aria-label="delete" color='error' onClick={() => {
                                props.delete(props.keyCount)
                                delete transmittedWithoutUseField.current[props.keyCount]
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