// *********************************************************************************************************************
// Компонент с подсчетом забраной или полученной воды за год
// *********************************************************************************************************************


import React, {useEffect} from "react";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Grid, InputAdornment, TextField} from "@mui/material";

// Пользовательские хуки
import useInput from "../../../../global-components/hooks/useInput";


export default function FencePeriodsComponent(props) {

    // Стейты для сохранения данных из полей формы
    const january = useInput(props.fencePeriodsField.current.january);
    const february = useInput(props.fencePeriodsField.current.february);
    const march = useInput(props.fencePeriodsField.current.march);
    const april = useInput(props.fencePeriodsField.current.april);
    const may = useInput(props.fencePeriodsField.current.may);
    const june = useInput(props.fencePeriodsField.current.june);
    const july = useInput(props.fencePeriodsField.current.july);
    const august = useInput(props.fencePeriodsField.current.august);
    const september = useInput(props.fencePeriodsField.current.september);
    const october = useInput(props.fencePeriodsField.current.october);
    const november = useInput(props.fencePeriodsField.current.november);
    const december = useInput(props.fencePeriodsField.current.december);

    // При создании новой формы обновляем данные стейтов
    useEffect(() => {
        january.setValue(props.fencePeriodsField.current.january);
        february.setValue(props.fencePeriodsField.current.february);
        march.setValue(props.fencePeriodsField.current.march);
        april.setValue(props.fencePeriodsField.current.april);
        may.setValue(props.fencePeriodsField.current.may);
        june.setValue(props.fencePeriodsField.current.june);
        july.setValue(props.fencePeriodsField.current.july);
        august.setValue(props.fencePeriodsField.current.august);
        september.setValue(props.fencePeriodsField.current.september);
        october.setValue(props.fencePeriodsField.current.october);
        november.setValue(props.fencePeriodsField.current.november);
        december.setValue(props.fencePeriodsField.current.december);
        props.fencePeriodsFlag.current = false;
    }, [props.fencePeriodsFlag.current]);

    // Сохраняем данные в родительский компонент
    useEffect(() => {
        props.fencePeriodsFieldGlobal.january = january.value;
        props.fencePeriodsFieldGlobal.february = february.value;
        props.fencePeriodsFieldGlobal.march = march.value;
        props.fencePeriodsFieldGlobal.april = april.value;
        props.fencePeriodsFieldGlobal.may = may.value;
        props.fencePeriodsFieldGlobal.june = june.value;
        props.fencePeriodsFieldGlobal.july = july.value;
        props.fencePeriodsFieldGlobal.august = august.value;
        props.fencePeriodsFieldGlobal.september = september.value;
        props.fencePeriodsFieldGlobal.october = october.value;
        props.fencePeriodsFieldGlobal.november = november.value;
        props.fencePeriodsFieldGlobal.december = december.value;
    }, [august.value, december.value, february.value, january.value, july.value, june.value,
        march.value, november.value, september.value]);

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Отведено по периодам (тыс.м<sup>3</sup>)</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='january'
                                id="january"
                                label="[19] Январь"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={january.value}
                                onChange={january.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='february'
                                id="february"
                                label="[20] Февраль"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={february.value}
                                onChange={february.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='march'
                                id="march"
                                label="[21] Март"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={march.value}
                                onChange={march.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='april'
                                id="april"
                                label="[22] Апрель"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={april.value}
                                onChange={april.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='may'
                                id="may"
                                label="[23] Май"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={may.value}
                                onChange={may.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='june'
                                id="june"
                                label="[24] Июнь"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={june.value}
                                onChange={june.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='july'
                                id="july"
                                label="[25] Июль"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={july.value}
                                onChange={july.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='august'
                                id="august"
                                label="[26] Август"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={august.value}
                                onChange={august.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='september'
                                id="september"
                                label="[27] Сентябрь"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={september.value}
                                onChange={september.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='october'
                                id="october"
                                label="[28] Октябрь"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={october.value}
                                onChange={october.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='november'
                                id="november"
                                label="[29] Ноябрь"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={november.value}
                                onChange={november.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='december'
                                id="december"
                                label="[30] Декабрь"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={december.value}
                                onChange={december.onChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};