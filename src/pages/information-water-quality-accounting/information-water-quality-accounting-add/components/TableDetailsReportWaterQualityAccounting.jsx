// ***********************************************************************
// Компонент с таблицей дополнительных сведеней по учету загрязненной воды
// ***********************************************************************


import React, {useContext} from "react";

// MUI
import Paper from "@mui/material/Paper";
import {Fab, Grid, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Контекст
import TableDetailsReportWaterQualityAccountingContext
    from "../context/TableDetailsReportWaterQualityAccountingContext";

// Компоненты
import EditDetailsReportWaterQualityAccounting from "./EditDetailsReportWaterQualityAccounting";


const TableDetailsReportWaterQualityAccounting = () => {

    // Получаем стейт из родительского компонента через контекст
    const [addingWaterQualityAccounting, setAddingWaterQualityAccounting] = useContext(
        TableDetailsReportWaterQualityAccountingContext);

    // Функция удаления данных из таблицы
    const handleRemoveItem = count => {
        const temp = [...addingWaterQualityAccounting];
        temp.splice(count, 1);
        setAddingWaterQualityAccounting(temp);
    };

    return (
        <React.Fragment>
            <Grid container pt={5} pb={5}>
                <TableContainer component={Paper} sx={{border: 1}}>
                    <Table sx={{minWidth: "100%"}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>#</TableCell>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>
                                    Наименование водного объекта - водоприемника</TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={3}
                                           sx={{border: 1}}>Код</TableCell>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>
                                    Номер водовыпуска
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={6} sx={{border: 1}}>
                                    Координаты водовыпуска
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>
                                    Загрязняющее вещество
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>
                                    Код загрязняющего вещества
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={3} sx={{border: 1}}>
                                    Фактический сброс загрязняющих веществ
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={6} sx={{border: 1}}>
                                    Разрешенный сброс загрязняющих веществ
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={3} sx={{border: 1}}>Действие</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell size="small" align="center" rowSpan={2} sx={{border: 1}}>
                                    вида водного объекта - водоприемника
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={2} sx={{border: 1}}>
                                    водного объекта - водоприемника
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={2} sx={{border: 1}}>категории качества
                                    воды</TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={3} sx={{border: 1}}>с.
                                    Широты</TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={3} sx={{border: 1}}>в.
                                    Долготы</TableCell>
                                <TableCell size="small" align="center" rowSpan={2} sx={{border: 1}}>
                                    мг/дм<sup>3</sup>
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={2} sx={{border: 1}}>
                                    кг
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={2} sx={{border: 1}}>
                                    т
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={3} sx={{border: 1}}>
                                    нормативно допустимый
                                </TableCell>
                                <TableCell size="small" align="center" rowSpan={1} colSpan={3} sx={{border: 1}}>
                                    установленный лимит
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell size="small" sx={{border: 1}}>град.</TableCell>
                                <TableCell size="small" sx={{border: 1}}>мин.</TableCell>
                                <TableCell size="small" sx={{border: 1}}>сек.</TableCell>
                                <TableCell size="small" sx={{border: 1}}>град.</TableCell>
                                <TableCell size="small" sx={{border: 1}}>мин.</TableCell>
                                <TableCell size="small" sx={{border: 1}}>сек.</TableCell>
                                <TableCell size="small" sx={{border: 1}}>мг/дм<sup>3</sup></TableCell>
                                <TableCell size="small" sx={{border: 1}}>кг</TableCell>
                                <TableCell size="small" sx={{border: 1}}>т</TableCell>
                                <TableCell size="small" sx={{border: 1}}>мг/дм<sup>3</sup></TableCell>
                                <TableCell size="small" sx={{border: 1}}>кг</TableCell>
                                <TableCell size="small" sx={{border: 1}}>т</TableCell>
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
                                <TableCell size="small" align="center">20</TableCell>
                                <TableCell size="small" align="center">21</TableCell>
                                <TableCell size="small" align="center">22</TableCell>
                                <TableCell size="small" align="center">23</TableCell>
                                <TableCell size="small" align="center">24</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {addingWaterQualityAccounting.map((option, count) => (
                                <TableRow key={count + 1} sx={{
                                    '&:nth-of-type(even) td, &:nth-of-type(odd) td, &:nth-of-type(even) th, &:nth-of-type(odd) th': {
                                        border: 1,
                                        rowSpan: 1,
                                        align: 'center',
                                        size: "small"
                                    }
                                }}>
                                    <TableCell>{count + 1}</TableCell>
                                    <TableCell>{option.nameWaterObjectName}</TableCell>
                                    <TableCell>{option.typeWaterObject}</TableCell>
                                    <TableCell>{option.nameWaterObjectCode}</TableCell>
                                    <TableCell>{option.waterQualityCategory}</TableCell>
                                    <TableCell>{option.waterOutletNumber}</TableCell>
                                    <TableCell>{option.northernLatitudeDegrees}</TableCell>
                                    <TableCell>{option.northernLatitudeMinutes}</TableCell>
                                    <TableCell>{option.northernLatitudeSeconds}</TableCell>
                                    <TableCell>{option.easternLongitudeDegrees}</TableCell>
                                    <TableCell>{option.easternLongitudeMinutes}</TableCell>
                                    <TableCell>{option.easternLongitudeSeconds}</TableCell>
                                    <TableCell>{option.pollutingSubstance}</TableCell>
                                    <TableCell>код загрязняющего вещества</TableCell>
                                    <TableCell>{option.actualDischargePollutantMgDm3}</TableCell>
                                    <TableCell>{option.actualDischargePollutantKg}</TableCell>
                                    <TableCell>{option.actualDischargePollutantT}</TableCell>
                                    <TableCell>{option.legallyPermissibleMgDm3}</TableCell>
                                    <TableCell>{option.legallyPermissibleKg}</TableCell>
                                    <TableCell>{option.legallyPermissibleT}</TableCell>
                                    <TableCell>{option.limitSetMgDm3}</TableCell>
                                    <TableCell>{option.limitSetKg}</TableCell>
                                    <TableCell>{option.limitSetT}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <EditDetailsReportWaterQualityAccounting
                                                count={count}
                                                addingWaterQualityAccounting={addingWaterQualityAccounting}
                                                setAddingWaterQualityAccounting={setAddingWaterQualityAccounting}/>
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

export default React.memo(TableDetailsReportWaterQualityAccounting);