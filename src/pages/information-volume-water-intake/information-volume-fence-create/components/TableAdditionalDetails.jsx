import React from 'react';

import {
    Fab,
    Grid,
    Stack,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableContainer,
    Table
} from "@mui/material";
import Paper from "@mui/material/Paper";

const TableAdditionalDetails = () => {


    return(
        <React.Fragment>
            <Grid container pt={5} pb={5}>
                <TableContainer component={Paper} sx={{border: 1}}>
                    <Table sx={{minWidth: "100%"}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>#</TableCell>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>Наименование водного
                                    объекта - водоисточника</TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={3}
                                           sx={{border: 1}}>Код</TableCell>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>Номер
                                    водозабора</TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={6} sx={{border: 1}}>Координаты
                                    водозабора</TableCell>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>Цель
                                    водопользования</TableCell>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>Объем допустимого
                                    забора, тыс. м<sup>3</sup></TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={4} sx={{border: 1}}>Фактический
                                    объем забора, тыс. м<sup>3</sup></TableCell>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>Действие</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell size="small" align="center" rowSpan={2} sx={{border: 1}}>вида водного объекта
                                    - водоисточника</TableCell>
                                <TableCell size="small" align="center" rowSpan={2} sx={{border: 1}}>водного объекта -
                                    водоисточника</TableCell>
                                <TableCell size="small" align="center" rowSpan={2} sx={{border: 1}}>категории качества
                                    воды</TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={3} sx={{border: 1}}>с.
                                    Широты</TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={3} sx={{border: 1}}>в.
                                    Долготы</TableCell>
                                <TableCell size="small" align="center" rowSpan={2} sx={{border: 1}}>всего</TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={3} sx={{border: 1}}>в том
                                    числе по месяцам квартала</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell size="small" sx={{border: 1}}>град.</TableCell>
                                <TableCell size="small" sx={{border: 1}}>мин.</TableCell>
                                <TableCell size="small" sx={{border: 1}}>сек.</TableCell>
                                <TableCell size="small" sx={{border: 1}}>град.</TableCell>
                                <TableCell size="small" sx={{border: 1}}>мин.</TableCell>
                                <TableCell size="small" sx={{border: 1}}>сек.</TableCell>
                                <TableCell size="small" sx={{border: 1}}/>
                                <TableCell size="small" sx={{border: 1}}/>
                                <TableCell size="small" sx={{border: 1}}/>
                            </TableRow>
                            <TableRow
                                sx={{'&:last-child td, &:last-child th': {border: 1, rowSpan: 1}}}>
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
                                <TableCell size="small" align="center">13</TableCell>
                                <TableCell size="small" align="center">14</TableCell>
                                <TableCell size="small" align="center">15</TableCell>
                                <TableCell size="small" align="center">16</TableCell>
                                <TableCell size="small" align="center">17</TableCell>
                                <TableCell size="small" align="center">18</TableCell>
                                <TableCell size="small" align="center">19</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {listDetailsTable.map((option, count) => (
                                <TableRow key={count + 1} sx={{
                                    '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                        border: 1,
                                        rowSpan: 1,
                                        align: 'center',
                                        size: "small"
                                    }
                                }}>
                                    <TableCell>{count + 1}</TableCell>
                                    <TableCell>{option[0].nameWaterObject}</TableCell>
                                    <TableCell>{option[0].typeWaterObject}</TableCell>
                                    <TableCell>{option[0].codeWaterObject}</TableCell>
                                    <TableCell>{option[0].waterQualityCategory}</TableCell>
                                    <TableCell>{option[0].waterIntakeNumber}</TableCell>
                                    <TableCell>{option[0].northernLatitudeDegrees}</TableCell>
                                    <TableCell>{option[0].northernLatitudeMinutes}</TableCell>
                                    <TableCell>{option[0].northernLatitudeSeconds}</TableCell>
                                    <TableCell>{option[0].easternLongitudeDegrees}</TableCell>
                                    <TableCell>{option[0].easternLongitudeMinutes}</TableCell>
                                    <TableCell>{option[0].easternLongitudeSeconds}</TableCell>
                                    <TableCell>{option[0].purposeWaterUse}</TableCell>
                                    <TableCell>{option[0].volumePermissibleFence}</TableCell>
                                    <TableCell>{option[0].fullVolume}</TableCell>
                                    <TableCell>{option[0].firstMonth}</TableCell>
                                    <TableCell>{option[0].secondMonth}</TableCell>
                                    <TableCell>{option[0].thirdMonth}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <FormEditDetailInformation count={count}
                                                                       setListDetailsTable={setListDetailsTable}
                                                                       listDetailsTable={listDetailsTable}/>
                                            <Fab color="primary" aria-label="delete"
                                                 onClick={() => handleRemoveItem(count)} size="small">
                                                <DeleteIcon/>
                                            </Fab>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </React.Fragment>
    );
};

export default React.memo(TableAdditionalDetails);