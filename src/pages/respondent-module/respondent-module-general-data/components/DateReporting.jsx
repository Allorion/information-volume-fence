import React, {useEffect} from "react";
import useInputDate from "../../../../global-components/hooks/useInputDate";
import {Grid, Stack, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider, MobileDatePicker} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

// Дополнительные модули
import {ru} from "date-fns/locale";


const DateReporting = props => {

    const dateReportingYear = useInputDate(new Date());
    const datePreparationDocument = useInputDate(new Date());

    // Обновление стейта родительского компонента
    useEffect(() => {
        props.setField.current = {
            dateReportingYear: dateReportingYear.value,
            datePreparationDocument: datePreparationDocument.value
        }
    }, [datePreparationDocument.value, dateReportingYear.value, props.setField]);

    return (
        <React.Fragment>
            <Grid container>
                <Stack spacing={4} direction="row">
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        locale={ru}
                    >
                        <DatePicker
                            views={['year']}
                            label="Отчетный год"
                            value={dateReportingYear.value}
                            onChange={(newValue) => {
                                dateReportingYear.onChange(newValue)
                            }}
                            renderInput={(params) => <TextField {...params}
                                                                helperText="Укажите год за который составляете отчет"/>}
                        />
                    </LocalizationProvider>

                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        locale={ru}
                    >
                        <MobileDatePicker
                            label="Дата составления документа"
                            value={datePreparationDocument.value}
                            onChange={(newValue) => {
                                datePreparationDocument.onChange(newValue);
                            }}
                            renderInput={(params) => (
                                <TextField {...params} helperText="Укажите дату составления отчета"/>
                            )}
                        />
                    </LocalizationProvider>
                </Stack>
            </Grid>
        </React.Fragment>
    );
};

export default DateReporting;





