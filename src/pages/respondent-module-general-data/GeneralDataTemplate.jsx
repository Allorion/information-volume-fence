// *********************************************************************************************************************
// Компонент страницы 'Общие данные'
// *********************************************************************************************************************


import React, {useRef} from "react";

// MUI
import {Box, Grid, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

// Компоненты
import NavBarRespondentModule from "../../global-components/components/NavBarRespondentModule";
import ReportingOrganization from "./components/ReportingOrganization";
import CodeReportingOrganization from "./components/CodeReportingOrganization";
import PersonProvidingInformation from "./components/PersonProvidingInformation";


export default function GeneralDataTemplate() {

    // Стейты для хранения данных дочерних компонентов
    const organizationField = useRef();
    const codeReportingOrganizationField = useRef();
    const personProvidingInformationField = useRef();

    return (
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <NavBarRespondentModule/>
                    <Paper elevation={3}>
                        <Box p={4}>
                            <Typography variant="h5" align='center'>Общие данные</Typography>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                <ReportingOrganization
                                    setField={organizationField}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                <CodeReportingOrganization
                                    setField={codeReportingOrganizationField}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                <PersonProvidingInformation
                                    setField={personProvidingInformationField}
                                />
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
            </Grid>
        </React.Fragment>
    );
};