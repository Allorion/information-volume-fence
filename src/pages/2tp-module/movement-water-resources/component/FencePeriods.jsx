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


export default function FencePeriods() {

    // Стейты для сохранения данных из полей формы
    const january = useInput('');
    const february = useInput('');
    const march = useInput('');
    const april = useInput('');
    const may = useInput('');
    const june = useInput('');
    const july = useInput('');
    const august = useInput('');
    const september = useInput('');
    const october = useInput('');
    const november = useInput('');
    const december = useInput('');
    const justYear = useInput('')

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