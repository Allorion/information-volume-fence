// *******************************************************
// Родительский компонент добавления отчета по сбросу воды
// *******************************************************

import React from "react";

// MUI
import {Button, Grid, Stack} from "@mui/material";

// Роутинг
import {Link} from "react-router-dom";

// Компоненты
import NavBar from "../../../global-components/components/NavBar";
import FormReportAdd from "../../../global-components/components/FormReportAdd";


const AddReportsVolumeDischarge = () => {

    return(
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} md={2} xl={2}/>
                <Grid item xs={12} md={8} xl={8}>
                    <NavBar/>
                    <FormReportAdd/>
                    <Stack spacing={2} direction='row' mt={4}>
                        <Link to="/web/guest/factual-water-usage/" style={{textDecoration: 'none'}}>
                            <Button variant="contained" color="success">Сохранить</Button>
                        </Link>
                    </Stack>
                    <Grid item xs={0} md={2} xl={2}/>
                </Grid>
            </Grid>

        </React.Fragment>
    );
};

export default AddReportsVolumeDischarge;