// *********************************************************************************************************************
// Компонент с блоками формы "Раздел 1"
// *********************************************************************************************************************


import React, {useContext, useRef, useState} from "react";

// MUI
import {AppBar, Box, Button, Fab, Grid, Stack, Toolbar, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from "@mui/icons-material/Delete";
import Pagination from '@mui/material/Pagination';

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
        transmittedAfterUseField: [],
        usedForTheYearComponents: [],
        transmittedWithoutUseComponents: [],
        transmittedAfterUseComponents: [],
    };

    const {arrayPageFormChapter1} = useContext(MovementWaterResourcesContext);

    const [page, setPage] = useState(1);

    const authorizationDocumentField = useRef(arrayPageFormChapter1.current[0].authorizationDocumentField);
    const authorizationDocumentFlag = useRef(false);

    const waterSupplySourceField = useRef(arrayPageFormChapter1.current[0].waterSupplySource);
    const waterSupplySourceFlag = useRef(false);

    const fencePeriodsField = useRef(arrayPageFormChapter1.current[0].fencePeriodsField);
    const fencePeriodsFlag = useRef(false);

    const availableAccountedField = useRef(arrayPageFormChapter1.current[0].availableAccountedField);
    const availableAccountedFlag = useRef(false);

    const usedWaterField = useRef(arrayPageFormChapter1.current[0].usedWaterField);
    const usedWaterFlag = useRef(false);


    const usedForTheYearField = useRef(arrayPageFormChapter1.current[0].usedForTheYearField);
    const usedForTheYearFlag = useRef(false);
    const usedForTheYearComponents = useRef(arrayPageFormChapter1.current[0].usedForTheYearComponents);

    const transmittedWithoutUseField = useRef(arrayPageFormChapter1.current[0].transmittedWithoutUseField);
    const transmittedWithoutUseFlag = useRef(false);
    const transmittedWithoutUseComponents = useRef(arrayPageFormChapter1.current[0].transmittedWithoutUseComponents);


    const transmittedAfterUseField = useRef(arrayPageFormChapter1.current[0].transmittedAfterUseField);
    const transmittedAfterUseFlag = useRef(false);
    const transmittedAfterUseComponents = useRef(arrayPageFormChapter1.current[0].transmittedAfterUseComponents);

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
        arrayPageFormChapter1.current = [...arrayPageFormChapter1.current, initialValues]

        // Указываем номер новой формы
        setPage(arrayPageFormChapter1.current.length);
    };

    const handlerPage = (event, flag) => {

        let numberPage = 0;

        if (flag === true) {
            numberPage = +event
        } else {
            numberPage = +event.target.outerText - 1;
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

        // Передаем в дочерний компонент начальные данные
        authorizationDocumentField.current = arrayPageFormChapter1.current[numberPage].authorizationDocumentField;
        waterSupplySourceField.current = arrayPageFormChapter1.current[numberPage].waterSupplySource;
        fencePeriodsField.current = arrayPageFormChapter1.current[numberPage].fencePeriodsField;
        availableAccountedField.current = arrayPageFormChapter1.current[numberPage].availableAccountedField;
        usedWaterField.current = arrayPageFormChapter1.current[numberPage].usedWaterField;
        usedForTheYearField.current = arrayPageFormChapter1.current[numberPage].usedForTheYearField;
        usedForTheYearComponents.current = arrayPageFormChapter1.current[numberPage].usedForTheYearComponents;
        transmittedWithoutUseField.current = arrayPageFormChapter1.current[numberPage].transmittedWithoutUseField;
        transmittedWithoutUseComponents.current = arrayPageFormChapter1.current[numberPage].transmittedWithoutUseComponents;
        transmittedAfterUseField.current = arrayPageFormChapter1.current[numberPage].transmittedAfterUseField;
        transmittedAfterUseComponents.current = arrayPageFormChapter1.current[numberPage].transmittedAfterUseComponents;

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
                                <Stack sx={{flexGrow: 1}} direction={'row'}>
                                    <Pagination
                                        size="large"
                                        count={arrayPageFormChapter1.current.length}
                                        variant="outlined"
                                        color="primary"
                                        page={page}
                                        onClick={(e) => handlerPage(e, false)}
                                        hidePrevButton
                                        hideNextButton
                                    />
                                    <Fab
                                        sx={{width: 40, minHeight: 40, height: 40}}
                                        color="primary"
                                        aria-label="add"
                                        onClick={handlerNewPage}
                                    >
                                        <AddIcon/>
                                    </Fab>
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <Button
                                    variant="text"
                                    color={'error'}
                                    disabled={page - 2 < 0}
                                    aria-label="delete"
                                    onClick={() => {
                                        if (+page - 2 >= 0) {
                                            handlerPage(+page - 2, true);
                                            arrayPageFormChapter1.current = arrayPageFormChapter1.current.filter((n) => {
                                                return n !== arrayPageFormChapter1.current[page - 1]
                                            })
                                        }
                                    }}
                                    endIcon={<DeleteIcon/>}
                                >
                                    Удалить страницу
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <AuthorizationDocument
                                    authorizationDocumentField={authorizationDocumentField}
                                    authorizationDocumentFieldGlobal={
                                        arrayPageFormChapter1.current[page - 1].authorizationDocumentField
                                    }
                                    authorizationDocumentFlag={authorizationDocumentFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <WaterSupplySource
                                    waterSupplySourceField={waterSupplySourceField}
                                    waterSupplySourceFieldGlobal={
                                        arrayPageFormChapter1.current[page - 1].waterSupplySource
                                    }
                                    waterSupplySourceFlag={waterSupplySourceFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <FencePeriods
                                    fencePeriodsField={fencePeriodsField}
                                    fencePeriodsFieldGlobal={arrayPageFormChapter1.current[page - 1].fencePeriodsField}
                                    fencePeriodsFlag={fencePeriodsFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
                                <AvailableAccounted
                                    availableAccountedField={availableAccountedField}
                                    availableAccountedFieldGlobal={
                                        arrayPageFormChapter1.current[page - 1].availableAccountedField
                                    }
                                    availableAccountedFlag={availableAccountedFlag}
                                    authorizationDocumentField={authorizationDocumentField}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
                                <UsedWater
                                    usedWaterField={usedWaterField}
                                    usedWaterFieldGlobal={arrayPageFormChapter1.current[page - 1].usedWaterField}
                                    usedWaterFlag={usedWaterFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <UsedForTheYearContext.Provider value={[
                                    usedForTheYearField,
                                    usedForTheYearFlag,
                                    usedForTheYearComponents
                                ]}>
                                    <UsedForTheYearTemplate
                                        usedForTheYearComponentsGlobal={arrayPageFormChapter1.current[page - 1].usedForTheYearComponents}/>
                                </UsedForTheYearContext.Provider>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <TransmittedWithoutUseContext.Provider value={[
                                    transmittedWithoutUseField,
                                    transmittedWithoutUseFlag,
                                    transmittedWithoutUseComponents
                                ]}>
                                    <TransmittedWithoutUseTemplate
                                        transmittedWithoutUseComponentsGlobal={arrayPageFormChapter1.current[page - 1].transmittedWithoutUseComponents}/>
                                </TransmittedWithoutUseContext.Provider>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <TransmittedAfterUseContext.Provider value={[
                                    transmittedAfterUseField,
                                    transmittedAfterUseFlag,
                                    transmittedAfterUseComponents
                                ]}>
                                    <TransmittedAfterUseTemplate
                                        transmittedAfterUseComponentsGlobal={arrayPageFormChapter1.current[page - 1].transmittedAfterUseComponents}/>
                                </TransmittedAfterUseContext.Provider>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};