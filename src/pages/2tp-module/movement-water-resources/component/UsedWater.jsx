// *********************************************************************************************************************
// Компонент блока "Использовано"
// *********************************************************************************************************************



import React, {useEffect} from "react";

// MUI
import HeadBox from "../../../../global-components/style/HeadBox";
import {Box, Grid, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";

// Пользовательский хук
import useInput from "../../../../global-components/hooks/useInput";


export default function UsedWater(props) {

    // Используя пользовательский хук создаем стейты для записи данных из полей ввода
    const processed = useInput(props.usedWaterField.current.processed);
    const repeat = useInput(props.usedWaterField.current.repeat);
    const usedForYear = useInput(props.usedWaterField.current.usedForYear);

    // При создании новой формы обновляем данные стейтов
    useEffect(() => {
        processed.setValue(props.usedWaterField.current.processed);
        repeat.setValue(props.usedWaterField.current.repeat);
        usedForYear.setValue(props.usedWaterField.current.usedForYear);
        props.usedWaterFlag.current = false;
    }, [props.usedWaterFlag.current]);

    // Записываем данные в родительский компонент
    useEffect(() =>{
        props.usedWaterFieldGlobal.processed = processed.value;
        props.usedWaterFieldGlobal.repeat = repeat.value;
        props.usedWaterFieldGlobal.usedForYear = usedForYear.value;
    }, [processed.value, repeat.value, usedForYear.value]);

    return(
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Использовано</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                disabled={true}
                                fullWidth
                                name='code-okato'
                                id="code-okato"
                                label="Код территории по ОКАТО"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <TextField
                                disabled={true}
                                fullWidth
                                name='code-vhu'
                                id="code-vhu"
                                label="Код территории ВХУ"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='processed'
                                id="processed"
                                label="Обработанного"
                                variant="standard"
                                value={processed.value}
                                onChange={processed.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='repeat'
                                id="repeat"
                                label="Повторного"
                                variant="standard"
                                value={repeat.value}
                                onChange={repeat.onChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} mt={4}>
                            <TextField
                                type='number'
                                fullWidth
                                name='usedForYear'
                                id="usedForYear"
                                label="Использовано за год"
                                variant="standard"
                                value={usedForYear.value}
                                onChange={usedForYear.onChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};