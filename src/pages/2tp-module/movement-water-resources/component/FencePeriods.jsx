// *********************************************************************************************************************
// Компонент с подсчетом забраной или полученной воды за год
// *********************************************************************************************************************



import React, {useContext, useEffect} from "react";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Grid, InputAdornment, TextField} from "@mui/material";

// Пользовательские хуки
import useInput from "../../../../global-components/hooks/useInput";
import MovementWaterResourcesContext from "../../context/MovementWaterResourcesContext";


export default function FencePeriods() {

    // Получаем данные из родительского компонента с помощью контекста
    const {fencePeriodsField} = useContext(MovementWaterResourcesContext);

    // Стейты для сохранения данных из полей формы
    const january = useInput(fencePeriodsField.current.january);
    const february = useInput(fencePeriodsField.current.february);
    const march = useInput(fencePeriodsField.current.march);
    const april = useInput(fencePeriodsField.current.april);
    const may = useInput(fencePeriodsField.current.may);
    const june = useInput(fencePeriodsField.current.june);
    const july = useInput(fencePeriodsField.current.july);
    const august = useInput(fencePeriodsField.current.august);
    const september = useInput(fencePeriodsField.current.september);
    const october = useInput(fencePeriodsField.current.october);
    const november = useInput(fencePeriodsField.current.november);
    const december = useInput(fencePeriodsField.current.december);
    const justYear = useInput(fencePeriodsField.current.justYear)

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
        fencePeriodsField.current = {
            january: january.value,
            february: february.value,
            march: march.value,
            april: january.value,
            may: january.value,
            june: june.value,
            july: july.value,
            august: august.value,
            september: september.value,
            october: january.value,
            november: november.value,
            december: december.value,
            justYear: justYear.value
        };
    }, [august.value, december.value, february.value, fencePeriodsField, january.value, july.value, june.value,
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