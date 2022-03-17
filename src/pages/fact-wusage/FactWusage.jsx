import React from "react";

import {Box, Grid} from "@mui/material";
import HeadBox from "../../global-components/style/HeadBox";
import Paper from "@mui/material/Paper";
import NavBar from "../../global-components/components/NavBar";



export default function FactWusage () {

    return(
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <Paper elevation={3}>
                        <HeadBox>Фактическое водопользование</HeadBox>
                        <Box p={4}>
                            <NavBar/>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
            </Grid>
        </React.Fragment>
    );
}