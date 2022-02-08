import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
    Box,
    Button,
    Container,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    TextField
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";

const HeadBox = styled(Paper)(({theme}) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    background: '#eceff1',
    fontSize: '18px'
}));

export default function SearchInformationVolumeFenceList() {

    const [typePerson, setTypePerson] = useState('');

    return(
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} md={2} xl={2}/>
                <Grid item xs={12} md={8} xl={8}>
                    <Paper elevation={3}>
                        <HeadBox>Сведения по объему забора</HeadBox>
                        <Box p={4}>
                            <Container>
                                <TextField
                                    fullWidth
                                    disabled
                                    id="standard-basic"
                                    label="Структурное подразделение"
                                    variant="standard"
                                    helperText='Структурное подразделение выбирается автоматически в
                                соответствии с данными аккаунта пользователя'
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
                        </Box>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container mt={4}>
                <Grid item xs={12} sm={12} md={12} xl={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="Таблица">
                            <TableHead>
                                <TableRow>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Дата</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Период</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Номер</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Разрешительный документ</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Водопользователь</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Наименование органа, выдавшего разрешительный документ</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Наименование органа, принимающего отчет</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Водохозяйственный участок и его код</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Ответственный</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1}}}
                                >
                                    <TableCell size="small" align="center">1</TableCell>
                                    <TableCell size="small" align="center">2</TableCell>
                                    <TableCell size="small" align="center">3</TableCell>
                                    <TableCell size="small" align="center">4</TableCell>
                                    <TableCell size="small" align="center">5</TableCell>
                                    <TableCell size="small" align="center">6</TableCell>
                                    <TableCell size="small" align="center">7</TableCell>
                                    <TableCell size="small" align="center">8</TableCell>
                                    <TableCell size="small" align="center">9</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>

            <Grid container mt={4}>
                <Grid item xs={12} sm={12} md={12} xl={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="Таблица">
                            <TableHead>
                                <TableRow>
                                    <TableCell size="small" align="center" sx={{border: 1}}>№ п/п</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Водный объект</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Цель водопользования</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Объем допустимого забора, тыс. м3</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Объем фактического забора, тыс. м3</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1}}}
                                >
                                    <TableCell size="small" align="center">1</TableCell>
                                    <TableCell size="small" align="center">2</TableCell>
                                    <TableCell size="small" align="center">3</TableCell>
                                    <TableCell size="small" align="center">4</TableCell>
                                    <TableCell size="small" align="center">5</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};