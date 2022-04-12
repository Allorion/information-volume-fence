// *********************************************************************************************************************
// Блок с датами страницы "Общие данные"
// *********************************************************************************************************************



import React, {useContext, useEffect} from "react";

// MUI
import {Grid, Stack, TextField} from "@mui/material";
import {DatePicker, LocalizationProvider, MobileDatePicker} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

// Дополнительные модули
import {ru} from "date-fns/locale";

// Пользовательские хуки
import useInputDate from "../../../../global-components/hooks/useInputDate";

// Контекст
import GeneralDataContext from "../../context/GeneralDataContext";


const DateReporting = () => {

    const [organizationField, personProvidingInformationField, dateReportingField] = useContext(GeneralDataContext);

    const dateReportingYear = useInputDate(dateReportingField.current.dateReportingYear);
    const datePreparationDocument = useInputDate(dateReportingField.current.datePreparationDocument);

    // Обновление стейта родительского компонента
    useEffect(() => {
        dateReportingField.current = {
            dateReportingYear: dateReportingYear.value,
            datePreparationDocument: datePreparationDocument.value
        }
    }, [datePreparationDocument.value, dateReportingYear.value, dateReportingField]);

    return (
        <React.Fragment>
            <Grid container justifyContent='center' alignContent="center">
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





