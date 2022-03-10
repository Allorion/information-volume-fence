// ***************************************************************
// Родительский компонент добавления отчета по учёту качества воды
// ***************************************************************


import React, {useMemo, useState} from "react";
import {Button, Grid, Stack} from "@mui/material";
import NavBar from "../../../global-components/components/NavBar";
import {Link} from "react-router-dom";
import FormAddReportWaterQualityAccounting from "./components/FormAddReportWaterQualityAccounting";
import AddDetailsReportWaterQualityAccounting from "./components/AddDetailsReportWaterQualityAccounting";
import AddDetailsReportWaterQualityAccountingContext from "./context/AddDetailsReportWaterQualityAccountingContext";
import TableDetailsReportWaterQualityAccounting from "./components/TableDetailsReportWaterQualityAccounting";
import TableDetailsReportWaterQualityAccountingContext from "./context/TableDetailsReportWaterQualityAccountingContext";


export default function AddReportWaterQualityAccounting() {

    // Создаем массив для хранения значений таблицы дополнительных сведеней
    const [addingWaterQualityAccounting, setAddingWaterQualityAccounting] = useState([]);

    // Функция для отправки данных в дочерний компонент по добавлению нового объекта в массив значений таблицы
    const addingWaterQualityAccountingMemo = useMemo(() => {
        return [addingWaterQualityAccounting, setAddingWaterQualityAccounting];
    }, [addingWaterQualityAccounting])

    return (
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} md={2} xl={2}/>
                <Grid item xs={12} md={8} xl={8}>
                    <NavBar/>
                    <FormAddReportWaterQualityAccounting/>
                    <Stack spacing={2} direction='row' mt={4}>
                        <AddDetailsReportWaterQualityAccountingContext.Provider
                            value={addingWaterQualityAccountingMemo}>
                            <AddDetailsReportWaterQualityAccounting/>
                        </AddDetailsReportWaterQualityAccountingContext.Provider>
                        <Link to="/web/guest/factual-waterusage/" style={{textDecoration: 'none'}}>
                            <Button variant="contained" color="success">Сохранить</Button>
                        </Link>
                    </Stack>
                    <Grid item xs={0} md={2} xl={2}/>
                </Grid>
            </Grid>
            <TableDetailsReportWaterQualityAccountingContext.Provider value={addingWaterQualityAccountingMemo}>
                <TableDetailsReportWaterQualityAccounting/>
            </TableDetailsReportWaterQualityAccountingContext.Provider>
        </React.Fragment>
    );
};