// *********************************************************************************************************************
// Компонент с блоками формы "Раздел 2"
// *********************************************************************************************************************


import React, {useContext, useRef, useState} from "react";
import WaterDisposalContext from "./context/WaterDisposalContext";
import {Box, Button, ButtonGroup, Grid, IconButton, Typography} from "@mui/material";
import AuthorizationDocumentComponent from "./components/AuthorizationDocumentComponent";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ReceiverDivertedWatersComponent from "./components/ReceiverDivertedWatersComponent";
import AvailableAccountedComponents from "./components/AvailableAccountedComponents";
import FencePeriodsComponent from "./components/FencePeriodsComponent";
import AllocatedWaterBodiesComponent from "./components/AllocatedWaterBodiesComponent";
import ContentPollutantsContext from "./context/ContentPollutantsContext";
import ContentPollutantsTemplate from "./components/ContentPollutantsTemplate";


export default function WaterDisposalTemplate() {

    const initialValues = {
        authorizationDocumentField: {
            typeDocument: 'null',
            numberDocument: '',
            dateDocument: new Date(),
        },
        receiverDivertedWatersField: {
            receiverTypeCode: '',
            nameWaterObjectName: 'Наименование водного объекта',
            nameWaterObjectCode: 'Код водного объекта',
            distanceMouth: '',
            waterQualityCategories: '',
        },
        availableAccountedField: {
            permissibleVolumeDrainage: '',
            waterWithdrawnPerYear: '',
            takenAccountMeasuringInstruments: '',
        },
        allocatedWaterBodiesField: {
            withoutCleaning: '',
            insufficientlyCleaned: '',
            normativelyClean: '',
            treatmentFacilityCode: '',
            volume: '',
            capacityTreatmentFacilities: '',
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
        contentPollutantsField: [],
        contentPollutantsComponents: [],
    };


    const {arrayPageFormChapter2} = useContext(WaterDisposalContext);

    const [page, setPage] = useState(1);

    const authorizationDocumentField = useRef(arrayPageFormChapter2.current[0].authorizationDocumentField);
    const authorizationDocumentFlag = useRef(false);

    const receiverDivertedWatersField = useRef(arrayPageFormChapter2.current[0].receiverDivertedWatersField);
    const receiverDivertedWatersFlag = useRef(false);

    const availableAccountedField = useRef(arrayPageFormChapter2.current[0].availableAccountedField);
    const availableAccountedFlag = useRef(false);

    const fencePeriodsField = useRef(arrayPageFormChapter2.current[0].fencePeriodsField);
    const fencePeriodsFlag = useRef(false);

    const allocatedWaterBodiesField = useRef(arrayPageFormChapter2.current[0].allocatedWaterBodiesField);
    const allocatedWaterBodiesFlag = useRef(false);

    const contentPollutantsField = useRef(arrayPageFormChapter2.current[0].contentPollutantsField);
    const contentPollutantsFlag = useRef(false);
    const contentPollutantsComponents = useRef(arrayPageFormChapter2.current[0].contentPollutantsComponents);

    const handlerNewPage = () => {

        // Собираем данные из компонентов
        authorizationDocumentFlag.current = true;
        receiverDivertedWatersFlag.current = true;
        availableAccountedFlag.current = true;
        fencePeriodsFlag.current = true;
        allocatedWaterBodiesFlag.current = true;
        contentPollutantsFlag.current = true;

        // Передаем в дочерний компонент начальные данные
        authorizationDocumentField.current = initialValues.authorizationDocumentField;
        receiverDivertedWatersField.current = initialValues.receiverDivertedWatersField;
        availableAccountedField.current = initialValues.availableAccountedField;
        fencePeriodsField.current = initialValues.fencePeriodsField;
        allocatedWaterBodiesField.current = initialValues.allocatedWaterBodiesField;
        contentPollutantsField.current = [];
        contentPollutantsComponents.current = [];

        // Добавляем пустую форму в общий массив форм
        arrayPageFormChapter2.current = [...arrayPageFormChapter2.current, initialValues]

        // Указываем номер новой формы
        setPage(arrayPageFormChapter2.current.length);
    };

    const handlerPage = (event, flag) => {

        let numberPage = 0;

        if (flag === true) {
            numberPage = +event
        } else {
            numberPage = +event.target.value;
        }

        // Собираем данные из компонентов
        authorizationDocumentFlag.current = true;
        receiverDivertedWatersFlag.current = true;
        availableAccountedFlag.current = true;
        fencePeriodsFlag.current = true;
        allocatedWaterBodiesFlag.current = true;
        contentPollutantsFlag.current = true;

        // Передаем в дочерний компонент начальные данные
        authorizationDocumentField.current = arrayPageFormChapter2.current[numberPage].authorizationDocumentField;
        receiverDivertedWatersField.current = arrayPageFormChapter2.current[numberPage].receiverDivertedWatersField;
        availableAccountedField.current = arrayPageFormChapter2.current[numberPage].availableAccountedField;
        fencePeriodsField.current = arrayPageFormChapter2.current[numberPage].fencePeriodsField;
        allocatedWaterBodiesField.current = arrayPageFormChapter2.current[numberPage].allocatedWaterBodiesField;
        contentPollutantsField.current = arrayPageFormChapter2.current[numberPage].contentPollutantsField;
        contentPollutantsComponents.current = arrayPageFormChapter2.current[numberPage].contentPollutantsComponents;

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
                                    {arrayPageFormChapter2.current.map((obj, index) => (
                                        <Button value={index} key={index}
                                                onClick={e => handlerPage(e, false)}>{index + 1}</Button>
                                    ))}
                                    <Button size='small' onClick={handlerNewPage}>
                                        <AddIcon/>
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <IconButton disabled={page - 2 < 0} aria-label="delete" color='error' onClick={() => {
                                    if (+page - 2 >= 0) {
                                        handlerPage(+page - 2, true);
                                        arrayPageFormChapter2.current = arrayPageFormChapter2.current.filter((n) => {
                                            return n !== arrayPageFormChapter2.current[page - 1]
                                        })
                                    }
                                }}>
                                    <DeleteIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <AuthorizationDocumentComponent
                                    authorizationDocumentField={authorizationDocumentField}
                                    authorizationDocumentFieldGlobal={
                                        arrayPageFormChapter2.current[page - 1].authorizationDocumentField
                                    }
                                    authorizationDocumentFlag={authorizationDocumentFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <ReceiverDivertedWatersComponent
                                    receiverDivertedWatersField={receiverDivertedWatersField}
                                    receiverDivertedWatersFieldGlobal={
                                        arrayPageFormChapter2.current[page - 1].receiverDivertedWatersField
                                    }
                                    receiverDivertedWatersFlag={receiverDivertedWatersFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} p={1}>
                                <AvailableAccountedComponents
                                    availableAccountedField={availableAccountedField}
                                    availableAccountedFieldGlobla={
                                        arrayPageFormChapter2.current[page - 1].availableAccountedField
                                    }
                                    availableAccountedFlag={availableAccountedFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <FencePeriodsComponent
                                    fencePeriodsField={fencePeriodsField}
                                    fencePeriodsFieldGlobal={
                                        arrayPageFormChapter2.current[page - 1].fencePeriodsField
                                    }
                                    fencePeriodsFlag={fencePeriodsFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <AllocatedWaterBodiesComponent
                                    allocatedWaterBodiesField={allocatedWaterBodiesField}
                                    allocatedWaterBodiesFieldGlobal={
                                        arrayPageFormChapter2.current[page - 1].allocatedWaterBodiesField
                                    }
                                    allocatedWaterBodiesFlag={allocatedWaterBodiesFlag}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={1}>
                                <ContentPollutantsContext.Provider value={[
                                    contentPollutantsField,
                                    contentPollutantsFlag,
                                    contentPollutantsComponents
                                ]}>
                                    <ContentPollutantsTemplate
                                        contentPollutantsComponentsGlobal={arrayPageFormChapter2.current[page - 1].contentPollutantsComponents}
                                    />
                                </ContentPollutantsContext.Provider>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};