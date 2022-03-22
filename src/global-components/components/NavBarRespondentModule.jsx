// *********************************************************************************************************************
// Навигационное меню модуля 2 ТП
// *********************************************************************************************************************



import React from 'react';

// MUI
import {Button, ButtonGroup, Divider, Stack} from "@mui/material";

// Роутинг
import {Link} from "react-router-dom";

export default function NavBarRespondentModule() {

    return(
        <React.Fragment>
            <Stack
                sx={{justifyContent: 'center', padding: 2}}
                direction="row"
                divider={<Divider orientation="vertical" flexItem/>}
                spacing={2}
            >
                <ButtonGroup
                    orientation="vertical"
                    aria-label="Создание отчета 2ТП общие данные"
                >
                    <Link to="/web/guest/respondent-module/general-data" style={{textDecoration: 'none'}}>
                        <Button variant="outlined">Общие данные</Button>
                    </Link>
                </ButtonGroup>
                {/*<ButtonGroup*/}
                {/*    orientation="vertical"*/}
                {/*    aria-label="Ссылки на поиск и создание отчетов по объему забора воды"*/}
                {/*>*/}
                {/*    <Link to="/web/guest/factual-waterusage/fd-list/" style={{textDecoration: 'none'}}>*/}
                {/*        <Button variant="outlined">Поиск отчетов по объему сброса</Button>*/}
                {/*    </Link>*/}
                {/*    <Link to="/web/guest/factual-waterusage/fd-add/" style={{textDecoration: 'none', paddingTop: 16}}>*/}
                {/*        <Button variant="outlined">Создание отчета по объему сброса</Button>*/}
                {/*    </Link>*/}
                {/*</ButtonGroup>*/}
                {/*<ButtonGroup*/}
                {/*    orientation="vertical"*/}
                {/*    aria-label="Ссылки на поиск и создание отчетов по объему забора воды"*/}
                {/*>*/}
                {/*    <Link to="/web/guest/factual-waterusage/fq-list/" style={{textDecoration: 'none'}}>*/}
                {/*        <Button variant="outlined">Поиск отчетов по учету качества воды</Button>*/}
                {/*    </Link>*/}
                {/*    <Link to="/web/guest/factual-waterusage/fq-add/" style={{textDecoration: 'none', paddingTop: 16}}>*/}
                {/*        <Button variant="outlined">Создание отчета по учету качества воды</Button>*/}
                {/*    </Link>*/}
                {/*</ButtonGroup>*/}
            </Stack>
        </React.Fragment>
    );
};