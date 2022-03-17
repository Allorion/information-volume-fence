// ******************************************************
// Родительский компонент добавления отчета по забор воды
// ******************************************************



import React, {useMemo, useState} from "react";

// Роутинг
import {Link} from "react-router-dom";

// MUI
import {Button, Grid, Stack} from "@mui/material";

// Контекст
import AddDetailsReportsVolumeIntakeContext from "./context/AddDetailsReportsVolumeIntakeContext";
import TableReportsVolumeIntakeContext from "./context/TableReportsVolumeIntakeContext";

// Компоненты
import AddDetailsReportsVolumeIntake from "./components/AddDetailsReportsVolumeIntake";
import TableAdditionalDetails from "./components/TableReportsVolumeIntake";
import NavBar from "../../../global-components/components/NavBar";
import FormReportAdd from "../../../global-components/components/FormReportAdd";



const AddReportsVolumeIntake = () => {

    // Создаем массив для хранения значений таблицы дополнительных сведеней
    const [addingInformation, setAddingInformation] = useState([]);

    // Функция для отправки данных в дочерний компонент по добавлению нового объекта в массив значений таблицы
    const addingInformationMemo = useMemo(() => {
        return [addingInformation, setAddingInformation];
    }, [addingInformation])

    return(
      <React.Fragment>
          <Grid container sx={{textOverflow: 'ellipsis'}}>
              <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
              <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
                  <NavBar/>
                  <FormReportAdd title='Создание отчета по объему забора'/>
                  <Stack spacing={2} direction='row' mt={4}>
                      <AddDetailsReportsVolumeIntakeContext.Provider value={addingInformationMemo}>
                          <AddDetailsReportsVolumeIntake/>
                      </AddDetailsReportsVolumeIntakeContext.Provider>
                      <Link to="/web/guest/factual-waterusage/" style={{textDecoration: 'none'}}>
                          <Button variant="contained" color="success">Сохранить</Button>
                      </Link>
                  </Stack>
                  <Grid item xs={0} sm={0} md={1} lg={1} xl={1}/>
              </Grid>
          </Grid>
          <TableReportsVolumeIntakeContext.Provider value={addingInformationMemo}>
              <TableAdditionalDetails/>
          </TableReportsVolumeIntakeContext.Provider>
      </React.Fragment>
    );
};

export default AddReportsVolumeIntake;