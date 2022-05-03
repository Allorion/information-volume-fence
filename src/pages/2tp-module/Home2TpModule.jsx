// *********************************************************************************************************************
// Компонент с навигационным меню
// *********************************************************************************************************************


import React, {useEffect, useRef, useState} from 'react';

//MUI
import {Box, Button, ButtonGroup, Divider, Grid, Stack} from "@mui/material";
import Paper from "@mui/material/Paper";

//Стили
import HeadBox from "../../global-components/style/HeadBox";

// Контекст
import GeneralDataContext from "./context/GeneralDataContext";
import MovementWaterResourcesContext from "./context/MovementWaterResourcesContext";

//Компоненты
import GeneralDataTemplate from "./general-data/GeneralDataTemplate";
import MovementWaterResourcesTemplate
    from "./movement-water-resources/MovementWaterResourcesTemplate";
import WaterDisposalContext from "./water-disposal/context/WaterDisposalContext";
import WaterDisposalTemplate from "./water-disposal/WaterDisposalTemplate";

const testInit = {
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


export default function Home2TpModule() {

    // Стейты для смены компонента
    const [numberPage, setNumberPage] = useState(0);
    const [page, setPage] = useState();

    // Стейты для хранения данных компонента "Общие данные"
    const organizationField = useRef({
        nameReportingOrganization: '',
        postalAddress: '',
        legalAddress: '',
        okpo: '',
        okved: '',
        guiv: '',
        inn: '',
        okato: ''
    });
    const personProvidingInformationField = useRef({
        post: '',
        fio: '',
        phoneNumber: '',
        email: ''
    });
    const dateReportingField = useRef({
        dateReportingYear: new Date(),
        datePreparationDocument: new Date()
    });

    // Стейт для хранения данных формы "Раздел 1"
    const arrayPageFormChapter1 = useRef([testInit]);

    // Стейт для хранения данных формы "Раздел 2"
    const arrayPageFormChapter2 = useRef([initialValues]);

    // Смена компонентов
    useEffect(() => {
        switch (numberPage) {
            case 0:
                setPage(
                    <GeneralDataContext.Provider value={[
                        organizationField,
                        personProvidingInformationField,
                        dateReportingField
                    ]}>
                        <GeneralDataTemplate/>
                    </GeneralDataContext.Provider>
                );
                break;
            case 1:
                setPage(
                    <MovementWaterResourcesContext.Provider value={{
                        arrayPageFormChapter1,
                    }}>
                        <MovementWaterResourcesTemplate/>
                    </MovementWaterResourcesContext.Provider>
                );
                break;
            case 2:
                setPage(
                    <WaterDisposalContext.Provider value={{
                        arrayPageFormChapter2
                    }}>
                        <WaterDisposalTemplate/>
                    </WaterDisposalContext.Provider>
                );
                break;
            default:
                setPage(<GeneralDataTemplate/>);
                break;
        }
    }, [numberPage])


    return (
        <React.Fragment>
            <Grid container sx={{textOverflow: 'ellipsis'}}>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Paper elevation={3}>
                        <HeadBox>Модуль 2 ТП</HeadBox>
                        <Box>
                            <Grid container justifyContent='center'>
                                <Grid item xs={12} sm={12} md={12} lg={12} xl={12} p={2}>
                                    <Stack
                                        sx={{justifyContent: 'center', padding: 2}}
                                        direction="row"
                                        divider={<Divider orientation="vertical" flexItem/>}
                                        spacing={2}
                                    >
                                        <ButtonGroup variant="outlined" aria-label="text button group">
                                            <Button
                                                onClick={() => {
                                                    setNumberPage(0);
                                                }}
                                            >
                                                Общие данные
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    setNumberPage(1);
                                                }}
                                            >
                                                Раздел 1
                                            </Button>
                                            <Button
                                                onClick={() => {
                                                    setNumberPage(2);
                                                }}
                                            >
                                                Раздел 2
                                            </Button>
                                        </ButtonGroup>
                                    </Stack>
                                </Grid>
                            </Grid>
                            {page}
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};