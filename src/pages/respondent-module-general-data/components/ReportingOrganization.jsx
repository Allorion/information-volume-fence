import React, {useState} from "react";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {ru} from "date-fns/locale";
import {Box, Grid, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";


export default function ReportingOrganization() {

    const [value, setValue] = useState(new Date());

    return(
        <React.Fragment>
            <Paper elevation={3}>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                            locale={ru}
                        >
                            <DatePicker
                                views={['year']}
                                label="Год"
                                value={value}
                                onChange={(newValue) => {
                                    setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} helperText={null} />}
                            />
                        </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                multiline
                                maxRows={4}
                                id="standard-basic"
                                label="Наименование отчитывающейся организации"
                                variant="standard"
                                helperText='Укажите название отчитывающейся организации'
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                multiline
                                maxRows={4}
                                id="standard-basic"
                                label="Почтовый адресс"
                                variant="standard"
                                helperText="Укажите почтовый адресс отчитывающейся организации"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                multiline
                                maxRows={4}
                                id="standard-basic"
                                label="Юридический адресс"
                                variant="standard"
                                helperText="Укажите юридический адресс отчитывающейся организации"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextField
                                fullWidth
                                id="standard-basic"
                                label="Электронная почта"
                                variant="standard"
                                helperText='Укажите электронную поту отчитывающейся организации'
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    )
}