import React from 'react';

// Routing
import {Link} from "react-router-dom";

// MUI
import {Button, Container, Stack, TextField} from "@mui/material";

const FormSearch = () => {

    return(
        <React.Fragment>
            <Container>
                <TextField
                    fullWidth
                    disabled
                    id="input-division"
                    label="Структурное подразделение"
                    variant="standard"
                    helperText='Структурное подразделение выбирается автоматически в
                                соответствии с данными аккаунта пользователя'
                />
            </Container>
            <Container>
                <TextField
                    fullWidth
                    disabled
                    id="input-water-user-directory"
                    label="Водопользователь (по справочнику)"
                    variant="standard"
                    helperText='Выберите водопользователя из справочника'
                />
            </Container>
            <Container>
                <TextField
                    fullWidth
                    id="input-water-user-names"
                    label="Водопользователь (по части наименования)"
                    variant="standard"
                    helperText='Выберите водопользователя из справочника'
                />
            </Container>
            <Container>
                <TextField
                    fullWidth
                    disabled
                    id="input-permit-document"
                    label="Разрешительный документ"
                    variant="standard"
                    helperText='Выберите вразрешительный документ'
                />
            </Container>
            <Container>
                <Stack spacing={2} direction="row" mt={2}>
                    <Button variant="contained" color="info">Поиск</Button>
                </Stack>
            </Container>
        </React.Fragment>
    );
};

export default React.memo(FormSearch);