// ***********************************************************
// Компонент с навигационным меню
// ***********************************************************

import React from "react"

// Роутинг
import {Link} from "react-router-dom";

// MUI
import {Button, ButtonGroup, Divider, Stack} from "@mui/material";


export default function NavBar() {

    return (
        <React.Fragment>
            <Stack
                sx={{justifyContent: 'center', padding: 2}}
                direction="row"
                divider={<Divider orientation="vertical" flexItem/>}
                spacing={2}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="Ссылки на поиск и создание отчетов по объему забора воды"
                >
                    <Link to="/web/guest/factual-waterusage/fw-list" style={{textDecoration: 'none'}}>
                        <Button variant="outlined">Поиск отчетов по объему забора</Button>
                    </Link>
                    <Link to="/web/guest/factual-waterusage/fw-add" style={{textDecoration: 'none', paddingTop: 16}}>
                        <Button variant="outlined">Создание отчета по объему забора</Button>
                    </Link>
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="Ссылки на поиск и создание отчетов по объему забора воды"
                >
                    <Link to="/web/guest/factual-waterusage/fd-list/" style={{textDecoration: 'none'}}>
                        <Button variant="outlined">Поиск отчетов по объему сброса</Button>
                    </Link>
                    <Link to="/web/guest/factual-waterusage/fd-add/" style={{textDecoration: 'none', paddingTop: 16}}>
                        <Button variant="outlined">Создание отчета по объему сброса</Button>
                    </Link>
                </ButtonGroup>
                <ButtonGroup
                    orientation="vertical"
                    aria-label="Ссылки на поиск и создание отчетов по объему забора воды"
                >
                    <Link to="/web/guest/factual-waterusage/fq-list/" style={{textDecoration: 'none'}}>
                        <Button variant="outlined">Поиск отчетов по учету качества воды</Button>
                    </Link>
                    <Link to="/web/guest/factual-waterusage/fq-add/" style={{textDecoration: 'none', paddingTop: 16}}>
                        <Button variant="outlined">Создание отчета по учету качества воды</Button>
                    </Link>
                </ButtonGroup>
            </Stack>
        </React.Fragment>
    );
};