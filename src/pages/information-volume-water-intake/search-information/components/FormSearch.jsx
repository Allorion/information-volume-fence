import React, {useContext} from "react";
import {Button, Container, Stack, TextField} from "@mui/material";
import {Link} from "react-router-dom";
import {ContextSearchInformationForm} from "../context/ContextSearchInformationForm";



export default function FormSearch() {

    const objContext = useContext(ContextSearchInformationForm);

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
                    value={objContext.context}
                    onChange={(event) => {
                        objContext.setContext(event.target.value)
                    }}
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
                    <Link to="/web/allorion/fw-add/" style={{textDecoration:'none'}}>
                        <Button variant="contained" color="secondary">Создать</Button>
                    </Link>
                </Stack>
            </Container>
        </React.Fragment>
    );
};