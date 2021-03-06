// ***********************************************************
// Компонет с выбором водного объекта
// ***********************************************************

import React, {useContext, useState, useEffect} from "react";

// Пользовательские хуки
import useLoading from "../hooks/useLoading";
import useForm from "../hooks/useForm";

// Контекст
import WaterManagementSiteContext from "./context/WaterManagementSiteContext";

// MUI
import {Grid, MenuItem, TextField} from "@mui/material";

const WaterManagementSite = () => {

    // Указывем требуемые поля для формы
    const inputs = {
        federalDistrict: '',
        subjectRf: '',
        basinDistrict: '',
        riverBasin: '',
        subBasin: ''
    };

    // Получаем хук для загрузки
    const {loading, handleLoading} = useLoading();

    // Импортируем в компонент пользовательский хук формы
    const {values, handleChange} = useForm(inputs);

    // Блок стейтов для записи данных полученных из API
    const [federalDistrictArray, setFederalDistrictArray] = useState([]);
    const [subjectRfArray, setSubjectRfArray] = useState([]);

    const [basinDistrictArray, setBasinDistrictArray] = useState([]);

    const [riverBasinArray, setRiverBasinArray] = useState([]);

    const [subBasinArray, setSubBasinArray] = useState([]);

    const [waterManagementSiteArray, setWaterManagementSiteArray] = useState([]);
    // (конец) Блок стейтов для записи данных полученных из API

    // Получаем данные из родительского компонента через контекст
    const [valuesParents, handleChangeParents] = useContext(WaterManagementSiteContext);

    // Блок с запросами к API
    // useEffect(() => {
    //     handleLoading(true);
    //     Liferay.Service(
    //         '/factualwaterusage.federaldistrict/get-by-id',
    //         {
    //             id: '',
    //         },
    //         function (obj) {
    //             setFederalDistrictArray(obj.result.content);
    //         }
    //     );
    //     handleLoading(false);
    // }, []);
    //
    // useEffect(() => {
    //     handleLoading(true);
    //     Liferay.Service(
    //         '/factualwaterusage.rfsubject/rfs-by-fd-uuids',
    //         {
    //             filter: `{"fdUuids":["${values.federalDistrict}"]}`
    //         },
    //         function (obj) {
    //             setSubjectRfArray(obj.result);
    //         }
    //     );
    //     handleLoading(false);
    // }, [values.federalDistrict]);
    //
    // useEffect(() => {
    //     handleLoading(true);
    //     Liferay.Service(
    //         '/factualwaterusage.rfsubject/get-bd-by-rfs',
    //         {
    //             filter: `["${values.subjectRf}"]`
    //         },
    //         function (obj) {
    //             setBasinDistrictArray(obj.result);
    //         }
    //     );
    //     handleLoading(false);
    // }, [values.subjectRf]);
    //
    // useEffect(() => {
    //     handleLoading(true);
    //     Liferay.Service(
    //         '/factualwaterusage.riverbasin/rb-by-bd',
    //         {
    //             filter: `["${values.basinDistrict}"]`
    //         },
    //         function (obj) {
    //             setRiverBasinArray(obj.result);
    //         }
    //     );
    //     handleLoading(false);
    // }, [values.basinDistrict]);
    //
    // useEffect(() => {
    //     handleLoading(true);
    //     Liferay.Service(
    //         '/factualwaterusage.subbasin/sub-by-rb',
    //         {
    //             filter: `["${values.riverBasin}"]`
    //         },
    //         function (obj) {
    //             setSubBasinArray(obj.result);
    //         }
    //     );
    //     handleLoading(false);
    // }, [values.riverBasin]);
    //
    // useEffect(() => {
    //     handleLoading(true);
    //     Liferay.Service(
    //         '/factualwaterusage.heparcel/hep-by-sub',
    //         {
    //             filter: `["${values.subBasin}"]`
    //         },
    //         function (obj) {
    //             setWaterManagementSiteArray(obj.result);
    //         }
    //     );
    //     handleLoading(false);
    // }, [values.subBasin]);
    // Блок с запросами к API

    return (
        <React.Fragment>
            <Grid container spacing={2} pt={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <TextField
                        fullWidth
                        id="select-federal-district"
                        select
                        label="Федеральный округ"
                        name='federalDistrict'
                        value={values.federalDistrict}
                        onChange={handleChange}
                        helperText="Выберите федеральный округ из списка"
                        variant="standard"
                    >
                        {loading ? (
                            <MenuItem>Загрузка...</MenuItem>
                        ) : (
                            federalDistrictArray.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.name}
                                </MenuItem>
                            ))
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>
                    <TextField
                        fullWidth
                        id="select-subject-rf"
                        select
                        label="Субъекты РФ"
                        name='subjectRf'
                        value={values.subjectRf}
                        onChange={handleChange}
                        helperText="Выберите субъект РФ из списка"
                        variant="standard"
                    >
                        {loading ? (
                            <MenuItem>Загрузка...</MenuItem>
                        ) : (
                            subjectRfArray.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.code} - {option.name}
                                </MenuItem>
                            ))
                        )}
                    </TextField>
                </Grid>
            </Grid>
            <Grid container spacing={2} pt={2} pb={2}>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                    <TextField
                        fullWidth
                        id="select-basin-district"
                        select
                        label="Басейновый округ"
                        name='basinDistrict'
                        value={values.basinDistrict}
                        onChange={handleChange}
                        helperText="Выберите басейновый округ из списка"
                        variant="standard"
                    >
                        {loading ? (
                            <MenuItem>Загрузка...</MenuItem>
                        ) : (
                            basinDistrictArray.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.code} - {option.name}
                                </MenuItem>
                            ))
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                    <TextField
                        fullWidth
                        id="select-river-basin"
                        select
                        label="Речной бассейн"
                        name='riverBasin'
                        value={values.riverBasin}
                        onChange={handleChange}
                        helperText="Выберите речной бассейн из списка"
                        variant="standard"
                    >
                        {loading ? (
                            <MenuItem>Загрузка...</MenuItem>
                        ) : (
                            riverBasinArray.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.code} - {option.name}
                                </MenuItem>
                            ))
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                    <TextField
                        fullWidth
                        id="select-sub-basin"
                        select
                        label="Подбассейн"
                        name='subBasin'
                        value={values.subBasin}
                        onChange={handleChange}
                        helperText="Выберите подбассейн из списка"
                        variant="standard"
                    >
                        {loading ? (
                            <MenuItem>Загрузка...</MenuItem>
                        ) : (
                            subBasinArray.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {option.code} - {option.name}
                                </MenuItem>
                            ))
                        )}
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                    <TextField
                        fullWidth
                        id="select-water-management-site"
                        select
                        label="Водохозяйственный участок"
                        name='waterManagementSite'
                        value={valuesParents.waterManagementSite}
                        onChange={handleChangeParents}
                        helperText="Выберите водохозяйственный участок из списка"
                        variant="standard"
                    >
                        {loading ? (
                            <MenuItem>Загрузка...</MenuItem>
                        ) : (
                            waterManagementSiteArray.map((option) => (
                                <MenuItem key={option.id} value={option.name}>
                                    {option.code} - {option.name}
                                </MenuItem>
                            ))
                        )}
                    </TextField>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default React.memo(WaterManagementSite);
