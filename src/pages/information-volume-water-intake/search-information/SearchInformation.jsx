import React, {useState} from "react";

// Импорты компонентов material ui
import {
    Box,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

// Импорты компонентов
import TableInformation from "./components/TableInformation";
import FormSearch from "./components/FormSearch";
import HeadBox from "../../global-components/HeadBox";
import {ContextSearchInformationForm} from "./context/ContextSearchInformationForm";

export default function SearchInformation() {

    const [waterUserNames, setWaterUserNames] = useState("");

    const objContext = {
        waterUserNames, setWaterUserNames,

    }
    console.log(waterUserNames)
    return(
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} md={2} xl={2}/>
                <Grid item xs={12} md={8} xl={8}>
                    <Paper elevation={3}>
                        <HeadBox>Сведения по объему забора</HeadBox>
                        <Box p={4}>
                            {/* Компонент формы */}
                            <ContextSearchInformationForm.Provider value={[objContext]}>
                                <FormSearch/>
                            </ContextSearchInformationForm.Provider>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            {/* Компонент таблицы */}
            <TableInformation/>
        </React.Fragment>
    );
};