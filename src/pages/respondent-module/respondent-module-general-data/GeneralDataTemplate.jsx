// *********************************************************************************************************************
// Компонент страницы 'Общие данные'
// *********************************************************************************************************************


import React, {useRef} from "react";

// MUI
import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

// Компоненты
import ReportingOrganization from "./components/ReportingOrganization";
import PersonProvidingInformation from "./components/PersonProvidingInformation";
import DateReporting from "./components/DateReporting";



export default function GeneralDataTemplate() {

    // Стейты для хранения данных дочерних компонентов
    const organizationField = useRef();
    const personProvidingInformationField = useRef();
    const dateReportingField = useRef();

    return (
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                        <Box p={4}>
                            <Typography variant="h5" align='center'>Общие данные</Typography>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                <ReportingOrganization
                                    setField={organizationField}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                <PersonProvidingInformation
                                    setField={personProvidingInformationField}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                <DateReporting
                                    setField={dateReportingField}
                                />
                            </Grid>
                            <Stack spacing={2} direction="row">
                                <Button variant="outlined" color="warning" startIcon={<ArrowLeftIcon/>}>Назад</Button>
                                <Button variant="outlined" color="success" endIcon={<ArrowRightIcon/>}>Далее</Button>
                            </Stack>
                        </Box>
                </Grid>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
            </Grid>
        </React.Fragment>
    );
};