import React from "react";

// MUI
import {Grid, TableBody, TableCell, TableContainer, TableHead, TableRow, Table, Paper} from "@mui/material";

const TableInformation = () => {

    return (
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
                                    <TableCell size="small" align="center" sx={{border: 1}}>№ п/п</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>
                                        Наименование водного объекта-водоприемника</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>
                                        Объем допустимого сброса, тыс. м3</TableCell>
                                    <TableCell size="small" align="center" sx={{border: 1}}>
                                        Объем фактического сброса, тыс. м3</TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1}}}
                                >
                                    <TableCell size="small" align="center">1</TableCell>
                                    <TableCell size="small" align="center">2</TableCell>
                                    <TableCell size="small" align="center">3</TableCell>
                                    <TableCell size="small" align="center">4</TableCell>
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

export default React.memo(TableInformation);