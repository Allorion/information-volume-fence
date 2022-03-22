import React, {useState} from "react";
import {Grid} from "@mui/material";
import NavBarRespondentModule from "../../global-components/components/NavBarRespondentModule";
import ReportingOrganization from "./components/ReportingOrganization";
import CodeReportingOrganization from "./components/CodeReportingOrganization";


export default function GeneralDataTemplate() {

    const [codeReportingOrganizationField, setCodeReportingOrganizationField] = useState();
    console.log(codeReportingOrganizationField)
    return(
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <NavBarRespondentModule/>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <ReportingOrganization/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <CodeReportingOrganization
                                setField={setCodeReportingOrganizationField}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};