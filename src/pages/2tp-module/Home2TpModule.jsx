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



export default function Home2TpModule() {

    // Стейты для смены компонента
    const [numberPage, setNumberPage] = useState(0);
    const [page, setPage] = useState();

    // Стейты для хранения данных дочерних компонентов
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


    const authorizationDocumentField = useRef({
        typeDocument: 'null',
        numberDocument: '',
        dateDocument: new Date(),
        codeGuivProvider: ''
    });

    const waterSupplySourceField = useRef({
        nameWaterObjectName: 'Наименование водного объекта',
        nameWaterObjectCode: 'Код водного объекта',
        typeSource: '',
        distanceMouth: '',
        waterQualityCategories: ''
    });
    const fencePeriodsField = useRef({
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
    });
    const availableAccountedField = useRef({
        permissibleVolumeWaterIntake: '',
        measured: '',
        transportationLosses: ''
    });
    const usedWaterField = useRef({
        processed: '',
        repeat: '',
        usedForYear: ''
    });
    const usedForTheYearField = useRef({});
    const transmittedWithoutUseField = useRef({});
    const transmittedAfterUseField = useRef({});

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
                        authorizationDocumentField,
                        waterSupplySourceField,
                        fencePeriodsField,
                        availableAccountedField,
                        usedWaterField,
                        usedForTheYearField,
                        transmittedWithoutUseField,
                        transmittedAfterUseField
                    }}>
                        <MovementWaterResourcesTemplate/>
                    </MovementWaterResourcesContext.Provider>
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