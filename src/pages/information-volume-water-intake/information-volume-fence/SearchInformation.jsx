import React from "react";

// MUI
import {Box, Button, Container, Grid, Paper, Stack} from "@mui/material";

// Компоненты
import TableInformation from "./components/TableInformation";
import FormSearch from "./components/FormSearch";

// Стили
import HeadBox from "../../../global-components/style/HeadBox";
import {Link} from "react-router-dom";


const SearchInformation = () => {

    return (
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} md={2} xl={2}/>
                <Grid item xs={12} md={8} xl={8}>
                    <Paper elevation={3}>
                        <HeadBox>Сведения по объему забора</HeadBox>
                        <Box p={4}>
                            <FormSearch/>
                        </Box>
                    </Paper>
                    <Stack spacing={2} direction="row" mt={2}>
                        <Link to="/water-usage/fact-wusage/fw-add/" style={{textDecoration: 'none'}}>
                            <Button variant="contained" color="secondary">Создать</Button>
                        </Link>
                    </Stack>
                </Grid>
                <Grid item xs={0} md={2} xl={2}/>
            </Grid>
            <TableInformation/>
        </React.Fragment>
    );
}

export default SearchInformation;