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


export default function FencePeriods(props) {

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
    const justYear = useInput(props.fencePeriodsField.current.justYear);

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
        justYear.setValue(props.fencePeriodsField.current.justYear);
        props.fencePeriodsFlag.current = false;
    }, [props.fencePeriodsFlag.current]);

    // Функция для подсчета суммы за год
    useEffect(() => {
        const summa = (
            +january.value +
            +february.value +
            +march.value +
            +april.value +
            +may.value +
            +june.value +
            +july.value +
            +august.value +
            +september.value +
            +october.value +
            +november.value +
            +december.value
        );
        justYear.setValue(summa)
    }, [april.value, august.value, december.value, february.value, january.value, july.value, june.value,
        justYear, march.value, may.value, november.value, october.value, september.value]);

    // Сохраняем данные в родительский компонент
    useEffect(() => {
        props.fencePeriodsField.current = {
            january: january.value,
            february: february.value,
            march: march.value,
            april: april.value,
            may: may.value,
            june: june.value,
            july: july.value,
            august: august.value,
            september: september.value,
            october: october.value,
            november: november.value,
            december: december.value,
            justYear: justYear.value
        };
    }, [august.value, december.value, february.value, january.value, july.value, june.value,
        justYear.value, march.value, november.value, september.value]);

    return(
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Забрано или получено по периодам (тыс.м<sup>3</sup>)</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='january'
                                id="january"
                                label="Январь"
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
                                label="Февраль"
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
                                label="Март"
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
                                label="Апрель"
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
                                label="Май"
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
                                label="Июнь"
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
                                label="Июль"
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
                                label="Август"
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
                                label="Сентябрь"
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
                                label="Октябрь"
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
                                label="Ноябрь"
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
                                label="Декабрь"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={december.value}
                                onChange={december.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={4}>
                            <TextField
                                disabled={true}
                                type='number'
                                name='justYear'
                                id="just-year"
                                label="Всего за год"
                                variant="standard"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">тыс.м<sup>3</sup></InputAdornment>,
                                }}
                                value={justYear.value}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};