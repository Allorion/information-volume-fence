import React from "react";
import {Link} from "react-router-dom";
import {Box, Button, ButtonGroup, Grid, Stack} from "@mui/material";
import HeadBox from "../../../global-components/style/HeadBox";
import Paper from "@mui/material/Paper";

const buttons = [
    <React.Fragment>
        <Link to="/water-usage/fact-wusage/fw-list" style={{textDecoration: 'none'}}>
            <Button key="one">Сведения по объему забора</Button>
        </Link>
        <Link to="#" style={{textDecoration: 'none'}}>
            <Button key="one">Сведения по объему сброса</Button>
        </Link>
        <Link to="#" style={{textDecoration: 'none'}}>
            <Button key="one">Сведения по учету качества воды</Button>
        </Link>
    </React.Fragment>
];

export default function FactWusage () {

    return(
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} md={2} xl={2}/>
                <Grid item xs={12} md={8} xl={8}>
                    <Paper elevation={3}>
                        <HeadBox>Фактическое водопользование</HeadBox>
                        <Box p={4}>
                            <ButtonGroup size="large" aria-label="large button group">
                                {buttons}
                            </ButtonGroup>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}