// *******************************************************
// Родительский компонент добавления отчета по сбросу воды
// *******************************************************

import React, {useMemo, useState} from "react";

// MUI
import {Button, Grid, Stack} from "@mui/material";

// Роутинг
import {Link} from "react-router-dom";

// Компоненты
import NavBar from "../../../global-components/components/NavBar";
import FormReportAdd from "../../../global-components/components/FormReportAdd";
import AddDetailsReportsVolumeDischarge from "./components/AddDetailsReportsVolumeDischarge";
import AddDetailsReportsVolumeDischargeContext from "./context/AddDetailsReportsVolumeDischargeContext";
import TableReportsVolumeDischarge from "./components/TableReportsVolumeDischarge";
import TableReportsVolumeDischargeContext from "./context/TableReportsVolumeDischargeContext";


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
                <Grid item xs={0} md={2} xl={2}/>
                <Grid item xs={12} md={8} xl={8}>
                    <NavBar/>
                    <FormReportAdd/>
                    <Stack spacing={2} direction='row' mt={4}>
                        <Link to="/web/guest/factual-water-usage/" style={{textDecoration: 'none'}}>
                            <Button variant="contained" color="success">Сохранить</Button>
                        </Link>
                        <AddDetailsReportsVolumeDischargeContext.Provider value={addingInformationMemo}>
                            <AddDetailsReportsVolumeDischarge/>
                        </AddDetailsReportsVolumeDischargeContext.Provider>
                    </Stack>
                    <Grid item xs={0} md={2} xl={2}/>
                </Grid>
            </Grid>
            <TableReportsVolumeDischargeContext.Provider value={addingInformationMemo}>
                <TableReportsVolumeDischarge/>
            </TableReportsVolumeDischargeContext.Provider>
        </React.Fragment>
    );
};

export default AddReportsVolumeDischarge;