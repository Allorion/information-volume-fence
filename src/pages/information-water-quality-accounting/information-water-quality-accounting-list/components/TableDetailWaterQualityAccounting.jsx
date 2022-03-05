// ************************************************************
// Компонент с таблицей найденых отчетов по учёту качества воды
// ************************************************************



import React from "react";

// MUI
import {Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const TableDetailWaterQualityAccounting = () => {

    return(
        <React.Fragment>
            <Grid container mt={4}>
                <Grid item xs={12} sm={12} md={12} xl={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="Таблица">
                            <TableHead>
                                <TableRow>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Дата</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Период</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Номер</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Разрешительный
                                        документ</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Водопользователь</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Наименование органа,
                                        выдавшего разрешительный документ</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Наименование органа,
                                        принимающего отчет</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>Водохозяйственный участок и
                                        его код</TableCell>
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
                                    <TableCell size="small" align="center" sx={{border: 1}} rowSpan={3}>
                                        № п/п</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}} rowSpan={3}>
                                        Наименование водного объекта-водоприемника</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}} rowSpan={3}>
                                        Наименование загрязняющего вещества</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}} colSpan={3}>
                                        Фактический сброс загрязняющих веществ</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}} colSpan={6}>
                                        Разрешенный сброс загрязняющих веществ</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell size="small" align="center" sx={{border: 1}} rowSpan={2}>
                                        мг/дм<sup>3</sup></TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}} rowSpan={2}>
                                        кг</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}} rowSpan={2}>
                                        т</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}} colSpan={3}>
                                        нормативно допустимый</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}} colSpan={3}>
                                        установленный лимит</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell size="small" align="center" sx={{border: 1}}>мг/дм<sup>3</sup></TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>кг</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>т</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>мг/дм<sup>3</sup></TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>кг</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>т</TableCell>
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
                                    <TableCell size="small" align="center">10</TableCell>
                                    <TableCell size="small" align="center">11</TableCell>
                                    <TableCell size="small" align="center">12</TableCell>
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

export default React.memo(TableDetailWaterQualityAccounting);