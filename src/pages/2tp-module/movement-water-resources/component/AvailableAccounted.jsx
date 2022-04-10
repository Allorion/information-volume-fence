// *********************************************************************************************************************
// Компонент с данными воде
// *********************************************************************************************************************


import React, {useContext, useEffect} from "react";

// MUI
import {Box, Grid, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// Пользовательские хуки
import useInput from "../../../../global-components/hooks/useInput";

// Контекст
import MovementWaterResourcesContext from "../../context/MovementWaterResourcesContext";

export default function AvailableAccounted() {

    // Получаем данные из родительского компонента с помощью контекста
    const {authorizationDocumentField, availableAccountedField} = useContext(MovementWaterResourcesContext);
    // Стейты для сохранения данных из формы
    const permissibleVolumeWaterIntake = useInput(availableAccountedField.current.permissibleVolumeWaterIntake);
    const measured = useInput(availableAccountedField.current.measured);
    const transportationLosses = useInput(availableAccountedField.current.transportationLosses);

    // Сохраняем введенные данные в родительский компонент
    useEffect(() => {
        availableAccountedField.current = {
            permissibleVolumeWaterIntake: permissibleVolumeWaterIntake.value,
            measured: measured.value,
            transportationLosses: transportationLosses.value
        };
    }, [availableAccountedField, measured.value, permissibleVolumeWaterIntake.value, transportationLosses.value])


    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Допустимо и учтено</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                disabled={authorizationDocumentField.current.codeGuivProvider !== ''}
                                type='number'
                                fullWidth
                                name='permissibleVolumeWaterIntake'
                                id="permissible-volume-water-intake"
                                label="Допустимый объем забора воды"
                                variant="standard"
                                value={permissibleVolumeWaterIntake.value}
                                onChange={(e) => {
                                    if (authorizationDocumentField.current.codeGuivProvider !== '') {
                                        permissibleVolumeWaterIntake.setValue(0);
                                        measured.setValue(0);
                                    } else {
                                        permissibleVolumeWaterIntake.onChange(e);
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                disabled={authorizationDocumentField.current.codeGuivProvider !== ''}
                                type='number'
                                fullWidth
                                name='measured'
                                id="measured"
                                label="Учтено средствами измерений"
                                variant="standard"
                                value={measured.value}
                                onChange={(e) => {
                                    measured.onChange(e);
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='transportationLosses'
                                id="transportation-losses"
                                label="Потери при транспортировке"
                                variant="standard"
                                value={transportationLosses.value}
                                onChange={transportationLosses.onChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};