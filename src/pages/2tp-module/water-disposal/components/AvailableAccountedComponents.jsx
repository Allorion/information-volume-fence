// *********************************************************************************************************************
// Компонент с данными воде
// *********************************************************************************************************************


import React, {useEffect} from "react";

// MUI
import {Box, Grid, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// Пользовательские хуки
import useInput from "../../../../global-components/hooks/useInput";


export default function AvailableAccountedComponents(props) {

    // Стейты для сохранения данных из формы
    const permissibleVolumeDrainage = useInput(props.availableAccountedField.current.permissibleVolumeDrainage);
    const waterWithdrawnPerYear = useInput(props.availableAccountedField.current.waterWithdrawnPerYear);
    const takenAccountMeasuringInstruments = useInput(props.availableAccountedField.current.takenAccountMeasuringInstruments);

    // При создании новой формы обновляем данные стейтов
    useEffect(() => {
        permissibleVolumeDrainage.setValue(props.availableAccountedField.current.permissibleVolumeDrainage);
        waterWithdrawnPerYear.setValue(props.availableAccountedField.current.waterWithdrawnPerYear);
        takenAccountMeasuringInstruments.setValue(props.availableAccountedField.current.takenAccountMeasuringInstruments);
        props.availableAccountedFlag.current = false;
    }, [props.availableAccountedFlag.current]);

    // Сохраняем введенные данные в родительский компонент
    useEffect(() => {
        props.availableAccountedFieldGlobla.permissibleVolumeDrainage = permissibleVolumeDrainage.value;
        props.availableAccountedFieldGlobla.waterWithdrawnPerYear = waterWithdrawnPerYear.value;
        props.availableAccountedFieldGlobla.takenAccountMeasuringInstruments = takenAccountMeasuringInstruments.value;
    }, [waterWithdrawnPerYear.value, permissibleVolumeDrainage.value, takenAccountMeasuringInstruments.value])

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Допустимо и учтено</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='permissibleVolumeDrainage'
                                id="permissible-volume-drainage"
                                label="Допустимый объем водоотведения"
                                variant="standard"
                                value={permissibleVolumeDrainage.value}
                                onChange={(e) => {
                                    permissibleVolumeDrainage.onChange(e);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='waterWithdrawnPerYear'
                                id="water-withdrawn-per-year"
                                label="Отведено воды, всего за год"
                                variant="standard"
                                value={waterWithdrawnPerYear.value}
                                onChange={(e) => {
                                    waterWithdrawnPerYear.onChange(e);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='takenAccountMeasuringInstruments'
                                id="taken-account-measuring-instruments"
                                label="Учтено средствами измерений"
                                variant="standard"
                                value={takenAccountMeasuringInstruments.value}
                                onChange={takenAccountMeasuringInstruments.onChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};