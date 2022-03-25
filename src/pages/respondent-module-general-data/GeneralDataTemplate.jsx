// *********************************************************************************************************************
// Компонент страницы 'Общие данные'
// *********************************************************************************************************************


import React, {useEffect, useState} from "react";

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
    const [organizationField, setOrganizationField] = useState();
    const [codeReportingOrganizationField, setCodeReportingOrganizationField] = useState();
    const [personProvidingInformationField, setPersonProvidingInformationField] = useState();

    // Блок сохранение данных из полей в Local Storage
    useEffect(() => {
        localStorage.setItem ("organizationField", JSON.stringify(organizationField));
    }, [organizationField]);

    useEffect(() => {
        localStorage.setItem ("codeReportingOrganizationField", JSON.stringify(codeReportingOrganizationField));
    }, [codeReportingOrganizationField]);

    useEffect(() => {
        localStorage.setItem ("personProvidingInformationField", JSON.stringify(personProvidingInformationField));
    }, [personProvidingInformationField]);
    // Блок сохранение данных из полей в Local Storage

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
                                    setField={setOrganizationField}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                <CodeReportingOrganization
                                    setField={setCodeReportingOrganizationField}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                <PersonProvidingInformation
                                    setField={setPersonProvidingInformationField}
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