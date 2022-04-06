// *********************************************************************************************************************
// Компонент с блоком формы "Источник водоснабжения"
// *********************************************************************************************************************


import React, {useMemo} from "react";

// MUI
import {Box, Grid, MenuItem, Stack, TextField} from "@mui/material";
import Paper from "@mui/material/Paper";

// Стили
import HeadBox from "../../../../global-components/style/HeadBox";

// Контекст
import ChoosingWaterFeatureContext from "../../../../global-components/components/context/ChoosingWaterFeatureContext";

// Пользовательские хуки
import useInput from "../../../../global-components/hooks/useInput";

// Компоненты
import ChoosingWaterFeature from "../../../../global-components/components/ChoosingWaterFeature";
import ListWaterBodies from "../../../../global-components/components/selects/ListWaterBodies";
import ListWaterQualityCategories from "../../../../global-components/components/selects/ListWaterQualityCategories";


export default function WaterSupplySource() {

    // Стейты для сохранения полей формы
    const nameWaterObjectCodeName = useInput({
        nameWaterObjectName: 'Наименование водного объекта',
        nameWaterObjectCode: 'Код водного объекта'
    });
    const typeSource = useInput('');
    const distanceMouth = useInput('');
    const waterQualityCategories = useInput('');

    // Получаем селект
    const {arrayObj, loadingListWaterBodies} = ListWaterBodies();
    const {listWaterQualityCategories, loadingListWaterQualityCategories} = ListWaterQualityCategories();


    // Функция рендерит результат только при изменении поля с кодом и названием водного объекта
    const formWaterFeatureSelectionMemo = useMemo(() => {
        return nameWaterObjectCodeName.setValue;
    }, [nameWaterObjectCodeName.setValue]);

    return (
        <React.Fragment>
            <Paper elevation={3}>
                <HeadBox>Данные о источнике</HeadBox>
                <Box p={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>
                            <TextField
                                fullWidth
                                id="select-type-source"
                                select
                                label="Тип источника"
                                name='typeSource'
                                value={typeSource.value}
                                onChange={typeSource.onChange}
                                variant="standard"
                            >
                                {loadingListWaterBodies ? (
                                    <MenuItem>Загрузка...</MenuItem>
                                ) : (
                                    arrayObj.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.getCode} - {option.name}
                                        </MenuItem>
                                    ))
                                )}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>
                            <TextField
                                fullWidth
                                id="select-water-quality-category"
                                select
                                label="Категория качества воды"
                                name='waterQualityCategory'
                                value={waterQualityCategories.value}
                                onChange={waterQualityCategories.onChange}
                                variant="standard"
                            >
                                {loadingListWaterQualityCategories ? (
                                    <MenuItem>Загрузка...</MenuItem>
                                ) : (
                                    listWaterQualityCategories.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.getCode} - {option.name}
                                        </MenuItem>
                                    ))
                                )}
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pt={2}>
                            <Stack spacing={2} direction="row">
                                <TextField
                                    fullWidth
                                    disabled
                                    id="input-name-water-object"
                                    value={nameWaterObjectCodeName.value.nameWaterObjectName + ' / ' + nameWaterObjectCodeName.value.nameWaterObjectCode}
                                    label="Наименование водного объекта - водоприемника / код водного объекта"
                                    variant="standard" helperText='Выберите водный источник'/>
                                <ChoosingWaterFeatureContext.Provider value={
                                    formWaterFeatureSelectionMemo
                                }>
                                    <ChoosingWaterFeature/>
                                </ChoosingWaterFeatureContext.Provider>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>
                            <TextField
                                disabled={true}
                                fullWidth
                                name='code-okato'
                                id="code-okato"
                                label="Код по ОКАТО"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} pt={2}>
                            <TextField
                                disabled={true}
                                fullWidth
                                name='distanceMouth'
                                id="VHU"
                                label="ВХУ"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} pt={2}>
                            <TextField
                                type='number'
                                fullWidth
                                name='distanceMouth'
                                id="distance-mouth"
                                label="Расстояние от устья, км"
                                variant="standard"
                                value={distanceMouth.value}
                                onChange={distanceMouth.onChange}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </React.Fragment>
    );
};