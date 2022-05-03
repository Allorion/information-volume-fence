// *********************************************************************************************************************
// Компонент с блоками формы "Отведено в водные объекты"
// *********************************************************************************************************************


import React, {useEffect} from "react";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Grid, TextField} from "@mui/material";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// Пользовательские хуки
import useInput from "../../../../global-components/hooks/useInput";


export default function AllocatedWaterBodiesComponent(props) {

    const withoutCleaning = useInput(props.allocatedWaterBodiesField.current.withoutCleaning);
    const insufficientlyCleaned = useInput(props.allocatedWaterBodiesField.current.insufficientlyCleaned);
    const normativelyClean = useInput(props.allocatedWaterBodiesField.current.normativelyClean);
    const treatmentFacilityCode = useInput(props.allocatedWaterBodiesField.current.treatmentFacilityCode);
    const volume = useInput(props.allocatedWaterBodiesField.current.volume);
    const capacityTreatmentFacilities = useInput(props.allocatedWaterBodiesField.current.capacityTreatmentFacilities);

    // При создании новой формы обновляем данные стейтов
    useEffect(() => {
        withoutCleaning.setValue(props.allocatedWaterBodiesField.current.withoutCleaning);
        insufficientlyCleaned.setValue(props.allocatedWaterBodiesField.current.insufficientlyCleaned);
        normativelyClean.setValue(props.allocatedWaterBodiesField.current.normativelyClean);
        treatmentFacilityCode.setValue(props.allocatedWaterBodiesField.current.treatmentFacilityCode);
        volume.setValue(props.allocatedWaterBodiesField.current.volume);
        capacityTreatmentFacilities.setValue(props.allocatedWaterBodiesField.current.capacityTreatmentFacilities);
        props.allocatedWaterBodiesFlag.current = false;
    }, [props.allocatedWaterBodiesFlag.current]);

    // Сохраняем введенные данные в родительский компонент
    useEffect(() => {
        props.allocatedWaterBodiesFieldGlobal.withoutCleaning = withoutCleaning.value;
        props.allocatedWaterBodiesFieldGlobal.insufficientlyCleaned = insufficientlyCleaned.value;
        props.allocatedWaterBodiesFieldGlobal.normativelyClean = normativelyClean.value;
        props.allocatedWaterBodiesFieldGlobal.treatmentFacilityCode = treatmentFacilityCode.value;
        props.allocatedWaterBodiesFieldGlobal.volume = volume.value;
        props.allocatedWaterBodiesFieldGlobal.capacityTreatmentFacilities = capacityTreatmentFacilities.value;
    }, [capacityTreatmentFacilities.value, insufficientlyCleaned.value, normativelyClean.value,
        treatmentFacilityCode.value, volume.value, withoutCleaning.value]);

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Отведено в водные объекты</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <Paper>
                                <HeadBox>Загрязненных</HeadBox>
                                <Box p={2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <TextField
                                                type='number'
                                                fullWidth
                                                name='without-cleaning'
                                                id="without-cleaning"
                                                label="без очистки"
                                                variant="standard"
                                                value={withoutCleaning.value}
                                                onChange={withoutCleaning.onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <TextField
                                                type='number'
                                                fullWidth
                                                name='insufficiently-cleaned'
                                                id="insufficiently-cleaned"
                                                label="недостаточно очищенных"
                                                variant="standard"
                                                value={insufficientlyCleaned.value}
                                                onChange={insufficientlyCleaned.onChange}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='normatively-clean'
                                id="normatively-clean"
                                label="нормативно чистых (без очистки)"
                                variant="standard"
                                value={normativelyClean.value}
                                onChange={normativelyClean.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <Paper>
                                <HeadBox>Нормативно-очищенных</HeadBox>
                                <Box p={2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <TextField
                                                type='number'
                                                fullWidth
                                                name='treatment-facility-code'
                                                id="treatment-facility-code"
                                                label="код очистного сооружения"
                                                variant="standard"
                                                value={treatmentFacilityCode.value}
                                                onChange={treatmentFacilityCode.onChange}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <TextField
                                                type='number'
                                                fullWidth
                                                name='volume'
                                                id="volume"
                                                label="объем"
                                                variant="standard"
                                                value={volume.value}
                                                onChange={volume.onChange}
                                            />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='capacity-treatment-facilities'
                                id="capacity-treatment-facilities"
                                label="мощность очистных сооружений"
                                variant="standard"
                                value={capacityTreatmentFacilities.value}
                                onChange={capacityTreatmentFacilities.onChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};