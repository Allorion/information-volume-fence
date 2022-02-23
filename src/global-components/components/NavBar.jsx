import React from "react";
import {Link} from "react-router-dom";
import {Button, ButtonGroup, Container, Divider, Stack} from "@mui/material";


export default function NavBar() {

    return(
        <React.Fragment>
                <Stack
                    sx={{justifyContent: 'center', padding: 2}}
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <Link to="/water-usage/fact-wusage/fw-list" style={{textDecoration: 'none'}}>
                        <Button variant="outlined">Сведения по объему забора</Button>
                    </Link>
                    <Link to="#" style={{textDecoration: 'none'}}>
                        <Button variant="outlined">Сведения по объему сброса</Button>
                    </Link>
                    <Link to="#" style={{textDecoration: 'none'}}>
                        <Button variant="outlined">Сведения по учету качества воды</Button>
                    </Link>
                </Stack>
        </React.Fragment>
    );
};