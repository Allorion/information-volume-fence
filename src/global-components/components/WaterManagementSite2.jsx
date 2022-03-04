import React, {useContext, useEffect, useState} from "react";
import useLoading from "../hooks/useLoading";
import {Grid, MenuItem, TextField} from "@mui/material";
import WaterManagementSiteContext from "./context/WaterManagementSiteContext";
import useFormLate from "../hooks/useFormLate";

const WaterManagementSite2 = () => {

    const [inputs, setInputs] = useState({
        federalDistrict: '',
        subjectRf: '',
        basinDistrict: '',
        riverBasin: '',
        subBasin: ''
    });

    const {loading, handleLoading} = useLoading();

    const [federalDistrictArray, setFederalDistrictArray] = useState([]);
    const [subjectRfArray, setSubjectRfArray] = useState([]);

    const [basinDistrictArray, setBasinDistrictArray] = useState([]);

    const [riverBasinArray, setRiverBasinArray] = useState([]);

    const [subBasinArray, setSubBasinArray] = useState([]);

    const [waterManagementSiteArray, setWaterManagementSiteArray] = useState([]);

    const [values, handleInputSelectParent] = useContext(WaterManagementSiteContext);

    // Импортируем в компонент пользовательский хуки
    const {
        handleInputSelect,
    } = useFormLate(setInputs);

    // useEffect(() => {
    //     handleLoading(true);
    //     Liferay.Service(
    //         '/catalog.federaldistrict/get-by-id',
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
    //         '/catalog.rfsubject/rfs-by-fd-uuids',
    //         {
    //             filter: `{"fdUuids":["${inputs.federalDistrict}"]}`
    //         },
    //         function (obj) {
    //             setSubjectRfArray(obj.result);
    //         }
    //     );
    //     handleLoading(false);
    // }, [inputs.federalDistrict]);
    //
    // useEffect(() => {
    //     handleLoading(true);
    //     Liferay.Service(
    //         '/catalog.rfsubject/get-bd-by-rfs',
    //         {
    //             filter: `["${inputs.subjectRf}"]`
    //         },
    //         function (obj) {
    //             setBasinDistrictArray(obj.result);
    //         }
    //     );
    //     handleLoading(false);
    // }, [inputs.subjectRf]);
    //
    // useEffect(() => {
    //     handleLoading(true);
    //     Liferay.Service(
    //         '/catalog.riverbasin/rb-by-bd',
    //         {
    //             filter: `["${inputs.basinDistrict}"]`
    //         },
    //         function (obj) {
    //             setRiverBasinArray(obj.result);
    //         }
    //     );
    //     handleLoading(false);
    // }, [inputs.basinDistrict]);
    //
    // useEffect(() => {
    //     handleLoading(true);
    //     Liferay.Service(
    //         '/catalog.subbasin/sub-by-rb',
    //         {
    //             filter: `["${inputs.riverBasin}"]`
    //         },
    //         function (obj) {
    //             setSubBasinArray(obj.result);
    //         }
    //     );
    //     handleLoading(false);
    // }, [inputs.riverBasin]);
    //
    // useEffect(() => {
    //     handleLoading(true);
    //     Liferay.Service(
    //         '/catalog.heparcel/hep-by-sub',
    //         {
    //             filter: `["${inputs.subBasin}"]`
    //         },
    //         function (obj) {
    //             setWaterManagementSiteArray(obj.result);
    //         }
    //     );
    //     handleLoading(false);
    // }, [inputs.subBasin]);

    return (
        <React.Fragment>
            <Grid item xs={12} md={12} xl={12}>
                <TextField
                    fullWidth
                    id="select-federal-district"
                    select
                    label="Федеральный округ"
                    name='federalDistrict'
                    value={inputs.federalDistrict}
                    onChange={handleInputSelect}
                    helperText="Федеральный округ"
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
            <Grid item xs={12} md={12} xl={12}>
                <TextField
                    fullWidth
                    id="select-subject-rf"
                    select
                    label="Субъекты РФ"
                    name='subjectRf'
                    value={inputs.subjectRf}
                    onChange={handleInputSelect}
                    helperText="Субъекты РФ"
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
            <Grid item xs={12} md={12} xl={12}>
                <TextField
                    fullWidth
                    id="select-basin-district"
                    select
                    label="Басейновый округ"
                    name='basinDistrict'
                    value={inputs.basinDistrict}
                    onChange={handleInputSelect}
                    helperText="Басейновый округ"
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
            <Grid item xs={12} md={12} xl={12}>
                <TextField
                    fullWidth
                    id="select-river-basin"
                    select
                    label="Речной бассейн"
                    name='riverBasin'
                    value={inputs.riverBasin}
                    onChange={handleInputSelect}
                    helperText="Басейновый округ"
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
            <Grid item xs={12} md={12} xl={12}>
                <TextField
                    fullWidth
                    id="select-sub-basin"
                    select
                    label="Подбассейн"
                    name='subBasin'
                    value={inputs.subBasin}
                    onChange={handleInputSelect}
                    helperText="Подбассейн"
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
            <Grid item xs={12} md={12} xl={12}>
                <TextField
                    fullWidth
                    id="select-water-management-site"
                    select
                    label="Водохозяйственный участок"
                    name='waterManagementSite'
                    value={values.waterManagementSite}
                    onChange={handleInputSelectParent}
                    helperText="Водохозяйственный участок"
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
        </React.Fragment>
    );
}

export default React.memo(WaterManagementSite2);