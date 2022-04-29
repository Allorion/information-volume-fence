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


export default function AvailableAccounted(props) {

    // Стейты для сохранения данных из формы
    const permissibleVolumeWaterIntake = useInput(props.availableAccountedField.current.permissibleVolumeWaterIntake);
    const measured = useInput(props.availableAccountedField.current.measured);
    const transportationLosses = useInput(props.availableAccountedField.current.transportationLosses);

    // При создании новой формы обновляем данные стейтов
    useEffect(() => {
        permissibleVolumeWaterIntake.setValue(props.availableAccountedField.current.permissibleVolumeWaterIntake);
        measured.setValue(props.availableAccountedField.current.measured);
        transportationLosses.setValue(props.availableAccountedField.current.transportationLosses);
        props.availableAccountedFlag.current = false;
    }, [props.availableAccountedFlag.current]);

    // Сохраняем введенные данные в родительский компонент
    useEffect(() => {
        props.availableAccountedField.current = {
            permissibleVolumeWaterIntake: permissibleVolumeWaterIntake.value,
            measured: measured.value,
            transportationLosses: transportationLosses.value
        };
    }, [measured.value, permissibleVolumeWaterIntake.value, transportationLosses.value])

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Допустимо и учтено</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                disabled={props.authorizationDocumentField.current.codeGuivProvider !== ''}
                                type='number'
                                fullWidth
                                name='permissibleVolumeWaterIntake'
                                id="permissible-volume-water-intake"
                                label="Допустимый объем забора воды"
                                variant="standard"
                                value={permissibleVolumeWaterIntake.value}
                                onChange={(e) => {
                                    if (props.authorizationDocumentField.current.codeGuivProvider !== '') {
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
                                disabled={props.authorizationDocumentField.current.codeGuivProvider !== ''}
                                type='number'
                                fullWidth
                                name='measured'
                                id="measured"
                                label="Учтено средствами измерений"
                                variant="standard"
                                value={measured.value}
                                onChange={(e) => {
                                    if (props.authorizationDocumentField.current.codeGuivProvider !== '') {
                                        permissibleVolumeWaterIntake.setValue(0);
                                        measured.setValue(0);
                                    } else {
                                        measured.onChange(e);
                                    }
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