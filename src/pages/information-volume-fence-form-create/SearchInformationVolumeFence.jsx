import React, {useContext, useMemo, useState} from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";
import {
    Box,
    Button, Fab,
    MenuItem, Stack, TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import {LocalizationProvider} from "@mui/lab";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import DeleteIcon from '@mui/icons-material/Delete';

import {ru} from "date-fns/locale";
import ChoosingLegalEntityForm from "./components";
import AppContext from "./components/AppContext";
import FormAddingInformation from "./components/FormAddingInformation";
import FormEditDetailInformation from "./components/FormEditDetailInformation";
import {Link} from "react-router-dom";

export default function SearchInformationVolumeFence() {

    const HeadBox = styled(Paper)(({theme}) => ({
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
        background: '#eceff1',
        fontSize: '18px'
    }));

    const subjects = [
        {
            value: 'Юр.лицо',
            label: 'Юр.лицо',
        },
        {
            value: 'Физ.лицо',
            label: 'Физ.лицо',
        },
        {
            value: 'ИП',
            label: 'ИП',
        },
    ];
    const globalHooks = useContext(AppContext);

    const [structuralDivision, setStructuralDivision] = useState('');
    const [dataStructuralDivision, setDataStructuralDivision] = useState({drinks: []});

    const [subject, setSubject] = useState('');

    const [dateRange, setDateRange] = useState([null, null]);

    const [nameSubjectRf, setNameSubjectRf] = useState('');
    const [dataNameSubjectRf, setDataNameSubjectRf] = useState({drinks: []})

    const [waterManagementAndCode, setWaterManagementAndCode] = useState('');
    const [dataWaterManagementAndCode, setDataWaterManagementAndCode] = useState({drinks: []});

    const [listDetailsTable, setListDetailsTable] = useState([]);

    useMemo(() => {
        if (globalHooks.detailsTable.length === 0) {
            return;
        }
        setListDetailsTable([...listDetailsTable, globalHooks.detailsTable])
    }, [globalHooks.detailsTable]);


    const handleRemoveItem = count => {
        const temp = [...listDetailsTable];
        temp.splice(count, 1);
        setListDetailsTable(temp);
    };

    return (
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={0} md={2} xl={2}/>
                <Grid item xs={12} md={8} xl={8}>
                    <Paper elevation={3}>
                        <HeadBox>Сведения по объему забора</HeadBox>
                        <Box p={4}>
                            <Grid container spacing={2} pt={2}>
                                <Grid item xs={12} md={8} xl={8}>
                                    <TextField
                                        fullWidth
                                        id="select-structural-division"
                                        select
                                        label="Структурное подразделение"
                                        value={structuralDivision}
                                        onChange={(event) => {
                                            setStructuralDivision(event.target.value);
                                        }}
                                        helperText="Структурное подразделение"
                                        variant="standard"
                                    >
                                        {globalHooks.isLoading ? (
                                            <MenuItem>Загрузка...</MenuItem>
                                        ) : (
                                            dataStructuralDivision.drinks.map(item => (
                                                <MenuItem key={item.idDrink} value={item.idDrink}>
                                                    {item.strDrink}
                                                </MenuItem>
                                            ))
                                        )}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} md={4} xl={4}>
                                    <TextField
                                        fullWidth
                                        id="select-subject"
                                        select
                                        label="Субъект"
                                        value={subject}
                                        onChange={(event) => {
                                            setSubject(event.target.value);
                                        }}
                                        helperText="Выберите субъект правоотношения"
                                        variant="standard"
                                    >
                                        {globalHooks.isLoading ? (
                                            <MenuItem>Загрузка...</MenuItem>
                                        ) : (
                                            subjects.map((option) => (
                                                <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))
                                        )}
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} pt={2}>
                                <Grid item xs={12} md={4} xl={4}>
                                    <TextField fullWidth disabled id="input-number" label="Номер"
                                               variant="standard"/>
                                </Grid>
                                <Grid item xs={12} md={8} xl={8}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                                        <DateRangePicker
                                            startText="от"
                                            endText="до"
                                            value={dateRange}
                                            onChange={(newValue) => {
                                                setDateRange(newValue);
                                            }}
                                            mask="__.__.____"
                                            renderInput={(startProps, endProps) => (
                                                <React.Fragment>
                                                    <TextField {...startProps} />
                                                    <Box sx={{mx: 2}}> период </Box>
                                                    <TextField {...endProps} />
                                                </React.Fragment>
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} pt={2}>
                                <Grid item xs={8} md={4} xl={4}>
                                    <TextField fullWidth disabled id="input-name-organization"
                                               value={globalHooks.nameOrganization}
                                               label="Наименование организации"
                                               variant="standard" helperText='Выберите из списка свою организацию'/>
                                </Grid>
                                <ChoosingLegalEntityForm/>
                                <Grid item xs={12} md={3} xl={3}>
                                    <TextField fullWidth disabled id="input-inn" label="ИНН"
                                               variant="standard"/>
                                </Grid>
                                <Grid item xs={12} md={3} xl={3}>
                                    <TextField fullWidth disabled id="input-kpp" label="КПП"
                                               variant="standard"/>
                                </Grid>
                            </Grid>
                            <Grid container pt={2}>
                                <Grid item xs={12} md={12} xl={12}>
                                    <TextField fullWidth id="input-postal-address-organization"
                                               label="Почтовый адрес организации"
                                               variant="standard" helperText='Введите почтовый адрес организации'/>
                                </Grid>
                            </Grid>
                            <Grid container pt={2}>
                                <Grid item xs={12} md={12} xl={12}>
                                    <TextField fullWidth id="input-organizational-legal-form-organization"
                                               label="Организационно-правовая форма организации"
                                               variant="standard"
                                               helperText='Введите организационно-правовую форму организации'/>
                                </Grid>
                            </Grid>
                            <Grid container pt={2}>
                                <Grid item xs={12} md={12} xl={12}>
                                    <TextField
                                        fullWidth
                                        id="select-name-subject-rf"
                                        select
                                        label="Наименование субъекта Российской Федерации"
                                        value={nameSubjectRf}
                                        onChange={(event) => {
                                            setNameSubjectRf(event.target.value);
                                        }}
                                        helperText="Выберите субъект Российской Федерации"
                                        variant="standard"
                                    >
                                        {globalHooks.isLoading ? (
                                            <MenuItem>Загрузка...</MenuItem>
                                        ) : (
                                            dataNameSubjectRf.drinks.map(item => (
                                                <MenuItem key={item.idDrink} value={item.idDrink}>
                                                    {item.strDrink}
                                                </MenuItem>
                                            ))
                                        )}
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} pt={2}>
                                <Grid item xs={12} md={6} xl={6}>
                                    <TextField
                                        fullWidth
                                        id="select-water-management-and-code"
                                        select
                                        label="Водохозяйственный участок и его код"
                                        value={waterManagementAndCode}
                                        onChange={(event) => {
                                            setWaterManagementAndCode(event.target.value);
                                        }}
                                        helperText="Выберите водохозяйственный участок и его код"
                                        variant="standard"
                                    >
                                        {globalHooks.isLoading ? (
                                            <MenuItem>Загрузка...</MenuItem>
                                        ) : (
                                            dataWaterManagementAndCode.drinks.map(item => (
                                                <MenuItem key={item.idDrink} value={item.idDrink}>
                                                    {item.strDrink}
                                                </MenuItem>
                                            ))
                                        )}
                                    </TextField>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} pt={2}>
                                <Grid item xs={8} md={10} xl={10}>
                                    <TextField fullWidth disabled id="input-details-document-fence"
                                               label="Реквизиты документа на забор (изъятие водных ресурсов)"
                                               variant="standard"
                                               helperText='Выберите реквизиты документа на забор (изъятие водных ресурсов)'/>
                                </Grid>
                                <Grid item xs={4} md={2} xl={2} mt={2}>
                                    <Button variant="outlined">Выбрать</Button>
                                </Grid>
                            </Grid>
                            <Grid container pt={2}>
                                <Grid item xs={12} md={12} xl={12}>
                                    <TextField fullWidth id="input-brand-water-accounting-devices"
                                               label="Марка приборов водоучета"
                                               variant="standard" helperText='Введите марку приборов водоучета'/>
                                </Grid>
                            </Grid>
                            <Grid container pt={2}>
                                <Grid item xs={12} md={12} xl={12}>
                                    <TextField fullWidth id="input-date-last-verification"
                                               label="Дата последней поверки"
                                               variant="standard" helperText='Введите дату последней поверки'/>
                                </Grid>
                            </Grid>
                            <Grid container pt={2} spacing={2}>
                                <Grid item xs={12} md={12} xl={12}>
                                    <TextField fullWidth id="input-frequency-verification"
                                               label="Периодичность поверки"
                                               variant="standard" helperText='Введите периодичность поверки'/>
                                </Grid>
                            </Grid>
                            <Stack spacing={2} direction='row' mt={4}>
                                <FormAddingInformation/>
                                <Link to="/web/allorion/fw-list/" style={{textDecoration: 'none'}}>
                                    <Button variant="contained" color="success">Сохранить</Button>
                                </Link>
                            </Stack>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={0} md={2} xl={2}/>
            </Grid>


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
}
