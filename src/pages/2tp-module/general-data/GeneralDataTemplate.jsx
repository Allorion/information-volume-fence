// *********************************************************************************************************************
// Компонент страницы 'Общие данные'
// *********************************************************************************************************************


import React from "react";

// MUI
import {Box, Grid, Typography} from "@mui/material";

// Компоненты
import ReportingOrganization from "./components/ReportingOrganization";
import PersonProvidingInformation from "./components/PersonProvidingInformation";
import DateReporting from "./components/DateReporting";


export default function GeneralDataTemplate() {

    return (
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                        <Box p={4}>
                            <Typography variant="h5" align='center'>Общие данные</Typography>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                <ReportingOrganization/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                <PersonProvidingInformation/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                <DateReporting/>
                            </Grid>
                        </Box>
                </Grid>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
            </Grid>
        </React.Fragment>
    );
};