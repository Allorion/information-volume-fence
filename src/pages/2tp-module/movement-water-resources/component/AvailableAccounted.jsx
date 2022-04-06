import React from "react";
import {Box, Grid, TextField} from "@mui/material";
import useInput from "../../../../global-components/hooks/useInput";
import HeadBox from "../../../../global-components/style/HeadBox";
import Paper from "@mui/material/Paper";

export default function AvailableAccounted() {

    const permissibleVolumeWaterIntake = useInput('');
    const measured = useInput('');
    const transportationLosses = useInput('');

    return(
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Допустимо и учтено</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='permissibleVolumeWaterIntake'
                                id="permissible-volume-water-intake"
                                label="Допустимый объем забора воды"
                                variant="standard"
                                value={permissibleVolumeWaterIntake.value}
                                onChange={permissibleVolumeWaterIntake.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='measured'
                                id="measured"
                                label="Учтено средствами измерений"
                                variant="standard"
                                value={measured.value}
                                onChange={measured.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='transportationLosses'
                                id="transportationLosses"
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