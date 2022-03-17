// *******************************************************
// Родительский компонент добавления отчета по сбросу воды
// *******************************************************

import React, {useMemo, useState} from "react";

// MUI
import {Button, Grid, Stack} from "@mui/material";

// Роутинг
import {Link} from "react-router-dom";

// Контекст
import TableReportsVolumeDischargeContext from "./context/TableReportsVolumeDischargeContext";
import AddDetailsReportsVolumeDischargeContext from "./context/AddDetailsReportsVolumeDischargeContext";

// Компоненты
import NavBar from "../../../global-components/components/NavBar";
import FormReportAdd from "../../../global-components/components/FormReportAdd";
import AddDetailsReportsVolumeDischarge from "./components/AddDetailsReportsVolumeDischarge";
import TableReportsVolumeDischarge from "./components/TableReportsVolumeDischarge";



const AddReportsVolumeDischarge = () => {

    // Создаем массив для хранения значений таблицы дополнительных сведеней
    const [addingInformation, setAddingInformation] = useState([]);

    // Функция для отправки данных в дочерний компонент по добавлению нового объекта в массив значений таблицы
    const addingInformationMemo = useMemo(() => {
        return [addingInformation, setAddingInformation];
    }, [addingInformation])

    return (
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
                <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                    <NavBar/>
                    <FormReportAdd title='Создание отчета по объему сброса'/>
                    <Stack spacing={2} direction='row' mt={4}>
                        <AddDetailsReportsVolumeDischargeContext.Provider value={addingInformationMemo}>
                            <AddDetailsReportsVolumeDischarge/>
                        </AddDetailsReportsVolumeDischargeContext.Provider>
                        <Link to="/web/guest/factual-waterusage/" style={{textDecoration: 'none'}}>
                            <Button variant="contained" color="success">Сохранить</Button>
                        </Link>
                    </Stack>
                    <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
                </Grid>
            </Grid>
            <TableReportsVolumeDischargeContext.Provider value={addingInformationMemo}>
                <TableReportsVolumeDischarge/>
            </TableReportsVolumeDischargeContext.Provider>
        </React.Fragment>
    );
};

export default AddReportsVolumeDischarge;