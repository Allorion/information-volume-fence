// *********************************************************************************************************************
// Компонент с блоками формы "Раздел 1"
// *********************************************************************************************************************



import React, {useContext, useRef, useState} from "react";

// MUI
import {Box, Button, ButtonGroup, Grid, IconButton, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

// Компоненты
import AuthorizationDocument from "./component/AuthorizationDocument";
import WaterSupplySource from "./component/WaterSupplySource";
import FencePeriods from "./component/FencePeriods";
import UsedWater from "./component/UsedWater";
import AvailableAccounted from "./component/AvailableAccounted";
import UsedForTheYearTemplate from "./component/UsedForTheYearTemplate";
import TransmittedWithoutUseTemplate from "./component/TransmittedWithoutUseTemplate";
import TransmittedAfterUseTemplate from "./component/TransmittedAfterUseTemplate";

// Контекст
import MovementWaterResourcesContext from "../context/MovementWaterResourcesContext";
import UsedForTheYearContext from "./context/UsedForTheYearContext";
import TransmittedWithoutUseContext from "./context/TransmittedWithoutUseContext";
import TransmittedAfterUseContext from "./context/TransmittedAfterUseContext";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MovementWaterResourcesTemplate() {

    const initialValues = {
        authorizationDocumentField: {
            typeDocument: 'null',
            numberDocument: '',
            dateDocument: new Date(),
            codeGuivProvider: ''
        },
        waterSupplySource: {
            nameWaterObjectName: 'Наименование водного объекта',
            nameWaterObjectCode: 'Код водного объекта',
            typeSource: '',
            distanceMouth: '',
            waterQualityCategories: ''
        },
        fencePeriodsField: {
            january: '',
            february: '',
            march: '',
            april: '',
            may: '',
            june: '',
            july: '',
            august: '',
            september: '',
            october: '',
            november: '',
            december: '',
            justYear: ''
        },
        availableAccountedField: {
            permissibleVolumeWaterIntake: '',
            measured: '',
            transportationLosses: ''
        },
        usedWaterField: {
            processed: '',
            repeat: '',
            usedForYear: ''
        },
        usedForTheYearField: [],
        transmittedWithoutUseField: [],
        transmittedAfterUseField: []
    };

    const {arrayPageForm} = useContext(MovementWaterResourcesContext);

    const [page, setPage] = useState(1);

    const authorizationDocumentField = useRef(initialValues.authorizationDocumentField);
    const authorizationDocumentFlag = useRef(false);

    const waterSupplySourceField = useRef(initialValues.waterSupplySource);
    const waterSupplySourceFlag = useRef(false);

    const fencePeriodsField = useRef(initialValues.fencePeriodsField);
    const fencePeriodsFlag = useRef(false);

    const availableAccountedField = useRef(initialValues.availableAccountedField);
    const availableAccountedFlag = useRef(false);

    const usedWaterField = useRef(initialValues.usedWaterField);
    const usedWaterFlag = useRef(false);


    const usedForTheYearField = useRef([]);
    const usedForTheYearFlag = useRef(false);
    const usedForTheYearComponents = useRef([]);

    const transmittedWithoutUseField = useRef([]);
    const transmittedWithoutUseFlag = useRef(false);
    const transmittedWithoutUseComponents = useRef([]);


    const transmittedAfterUseField = useRef([]);
    const transmittedAfterUseFlag = useRef(false);
    const transmittedAfterUseComponents = useRef([]);

    const handlerNewPage = () => {

        // Собираем данные из компонентов
        authorizationDocumentFlag.current = true;
        waterSupplySourceFlag.current = true;
        fencePeriodsFlag.current = true;
        availableAccountedFlag.current = true;
        usedWaterFlag.current = true;
        usedForTheYearFlag.current = true;
        transmittedWithoutUseFlag.current = true;
        transmittedAfterUseFlag.current = true;

        // Сохраняем данные в глобальный массив
        arrayPageForm.current[page - 1].authorizationDocumentField = authorizationDocumentField.current;
        arrayPageForm.current[page - 1].waterSupplySource = waterSupplySourceField.current;
        arrayPageForm.current[page - 1].fencePeriodsField = fencePeriodsField.current;
        arrayPageForm.current[page - 1].availableAccountedField = availableAccountedField.current;
        arrayPageForm.current[page - 1].usedWaterField = usedWaterField.current;
        arrayPageForm.current[page - 1].usedForTheYearField = usedForTheYearField.current;
        arrayPageForm.current[page - 1].usedForTheYearComponents = usedForTheYearComponents.current;
        arrayPageForm.current[page - 1].transmittedWithoutUseField = transmittedWithoutUseField.current;
        arrayPageForm.current[page - 1].transmittedWithoutUseComponents = transmittedWithoutUseComponents.current;
        arrayPageForm.current[page - 1].transmittedAfterUseField = transmittedAfterUseField.current;
        arrayPageForm.current[page - 1].transmittedAfterUseComponents = transmittedAfterUseComponents.current;

        // Передаем в дочерний компонент начальные данные
        authorizationDocumentField.current = initialValues.authorizationDocumentField;
        waterSupplySourceField.current = initialValues.waterSupplySource;
        fencePeriodsField.current = initialValues.fencePeriodsField;
        availableAccountedField.current = initialValues.availableAccountedField;
        usedWaterField.current = initialValues.usedWaterField;
        usedForTheYearField.current = [];
        usedForTheYearComponents.current = [];
        transmittedWithoutUseField.current = [];
        transmittedWithoutUseComponents.current = [];
        transmittedAfterUseField.current = [];
        transmittedAfterUseComponents.current = [];

        // Добавляем пустую форму в общий массив форм
        arrayPageForm.current = [...arrayPageForm.current, initialValues]

        // Указываем номер новой формы
        setPage(arrayPageForm.current.length);
    };

    const handlerPage = (event, flag) => {

        let numberPage = 0;

        if (flag === true) {
            numberPage = +event
        }else {
            numberPage = +event.target.value;
        }

        // Собираем данные из компонентов
        authorizationDocumentFlag.current = true;
        waterSupplySourceFlag.current = true;
        fencePeriodsFlag.current = true;
        availableAccountedFlag.current = true;
        usedWaterFlag.current = true;
        usedForTheYearFlag.current = true;
        transmittedWithoutUseFlag.current = true;
        transmittedAfterUseFlag.current = true;

        // Сохраняем данные в глобальный массив
        arrayPageForm.current[page - 1].authorizationDocumentField = authorizationDocumentField.current;
        arrayPageForm.current[page - 1].waterSupplySource = waterSupplySourceField.current;
        arrayPageForm.current[page - 1].fencePeriodsField = fencePeriodsField.current;
        arrayPageForm.current[page - 1].availableAccountedField = availableAccountedField.current;
        arrayPageForm.current[page - 1].usedWaterField = usedWaterField.current;
        arrayPageForm.current[page - 1].usedForTheYearField = usedForTheYearField.current;
        arrayPageForm.current[page - 1].usedForTheYearComponents = usedForTheYearComponents.current;
        arrayPageForm.current[page - 1].transmittedWithoutUseField = transmittedWithoutUseField.current;
        arrayPageForm.current[page - 1].transmittedWithoutUseComponents = transmittedWithoutUseComponents.current;
        arrayPageForm.current[page - 1].transmittedAfterUseField = transmittedAfterUseField.current;
        arrayPageForm.current[page - 1].transmittedAfterUseComponents = transmittedAfterUseField.current;

        // Передаем в дочерний компонент начальные данные
        authorizationDocumentField.current = arrayPageForm.current[numberPage].authorizationDocumentField;
        waterSupplySourceField.current = arrayPageForm.current[numberPage].waterSupplySource;
        fencePeriodsField.current = arrayPageForm.current[numberPage].fencePeriodsField;
        availableAccountedField.current = arrayPageForm.current[numberPage].availableAccountedField;
        usedWaterField.current = arrayPageForm.current[numberPage].usedWaterField;
        usedForTheYearField.current = arrayPageForm.current[numberPage].usedForTheYearField;
        usedForTheYearComponents.current = arrayPageForm.current[numberPage].usedForTheYearComponents;
        transmittedWithoutUseField.current = arrayPageForm.current[numberPage].transmittedWithoutUseField;
        transmittedWithoutUseComponents.current = arrayPageForm.current[numberPage].transmittedWithoutUseComponents;
        transmittedAfterUseField.current = arrayPageForm.current[numberPage].transmittedAfterUseField;
        transmittedAfterUseComponents.current = arrayPageForm.current[numberPage].transmittedAfterUseComponents;

        // Указываем номер новой формы
        setPage(numberPage + 1);
    };

    return (
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box p={2}>
                        <Typography variant="h5" align='center' mb={2}>Раздел 1</Typography>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <ButtonGroup variant="outlined" aria-label="outlined button group">
                                    {arrayPageForm.current.map((obj, index) =>(
                                        <Button value={index} key={index} onClick={e => handlerPage(e, false)}>{index + 1}</Button>
                                    ))}
                                    <Button size='small' onClick={handlerNewPage}>
                                        <AddIcon/>
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <IconButton disabled={page-2 < 0} aria-label="delete" color='error' onClick={() => {
                                    if (+page - 2 >= 0) {
                                        handlerPage(+page - 2, true);
                                        arrayPageForm.current = arrayPageForm.current.filter((n) => {
                                            return n !== arrayPageForm.current[page - 1]
                                        })
                                    }
                                }}>
                                    <DeleteIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <AuthorizationDocument
                                    authorizationDocumentField={authorizationDocumentField}
                                    authorizationDocumentFlag={authorizationDocumentFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <WaterSupplySource
                                    waterSupplySourceField={waterSupplySourceField}
                                    waterSupplySourceFlag={waterSupplySourceFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <FencePeriods
                                    fencePeriodsField={fencePeriodsField}
                                    fencePeriodsFlag={fencePeriodsFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
                                <AvailableAccounted
                                    availableAccountedField={availableAccountedField}
                                    availableAccountedFlag={availableAccountedFlag}
                                    authorizationDocumentField={authorizationDocumentField}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
                                <UsedWater
                                    usedWaterField={usedWaterField}
                                    usedWaterFlag={usedWaterFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <UsedForTheYearContext.Provider value={[
                                    usedForTheYearField,
                                    usedForTheYearFlag,
                                    usedForTheYearComponents
                                ]}>
                                    <UsedForTheYearTemplate/>
                                </UsedForTheYearContext.Provider>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <TransmittedWithoutUseContext.Provider value={[
                                    transmittedWithoutUseField,
                                    transmittedWithoutUseFlag,
                                    transmittedWithoutUseComponents
                                ]}>
                                    <TransmittedWithoutUseTemplate/>
                                </TransmittedWithoutUseContext.Provider>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <TransmittedAfterUseContext.Provider value={[
                                    transmittedAfterUseField,
                                    transmittedAfterUseFlag,
                                    transmittedAfterUseComponents
                                ]}>
                                    <TransmittedAfterUseTemplate/>
                                </TransmittedAfterUseContext.Provider>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};