// ******************************************************************
// Компонент с таблицей дополнительных сведеней по отчету забору воды
// ******************************************************************



import React, {useContext} from 'react';

// MUI
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
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from "@mui/material/Paper";

// Контекст
import TableReportsVolumeIntakeContext from "../context/TableReportsVolumeIntakeContext";

// Компоненты
import EditDetailsReportsVolumeIntake from "./EditDetailsReportsVolumeIntake";


const TableReportsVolumeIntake = () => {

    // Получаем стейт из родительского компонента через контекст
    const [addingInformation, setAddingInformation] = useContext(TableReportsVolumeIntakeContext);

    // Функция удаления данных из таблицы
    const handleRemoveItem = count => {
        const temp = [...addingInformation];
        temp.splice(count, 1);
        setAddingInformation(temp);
    };

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
                            {addingInformation.map((option, count) => (
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
                                    <TableCell>{option.waterIntakeNumber}</TableCell>
                                    <TableCell>{option.northernLatitudeDegrees}</TableCell>
                                    <TableCell>{option.northernLatitudeMinutes}</TableCell>
                                    <TableCell>{option.northernLatitudeSeconds}</TableCell>
                                    <TableCell>{option.easternLongitudeDegrees}</TableCell>
                                    <TableCell>{option.easternLongitudeMinutes}</TableCell>
                                    <TableCell>{option.easternLongitudeSeconds}</TableCell>
                                    <TableCell>{option.purposeWaterUse}</TableCell>
                                    <TableCell>{option.volumePermissibleFence}</TableCell>
                                    <TableCell>{option.fullVolume}</TableCell>
                                    <TableCell>{option.firstMonth}</TableCell>
                                    <TableCell>{option.secondMonth}</TableCell>
                                    <TableCell>{option.thirdMonth}</TableCell>
                                    <TableCell>
                                        <Stack direction="row" spacing={1}>
                                            <EditDetailsReportsVolumeIntake count={count}
                                                                       addingInformation={addingInformation}
                                                                       setAddingInformation={setAddingInformation}/>
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

export default React.memo(TableReportsVolumeIntake);