// *********************************************************************************************************************
// Компонент с добавлением данных о лице предоставляющем информацию
// *********************************************************************************************************************


import React, {useEffect} from "react";

// MUI
import Paper from "@mui/material/Paper";
import {Box, Grid, TextField, Typography} from "@mui/material";

// Пользовательский хук
import useInput from "../../../../global-components/hooks/useInput";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";


const PersonProvidingInformation = props => {

    // Хук для сохранения данных из input
    const post = useInput("", {isEmpty: true});
    const fio = useInput("", {isEmpty: true});
    const phoneNumber = useInput("", {isEmpty: true});
    const email = useInput('', {isEmpty: true, isEmail: true});

    // Обновление стейта родительского компонента
    useEffect(() => {
        props.setField.current = {
            post: post.value,
            fio: fio.value,
            phoneNumber: phoneNumber.value,
            email: email.value,
        }
    }, [email.value, fio.value, phoneNumber.value, post.value, props.setField]);

    return (
        <Paper elevation={3}>
            <HeadBox>Должностное лицо, ответственное за предоставление статистической информации</HeadBox>
            <Box p={4}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                            fullWidth
                            multiline
                            error={(post.isDirty && post.isEmpty)}
                            name='post'
                            value={post.value}
                            onChange={post.onChange}
                            onBlur={(e) => post.onBlur(e)}
                            id="post"
                            label="Должность"
                            variant="standard"
                            helperText={(post.isDirty && post.isEmpty) &&
                                <Typography variant="span" style={{color: 'red'}}>Поле не должно быть
                                    пустым</Typography>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TextField
                            fullWidth
                            multiline
                            error={(fio.isDirty && fio.isEmpty)}
                            name='fio'
                            value={fio.value}
                            onChange={fio.onChange}
                            onBlur={(e) => fio.onBlur(e)}
                            id="fio"
                            label="ФИО"
                            variant="standard"
                            helperText={(fio.isDirty && fio.isEmpty) &&
                                <Typography variant="span" style={{color: 'red'}}>Поле не должно быть
                                    пустым</Typography>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                            fullWidth
                            error={(phoneNumber.isDirty && phoneNumber.isEmpty)}
                            name='phoneNumber'
                            value={phoneNumber.value}
                            onChange={phoneNumber.onChange}
                            onBlur={(e) => phoneNumber.onBlur(e)}
                            id="phoneNumber"
                            label="Номер контактного телефона"
                            variant="standard"
                            helperText={(phoneNumber.isDirty && phoneNumber.isEmpty) &&
                                <Typography variant="span" style={{color: 'red'}}>Поле не должно быть
                                    пустым</Typography>}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                        <TextField
                            fullWidth
                            error={(email.isDirty && email.isEmpty) || (email.isDirty && email.emailError)}
                            type="email"
                            name="email"
                            value={email.value}
                            onChange={email.onChange}
                            onBlur={email.onBlur}
                            id="email"
                            label="Электронная почта"
                            variant="standard"
                        />
                        {(email.isDirty && email.isEmpty) &&
                            <Typography variant="span" style={{color: 'red', fontSize: '14px'}}>Поле не должно быть
                                пустым</Typography>}
                        {(email.isDirty && email.emailError) &&
                            <Typography variant="span" style={{color: 'red', fontSize: '14px'}}>Неккоректная запись
                                электронной почты</Typography>}
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    );
};

export default PersonProvidingInformation;