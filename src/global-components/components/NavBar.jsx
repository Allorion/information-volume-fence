// ***********************************************************
// Компонент с навигационным меню
// ***********************************************************

import React from "react"

// Роутинг
import {Link} from "react-router-dom";

// MUI
import {Button, Divider, Stack} from "@mui/material";


export default function NavBar() {

    return (
        <React.Fragment>
            <Stack
                sx={{justifyContent: 'center', padding: 2}}
                direction="row"
                divider={<Divider orientation="vertical" flexItem/>}
                spacing={2}
            >
                <Link to="/web/guest/factual-water-usage/fw-list" style={{textDecoration: 'none'}}>
                    <Button variant="outlined">Сведения по объему забора</Button>
                </Link>
                <Link to="/web/guest/factual-water-usage/fd-list/" style={{textDecoration: 'none'}}>
                    <Button variant="outlined">Сведения по объему сброса</Button>
                </Link>
                <Link to="/web/guest/factual-water-usage/fq-list/" style={{textDecoration: 'none'}}>
                    <Button variant="outlined">Сведения по учету качества воды</Button>
                </Link>
            </Stack>
        </React.Fragment>
    );
};