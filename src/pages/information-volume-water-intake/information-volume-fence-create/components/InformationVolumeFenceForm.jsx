import React, {useState} from 'react';
import {Box, Container, Grid, MenuItem, Stack, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";
import HeadBox from "../../../../global-components/style/HeadBox";
import useForm from "../../../../global-components/hooks/useForm";


const subjects = [
    {
        value: 'Юр.лицо',
        label: 'Юр.лицо',
    },
    {
        value: 'Физ.лицо',
        label: 'Физ.лицо',
    },
    {
        value: 'ИП',
        label: 'ИП',
    },
];

const InformationVolumeFenceForm = () => {

    const [values, setValues] = useState({
        structuralDivision: '',
        subject: subjects[0].value,

    });

    const {handleChange} = useForm(setValues);

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Сведения по объему забора</HeadBox>
                <Box p={4}>
                    <Container>
                        <Stack direction='row' spacing={2}>
                            <TextField
                                fullWidth
                                name='structuralDivision'
                                value={values.structuralDivision}
                                onChange={handleChange}
                                id="select-structural-division"
                                label="Структурное подразделение"
                                helperText="Структурное подразделение"
                                variant="standard"
                            />
                            <TextField
                                fullWidth
                                id="select-subject"
                                select
                                label="Субъект"
                                name='subject'
                                value={values.subject}
                                onChange={handleChange}
                                helperText="Выберите субъект правоотношения"
                                variant="standard"
                            >
                                {subjects.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Stack>
                    </Container>
                </Box>
            </Paper>
        </React.Fragment>
    );
};

export default React.memo(InformationVolumeFenceForm);